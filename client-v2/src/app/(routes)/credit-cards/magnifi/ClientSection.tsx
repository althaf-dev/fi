/* eslint-disable react-hooks/rules-of-hooks */

'use client';

import React, { useRef, useEffect } from 'react';
import PageConfig from './config.json';
import RenderComponent from '@/components/RenderComponent';

interface SectionRefs {
    [key: string]: React.RefObject<HTMLDivElement>;
}

const useIntersectionObserver = (sectionRefs: SectionRefs) => {
    useEffect(() => {
        const isMobileDevice = window.innerWidth <= 768;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && isMobileDevice) {
                        switch (entry.target.children[0].id) {
                            case 'magnifi_banner_section':
                                document?.querySelector('#magnifi_banner_section')?.classList.remove('HideVisiblity');
                                document?.querySelector('#magnifi_banner_section')?.classList.add('Visiblity');
                                document?.querySelector('#magnifi-credit-card')?.classList.add('CreditCardImage');
                                document?.querySelector('#magnifi-text-container')?.classList.add('MagnifiCol');
                                document?.querySelector('#magnifi-section-container')?.classList.add('MagnifiSection');
                                document?.querySelector('#magnifi-text')?.classList.add('MagnifiText');
                                document?.querySelector('#weekend-text')?.classList.add('WeekendCardText');
                                document?.querySelector('#lifetime-text')?.classList.add('LifeTimeFree');
                                document?.querySelector('#highlights_section')?.classList.add('HideVisiblity');
                                document.querySelector('#cashback_section')?.classList.add('HideVisiblity');
                                document.querySelector('#rewards_section')?.classList.add('HideVisiblity');
                                break;
                            case 'highlights_section':
                                document?.querySelector('#highlights_section')?.classList.remove('HideVisiblity');
                                document?.querySelector('#highlights_section')?.classList.add('Visiblity');
                                document.querySelector('#magnifi_banner_section')?.classList.add('HideVisiblity');
                                document.querySelector('#cashback_section')?.classList.add('HideVisiblity');
                                document.querySelector('#rewards_section')?.classList.add('HideVisiblity');
                                document?.querySelector('.highlights_section')?.classList.add('Visiblity');
                                document?.querySelector('.WeekendImage')?.classList.add('FadeIn1s');
                                document?.querySelector('.WeekendRow')?.classList.add('FadeIn1sForwards');
                                break;
                            case 'cashback_section':
                                document?.querySelector('#highlights_section')?.classList.add('HideVisiblity');
                                document.querySelector('#magnifi_banner_section')?.classList.add('HideVisiblity');
                                document.querySelector('#cashback_section')?.classList.remove('HideVisiblity');
                                document?.querySelector('#cashback_section')?.classList.add('Visiblity');
                                document.querySelector('#rewards_section')?.classList.add('HideVisiblity');
                                document?.querySelector('.Cashback2')?.classList.add('TransformFadeIn1sForward1');
                                document?.querySelector('.Cashback3')?.classList.add('FadeIn2sOpacity');
                                document?.querySelector('.Cashback4')?.classList.add('FadeIn2sOpacity');
                                document?.querySelector('.Cashback5')?.classList.add('TransformFadeIn1sForward1');
                                break;
                            case 'rewards_section':
                                document?.querySelector('#highlights_section')?.classList.add('HideVisiblity');
                                document.querySelector('#fi-coins-section')?.classList.add('HideVisiblity');
                                document.querySelector('#cashback_section')?.classList.add('HideVisiblity');
                                document.querySelector('#rewards_section')?.classList.remove('HideVisiblity');
                                document?.querySelector('#rewards_section')?.classList.add('Visiblity');
                                document?.querySelector('.RewardsCard1')?.classList.add('TransformFadeIn1sForward1');
                                document?.querySelector('.RewardsCard2')?.classList.add('TransformFadeIn2sForward');
                                document?.querySelector('.EmiImage')?.classList.add('TransformFadeIn3sForward');
                                break;
                            case 'fi-coins-section':
                                document?.querySelector('#highlights_section')?.classList.add('HideVisiblity');
                                document.querySelector('#magnifi_banner_section')?.classList.add('HideVisiblity');
                                document.querySelector('#cashback_section')?.classList.add('HideVisiblity');
                                document.querySelector('#fi-coins-section')?.classList.remove('HideVisiblity');
                                document?.querySelector('#fi-coins-section')?.classList.add('Visiblity');
                                document.querySelector('#rewards_section')?.classList.add('HideVisiblity');
                                document.querySelector('#carousel-section')?.classList.add('HideVisiblity');
                                break;
                            case 'carousel-section':
                                document?.querySelector('#highlights_section')?.classList.add('HideVisiblity');
                                document.querySelector('#magnifi_banner_section')?.classList.add('HideVisiblity');
                                document.querySelector('#cashback_section')?.classList.add('HideVisiblity');
                                document.querySelector('#carousel-section')?.classList.remove('HideVisiblity');
                                document?.querySelector('#carousel-section')?.classList.add('Visiblity');
                                document?.querySelector('#fi-coins-section')?.classList.add('HideVisiblity');
                                break;
                            default:
                                break;
                        }
                    }
                });
            },
            { threshold: 0.50 }
        );

        Object.values(sectionRefs).forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [sectionRefs]);
};

const ClientSection: React.FC = () => {
    const sectionRefs: SectionRefs = PageConfig.sections.reduce((acc: any, sectionId: string) => {
        acc[sectionId] = useRef(null);
        return acc;
    }, {});

    useIntersectionObserver(sectionRefs);

    return (
        <div className='render-container'>
            {PageConfig.sections.map((id) => (
                <div key={id} ref={sectionRefs[id]}>
                    <RenderComponent key={id} elements={PageConfig.elements} elementId={id} />
                </div>
            ))}
        </div>
    );
};

export default ClientSection;
