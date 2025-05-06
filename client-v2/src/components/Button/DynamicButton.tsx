'use client';

import React, { PropsWithChildren, useEffect, useState } from 'react';
import Button, { ButtonProps } from './Button';

const DynamicButton = (props: PropsWithChildren<ButtonProps>) => {
    const {
        url = '', ...rest
    } = props;

    const [link, setLink] = useState<string | undefined>('');

    useEffect(() => {
        const newLink = (globalThis?.window || {})[url as any];
        setLink((newLink || '') as unknown as string);
    }, [url]);

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Button url={link} {...rest} isDynamic />;
};

export default DynamicButton;
