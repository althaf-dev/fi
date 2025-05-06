/**
 * @file Breadcrumbs
 * Breadcrumbs component for displaying navigation links based on the current URL path.
 */

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ICONS_URL_MAP } from '../../constants/AssetConstants';
import { convertToString } from '../../utils/formatter';

import { Image } from '../Abstract';

import { Container, Section, Label, IconHolder } from './styled';
import { APP_URLS, NAVIGATION_URLS } from '../../constants/AppConstant';

/**
 * Mapping of breadcrumb segments to their corresponding redirect URLs.
 * This configuration allows for custom redirection when a specific segment is clicked.
 * If a segment is present in the `redirectConfig`, it will be redirected to the specified URL.
 * Otherwise, it will navigate to the default URL based on the breadcrumb path.
 *
 * @example
 * const redirectConfig = {
 *   '/abc': '/custom-page',
 *   '/def': '/another-page',
 * };
 * If the breadcrumb path is '/abc/def/ghi', clicking on 'abc' will redirect to '/custom-page',
 * clicking on 'def' will redirect to '/another-page', and 'ghi' will navigate to the default URL.
 */
const redirectConfig = {
    [APP_URLS.US_STOCKS]: NAVIGATION_URLS.US_STOCKS.url,
};

export interface BreadcrumbsProps {
    name?: any;
}

const Breadcrumbs = (props : BreadcrumbsProps) => {
    const { name } = props;

    const location = useLocation();

    const navigate = useNavigate();

    const path = location?.pathname;

    /**
     * Split the URL path into segments by using '/' as the separator.
     *
     * @example
     * const path = '/abc/def/ghi';
     * since the URL path starts with '/', the resulting array would contain an empty string as the first element: ['', 'abc', 'def', 'ghi'].
     * use filter method To remove these empty segments
     * segments = ['abc', 'def', 'ghi']
     */
    const segments = path.split('/').filter((segment) => segment !== '');

    if (name) {
        segments[1] = `${name}`;
    }

    /**
     * Handle the click event for a breadcrumb segment.
     * If it's the last segment, do nothing.
     * Otherwise, navigate to the specified URL.
     *
     * @param {string} url
     * @param {boolean} isLastSegment
     */
    const onClick = (url, isLastSegment) => () => {
        if (isLastSegment) return;

        const redirectUrl = redirectConfig[url];

        if (redirectUrl) {
            navigate(redirectUrl);
        } else {
            navigate(url);
        }
    };

    return (
        <Container>
            <Section>
                {segments.map((segment, index) => {
                    const url = `/${segments.slice(0, index + 1).join('/')}`;
                    const label = convertToString(segment);
                    const isLastSegment = index + 1 === segments.length;

                    return (
                        <React.Fragment key={url}>
                            {
                                (url === NAVIGATION_URLS.US_STOCKS.url) ? (
                                    <Label href={url}>
                                        {label}
                                    </Label>
                                ) : (
                                    <Label onClick={onClick(url, isLastSegment)}>
                                        {label}
                                    </Label>
                                )
                            }
                            {!isLastSegment ? (
                                <IconHolder>
                                    <Image icon={ICONS_URL_MAP.FADE_RIGHT_ARROW} loadingType='lazy' alt='arrow icon' />
                                </IconHolder>
                            ) : null}
                        </React.Fragment>
                    );
                })}
            </Section>
        </Container>
    );
};

export default Breadcrumbs;
