/**
 * @file B2BSalaryAccountHR company's using Fi Section
 */

import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import { Font } from '../../../components';
import MIXINS from '../../../Themes/mixins';

import { Title } from '../styled';
import { PAGE_TYPE } from '../constant';

const PosterSection = styled.div<{type?: string | null}>`
    text-align: center;
    padding: 20px;
    max-width: 360px;
    margin: 0px auto 0px auto;

    @media ${Device.tab} {
        max-width: 768px;
        padding: 40px 40px 60px 40px;
        margin: 0px auto;
    }

    @media ${Device.desktop} {
        text-align: left;
        padding: ${(props) => (props?.type && props.type === PAGE_TYPE.sme.label ? '50px 50px 0px 50px' : '50px')};
        max-width: 1290px;
    }
`;

const Container = styled.div<{type?: string | null}>`
    ${MIXINS.FlexMixin({ dir: 'column', justify: 'normal', align: 'normal' })};
    row-gap: 20px;
    overflow: hidden;

    @media ${Device.desktop} {
        row-gap: ${(props) => (props?.type && props.type === PAGE_TYPE.sme.label ? '0px' : '50px')};
    }
`;
const Logo = styled.img<any>`
    display: none;

    @media ${Device.tab} {
        display: block;
        height: 270px;
    }
    @media ${Device.desktop} {
        height: ${(props) => (props?.type && props.type === PAGE_TYPE.sme.label ? 'auto' : '385px')};
    }
`;

const LogoMobile = styled.img<any>`
    height: ${(props) => (props.type === PAGE_TYPE.sme.label ? '100%' : '576px')};
    width: 100%;
  
    @media ${Device.tab} {
        display: none;
    }
`;

const InfoText = styled(Font)`
    text-align: center;

    @media ${Device.desktop} {
        margin-top: 64px;
    }
`;

interface ICompanySectionProps {
    data: {
        title: string;
        description: string;
        logo?: string;
        mobileLogo?: string;
    };
    type: string | null;
}

const CompanySection = (props: ICompanySectionProps) => {
    const { data, type = null } = props;
    const {
        title, description, logo, mobileLogo,
    } = data;

    return (
        <PosterSection type={type}>
            <Title font='cardTitleVariantFour' tagType='h1' color='MINE_SHAFT'>
                {title}
            </Title>
            <Container type={type}>
                <Logo src={logo} type={type} />
                <LogoMobile src={mobileLogo} type={type} />
                <InfoText font='pSmall' tagType='text' color='GREY_2'>
                    {description}
                </InfoText>
            </Container>
        </PosterSection>
    );
};

export default React.memo(CompanySection);
