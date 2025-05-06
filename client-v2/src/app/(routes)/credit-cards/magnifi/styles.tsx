'use client';

import styled from 'styled-components';
import { DEVICE_HEIGHT, Device } from '@/Themes/Device';

export const Wrapper = styled.div`
        .header-container {
                background: #201207;  
        }
        .section-container {
                background: rgb(178,103,33);
                background: radial-gradient(ellipse at center, rgba(178,103,33,1) 0%, rgba(32,18,7,1) 70%);
        }  
        .render-container {
                -webkit-background-size: cover;
                -moz-background-size: cover;
                -o-background-size: cover;
                background-size: cover;
                background-attachment: fixed;
                background: #201207;

                @media ${Device.desktop} {
                    background: #201207;
                }
        }
        .TransformFadeIn1sForward {
                transform: translateY(50vh);
                animation: fadeInUp 1s ease 1s forwards;
                opacity: 0;
                @keyframes fadeInUp {
                    from {
                        opacity: 0.1;
                    }
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                }
            }
            .TransformFadeIn1sForward1 {
                transform: translateY(40vh);
                animation: fadeInUp 0.5s ease 0.5s forwards;
                opacity: 0;
                @keyframes fadeInUp {
                    from {
                        opacity: 0.1;
                    }
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                }
            }
            .TransformFadeIn1sForward2 {
                transform: translateY(40vh);
                animation: fadeInUp 0.5s ease 0s forwards;
                opacity: 0;
                @keyframes fadeInUp {
                    from {
                        opacity: 0.1;
                    }
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                }
            }
            .TransformFadeIn2sForward {
                transform: translateY(50vh);
                animation: fadeInUp 0.75s ease 2s forwards;
                opacity: 0;
                @keyframes fadeInUp {
                    from {
                        opacity: 0.1;
                    }
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                }
            }
            .TransformFadeIn3sForward {
                transform: translateY(50vh);
                animation: fadeInUp 1s ease 3s forwards;
                opacity: 0;
                @keyframes fadeInUp {
                    from {
                        opacity: 0.1;
                    }
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                }
            }

            .TransformFadeIn5sForward {
                transform: translateY(50vh);
                animation: fadeInUp 1s ease 5s forwards;
                opacity: 0;
                @keyframes fadeInUp {
                    from {
                        opacity: 0.1;
                    }
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                }
            }

            .Visiblity {
                animation: Visiblity 1s ease-in forwards;
                @keyframes Visiblity {
                    from {
                        opacity: 0.7;
                    }
                    to {
                        opacity: 1;
                    }
                }
            }

            .HideVisiblity {
                animation: HideVisiblity 1s ease-in forwards;
                @keyframes HideVisiblity {
                    from {
                        opacity: 0.9;
                    }
                    to {
                        opacity: 0;
                    }
                }
            }

            .FadeIn1s {
                animation: fadeIn 1s ease-in;
                @keyframes fadeIn {
                    from {
                        opacity: 0.1;
                    }
                    to {
                        opacity: 1;
                    }
                }
            }
            .FadeIn1sForwards {
                animation: fadeIn1s 1s ease 1s forwards;
                opacity: 0;
                @keyframes fadeIn1s {
                    from {
                        opacity: 0.1;
                    }
                    to {
                        opacity: 1;
                    }
                }
            }
            .FadeIn2s {
                animation: fadeIn2s 1s ease 1s forwards;
                opacity: 0;
                @keyframes fadeIn2s {
                    from {
                        opacity: 0.1;
                    }
                    to {
                        opacity: 1;
                    }
                }
            }

            .FadeIn3s {
                animation: fadeIn3s 1s ease 3s forwards;
                @keyframes fadeIn3s {
                    from {
                        opacity: 0.1;
                    }
                    to {
                        opacity: 1;
                    }
                }
            }

            .FadeIn2sOpacity {
                animation: fadeIn2s 1s ease 1s forwards;
                opacity: 0;
                @keyframes fadeIn2s {
                    from {
                        opacity: 0.1;
                    }
                    to {
                        opacity: 1;
                    }
                }
            }

            .FadeIn3sOpacity {
                animation: fadeIn3s 1s ease 3s forwards;
                opacity: 0;
                @keyframes fadeIn3s {
                    from {
                        opacity: 0.1;
                    }
                    to {
                        opacity: 1;
                    }
                }
            }
            
            .FadeIn1sForward {
                animation: fadeIn1sForward 1s ease 1s forwards;
                @keyframes fadeIn1sForward {
                    from {
                        opacity: 0.1;
                    }
                    to {
                        opacity: 1;
                    }
                }
            }

            .MagnifiCol {
                @media ${DEVICE_HEIGHT.phone} {
                    padding-top: 10px;
                }
                
            }
            .MagnifiText {
                @media ${DEVICE_HEIGHT.phone} {
                    font-size: 72px;
                    margin: 0px auto 10px;
                }
            }
            .WeekendCardText {
                @media ${DEVICE_HEIGHT.phone} {
                    font-size: 16px;
                    margin: 0px auto 6px;
                }
            }
            .LifeTimeFree {
                @media ${DEVICE_HEIGHT.phone} {
                    margin: 0px auto;
                    font-size: 16px;
                }
            }
            .MagnifiSection {
                @media ${DEVICE_HEIGHT.phone} {
                    margin-bottom: 50px;
                }
            }
            .CreditCardImage {
                @media ${DEVICE_HEIGHT.phone} {
                    padding-top: 0px;
                    margin: 0px auto;
                    width: auto;
                }
            }
    `;
