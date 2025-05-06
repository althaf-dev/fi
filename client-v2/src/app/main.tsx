'use client';

import React, { PropsWithChildren } from 'react';
import Script from 'next/script';
import { Providers } from '../rtk/provider';
import ThemeProvider from '../Themes/Theme';
import StyledComponentsRegistry from '../lib/registry';

export default function main({ children }: PropsWithChildren) {
    return (
        <>
            <Providers>
                <StyledComponentsRegistry>
                    <ThemeProvider>{children}</ThemeProvider>
                </StyledComponentsRegistry>
            </Providers>
            {/* -- OneLink Smart Script -- */}
            <Script
                type='text/javascript'
                defer
                src='https://dza2kd7rioahk.cloudfront.net/assets/scripts/onelink-smart-script.min.js'
                onReady={() => {
                    // common custom parameters that need to be set for all one link URLs while generating them
                    function setCommonCustomParameters(generatorObject: any) {
                        generatorObject.setCustomParameter('utm_medium', 'af_medium');
                        generatorObject.setCustomParameter('utm_adgroup', 'af_adgroup');
                        generatorObject.setCustomParameter('utm_content', 'af_content');
                        generatorObject.setCustomParameter('utm_placement', 'af_placement');
                        generatorObject.setCustomParameter('utm_term', 'af_keyword');
                    }

                    // returns a function that sets the href attribute on an element given its CSS ID
                    function getID(url: string) {
                        return (id: string) => {
                            const element = document.getElementById(id);
                            if (element) {
                                element.setAttribute('href', url);
                            }
                        };
                    }

                    function setHrefOfElementsByClass(className: string, url: string) {
                        const htmlNodes = document.getElementsByClassName(className);

                        for (let index = 0; index < htmlNodes.length; index += 1) {
                            htmlNodes[index].setAttribute('href', url);
                        }
                    }

                    /**
                 * Main function to build one link URL
                 * Takes in the URL, key name which is needed to set on the window object and list of Element IDs on which the link needs to be set
                */
                    function buildOneLinkUrl(params: any) {
                        const {
                            oneLinkURL, urlKeyName, listofIDs, className, currentPageUrl
                        } = params;

                        if (!oneLinkURL || !urlKeyName) return;

                        const commonAttributes = {
                            pidKeysList: ['utm_source'],
                            pidStaticValue: 'web',
                            campaignKeysList: ['utm_name', 'utm_campaign'],
                            campaignStaticValue: 'web',
                            gclIdParam: 'af_sub1'
                        };
                        const onelinkGenerator = new (window as any).AF.OneLinkUrlGenerator({
                            oneLinkURL,
                            ...commonAttributes,
                        });
                        // Set af_adset parameter with the current page URL
                        if (currentPageUrl) {
                            onelinkGenerator.setAdset('current_page_url', currentPageUrl);
                        }

                        setCommonCustomParameters(onelinkGenerator);

                        const finalOneLinkUrl = onelinkGenerator.generateUrl();

                        // If final one link URL is not built, return
                        if (!finalOneLinkUrl) return;

                        window[urlKeyName] = finalOneLinkUrl;

                        if (listofIDs) {
                            const setURL = getID(finalOneLinkUrl);
                            listofIDs.map((item: any) => setURL(item));
                        }

                        if (className) {
                            setHrefOfElementsByClass(className, finalOneLinkUrl);
                        }
                    }

                    // Function that runs on page load to trigger the smart script to build the outing one link URLs
                    function onelinkUrlGenerator() {
                        const currentPageUrl = window.location.href; // Get the current page URL
                        // onelink URL for Android
                        buildOneLinkUrl({
                            oneLinkURL: 'https://fi.onelink.me/dqvs/',
                            urlKeyName: 'oneLinkAndroidUrl',
                            className: 'onelink-android-url',
                            currentPageUrl,
                        });
                        // onelink URL for iOS
                        buildOneLinkUrl({
                            oneLinkURL: 'https://fi.onelink.me/Dajq/',
                            urlKeyName: 'oneLinkIosUrl',
                            className: 'onelink-ios-url',
                            currentPageUrl,
                        });

                        // onelink URL for web sign up flow
                        buildOneLinkUrl({
                            oneLinkURL: 'https://fi.onelink.me/ljWy/',
                            urlKeyName: 'oneLinkWebSignUpUrl',
                            className: 'onelink-salary-sign-up-url',
                            currentPageUrl,
                        });

                        // onelink URL for common CTAs that do not have specific play store or app store image
                        buildOneLinkUrl({
                            oneLinkURL: 'https://fi.onelink.me/GvZH/',
                            urlKeyName: 'oneLinkCommonUrl',
                            className: 'onelink-common-url',
                            currentPageUrl,
                        });

                        // onelink URL for personal loan
                        buildOneLinkUrl({
                            oneLinkURL: 'https://fi.onelink.me/GvZH/PL',
                            urlKeyName: 'oneLinkCommonUrlPL',
                            className: 'onelink-common-urlPL',
                            currentPageUrl,
                        });
                    }
                    onelinkUrlGenerator();
                    window.onload = onelinkUrlGenerator;
                }}
            />

            {/* -- End OneLink Smart Script -- */}
        </>
    );
}
