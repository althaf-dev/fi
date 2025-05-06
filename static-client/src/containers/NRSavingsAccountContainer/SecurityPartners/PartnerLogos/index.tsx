import React from 'react';

import { PARTNER_LOGOS } from '../../constants';

import { Logo, LogoContainer, Text } from '../styles';

const PartnerLogos: React.FC = () => (
    <LogoContainer>
        {
            PARTNER_LOGOS.map((logo, index) => (
                logo.text ? <Text tagType='text' font='p5VariantOne' color='CHARCOAL_GREY'>{logo.text}</Text> : (
                    <Logo
                        key={index}
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        aspectRatio={logo.aspectRatio}
                    />
                )
            ))
        }
    </LogoContainer>
);

export default PartnerLogos;