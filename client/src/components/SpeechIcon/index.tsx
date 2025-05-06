// moved this from Home container
import React, { createRef, MutableRefObject, useState } from 'react';
import styled from 'styled-components';

import { Device } from '../../Themes/Device';
import { SVGS_URL, AUDIOS_URL } from '../../constants/AssetConstants';

import { Image } from '../Abstract';

interface SpeechIconProps {
    audioSrc?: string;
    audioType?: string;
}

const StyledIcon = styled.div`
    cursor: pointer;
    display: inline-block;
    margin-left: 4px;
    margin-top: -2px;
    height: 24px;
    width: 24px;
    vertical-align: middle;

    @media ${Device.tab} {
        margin-left: 6px;
    }

    @media ${Device.desktop} {
        margin-left: 8px;
        margin-top: -4px;
        height: 35px;
        width: 32px;
    }
`;

const StyledAudio = styled.audio`
    display: none;
`;

const SpeechIcon = ({ audioSrc, audioType }: SpeechIconProps) => {
    const [playing, setPlaying] = useState(false);
    const audioRef = createRef() as MutableRefObject<HTMLAudioElement>;

    const updatePlayingStatue = () => {
        if (audioSrc && audioRef.current) {
            if (!playing) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
        setPlaying((prev) => !prev);
    };

    return (
        <>
            <StyledIcon onClick={updatePlayingStatue}>
                <Image
                    loadingType='lazy'
                    icon={`${SVGS_URL}volume-active.svg`}
                    alt='volume'
                    objectType='contain'
                />
            </StyledIcon>
            <StyledAudio
                ref={audioRef}
                onEnded={() => {
                    setPlaying(false);
                }}
            >
                <source src={audioSrc} type={audioType} />
            </StyledAudio>
        </>
    );
};

SpeechIcon.defaultProps = {
    audioSrc: `${AUDIOS_URL}fi.mp3`,
    audioType: 'audio/mpeg',
};

export default SpeechIcon;
