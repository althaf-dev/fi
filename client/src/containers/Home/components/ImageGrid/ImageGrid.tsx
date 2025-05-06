import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Image } from '../../../../components/Abstract';
import Panda from '../../../../assets/pngs/panda-grid.png';
import Dog from '../../../../assets/pngs/dog-grid.png';
import Girl from '../../../../assets/pngs/girl-grid.png';
import Pineapple from '../../../../assets/pngs/pineapple-grid.png';
import { Device } from '../../../../Themes/Device';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    margin: auto;
    @media ${Device.desktop} {
        width: 380px;
        height: 514px;
    }
`;

const ImageHolder = styled.div`
    width: 270px;
    height: 270px;
    overflow: hidden;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
    filter: drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.1));
    border-radius: 15px;

    @media ${Device.tab} {
        width: 334.13px;
        height: 334.13px;
    }

    @media ${Device.desktop} {
        width: 380px;
        height: 514px;
    }
`;

const ImagesWrapper = styled.div<{ counter: number }>`
    display: flex;
    flex-wrap: nowrap;
    height: 100%;
    transition: transform ease
        ${(props) => (props.counter !== 1 ? '0.6s' : '0s')};

    transform: ${(props) =>
        props.counter === 2
            ? 'translateX(-270px)'
            : props.counter === 3
            ? 'translateX(-540px)'
            : props.counter === 4
            ? 'translateX(-810px)'
            : props.counter === 5
            ? 'translateX(-1080px)'
            : 'translateX(0px)'};

    @media ${Device.tab} {
        transform: ${(props) =>
            props.counter === 2
                ? 'translateX(-334.13px)'
                : props.counter === 3
                ? 'translateX(-668.26px)'
                : props.counter === 4
                ? 'translateX(-1002.39px)'
                : props.counter === 5
                ? 'translateX(-1336.52px)'
                : 'translateX(0px)'};
    }

    @media ${Device.tab} {
        transform: ${(props) =>
            props.counter === 2
                ? 'translateX(-380px)'
                : props.counter === 3
                ? 'translateX(-760px)'
                : props.counter === 4
                ? 'translateX(-1140px)'
                : props.counter === 5
                ? 'translateX(-1520px)'
                : 'translateX(0px)'};
    }
`;

const ImageItem = styled.div`
    min-width: 270px;
    width: 270px;
    height: inherit;

    @media ${Device.tab} {
        min-width: 334.13px;
        width: 334.13px;
    }

    @media ${Device.tab} {
        min-width: 380px;
        width: 514px;
    }
`;

const Square = styled.div<{ counter: number }>`
    position: absolute;
    width: 175px;
    height: 175px;
    right: 0px;
    bottom: 0px;
    border-radius: 15px;
    transition: background-color ease 0.6s;
    background-color: ${(props) =>
        props.counter === 2
            ? props.theme.color.FI_LIGHT_BLUE
            : props.counter === 3
            ? props.theme.color.PATTERNS_BLUE_TWO
            : props.counter === 4
            ? props.theme.color.FI_YELLOW
            : props.theme.color.TEA_GREEN};

    @media ${Device.tab} {
        width: 208.83px;
        height: 208.83px;
    }

    @media ${Device.desktop} {
        width: 294px;
        height: 294px;
        bottom: 60px;
        right: -60px;
    }
`;

const ImageGrid = () => {
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        let timer = null;
        switch (counter) {
            case 1:
                timer = setTimeout(() => setCounter(2), 1000);
                break;
            case 2:
                timer = setTimeout(() => setCounter(3), 2000);
                break;
            case 3:
                timer = setTimeout(() => setCounter(4), 2000);
                break;
            case 4:
                timer = setTimeout(() => setCounter(5), 2000);
                break;

            case 5:
                timer = setTimeout(() => setCounter(1), 1000);
                break;
            default:
                setCounter(1);
                break;
        }

        return () => clearTimeout(timer);
    }, [counter]);

    return (
        <Wrapper>
            <ImageHolder>
                <ImagesWrapper counter={counter}>
                    <ImageItem>
                        <Image
                            icon={Panda}
                            alt='Panda'
                            loadingType='lazy'
                            objectType='cover'
                        />
                    </ImageItem>
                    <ImageItem>
                        <Image
                            icon={Dog}
                            alt='Dog'
                            loadingType='lazy'
                            objectType='cover'
                        />
                    </ImageItem>
                    <ImageItem>
                        <Image
                            icon={Girl}
                            alt='Girl'
                            loadingType='lazy'
                            objectType='cover'
                        />
                    </ImageItem>
                    <ImageItem>
                        <Image
                            icon={Pineapple}
                            alt='Pineapple'
                            loadingType='lazy'
                            objectType='cover'
                        />
                    </ImageItem>
                    <ImageItem>
                        <Image
                            icon={Panda}
                            alt='Panda'
                            loadingType='lazy'
                            objectType='cover'
                        />
                    </ImageItem>
                </ImagesWrapper>
            </ImageHolder>
            <Square counter={counter} />
        </Wrapper>
    );
};

export default ImageGrid;
