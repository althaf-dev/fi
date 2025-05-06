import React from 'react';
import Lottie from 'react-lottie';

interface ILottiePlayer {
    animationData: any;
    path: string; // any URL like S3 link can be passed
    loop?: boolean;
    autoplay?: boolean;
    pause?: boolean; // this is to control play/pause
    stop?: boolean; // this is to control start/stop
    height?: any;
    width?: any;
    speed?: number;
    onComplete?: () => void;
}

type RequireOnlyOne<T, Keys extends keyof T = keyof T> =
    Pick<T, Exclude<keyof T, Keys>>
    & {
        [K in Keys]-?:
            Required<Pick<T, K>>
            & Partial<Record<Exclude<Keys, K>, undefined>>
    }[Keys]

type ILottiePlayerProps = RequireOnlyOne<ILottiePlayer, 'animationData' | 'path'>;

const LottiePlayer = ({
    animationData,
    path,
    loop,
    autoplay,
    pause,
    stop,
    height,
    width,
    speed,
    onComplete,
}: ILottiePlayerProps) => {
    const defaultOptions: any = {
        loop,
        autoplay,
        path,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    if (height) {
        defaultOptions.height = height;
    }
    if (width) {
        defaultOptions.width = width;
    }

    const eventListeners = [
        {
            eventName: 'complete',
            callback: onComplete,
        },
    ];

    return (
        <Lottie
            eventListeners={eventListeners}
            options={defaultOptions}
            isStopped={stop}
            isPaused={pause}
            speed={speed}
        />
    );
};

LottiePlayer.defaultProps = {
    loop: true,
    autoplay: true,
    pause: false,
    stop: false,
    height: 'auto',
    width: 'auto',
    speed: 0.8,
    onComplete: () => {},
};

export default LottiePlayer;
