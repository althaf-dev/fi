/* eslint-disable no-tabs */
/**
 * @file Brands Section
 */
import React from 'react';
import styled from 'styled-components';
import MIXINS from '@/Themes/mixins';
import { Device } from '@/Themes/Device';

const Title = styled.div`
	color: ${(props) => props.theme.color.WHITE};
	${MIXINS.FontMixin({
        font: 'Gilroy',
        weight: 600,
        size: '16px',
        lineHeight: '20px',
    })};
	padding-left: 16px;

	@media ${Device.tab} {
		${MIXINS.FontMixin({
        size: '35px',
        lineHeight: '46px',
    })};
		padding-left: 0;
	}

	@media ${Device.desktop} {
		${MIXINS.FontMixin({
        size: '64px',
        lineHeight: '76px',
    })};
	}
`;

const BrandLogoMobile = styled.img`
	width: 199px;
	height: 156px;

	@media ${Device.tab} {
		display: none;
	}
`;

const BrandLogoDesktop = styled(BrandLogoMobile)`
	display: none;

	@media ${Device.tab} {
		display: block;
		width: 329px;
		height: 329px;
	}

	@media ${Device.desktop} {
		width: 629px;
		height: 530px;
	}
`;

const BrandSectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	width: 90%;
	padding-bottom: 62px;
	justify-content: space-between
	gap: 10%;
	max-width: 360px;

	@media ${Device.tab} {
		width: 80%;
		max-width: 768px;
		padding-bottom: 70px;
	}
	
	@media ${Device.desktop} {
		padding-bottom: 131px;
		width: 100%;
		max-width: 1440px;
		padding-left: 85px;
		padding-right: 85px;
	}
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 25px;
	border: 2px solid ${(props) => props.theme.color.GREY_6};
	background-color: ${(props) => props.theme.color.GREY_4};

	@media ${Device.tab} {
		border-radius: 0;
		border: none;
		background-color: ${(props) => props.theme.color.SHARK2};
	}
`;

const MobileDescription = styled.div`
	color: ${(props) => props.theme.color.GREY_5};
	${MIXINS.FontMixin({
        font: 'inter',
        weight: 500,
        size: '10px',
        lineHeight: '17px',
    })};
	text-align: center;
	margin-top: 16px;

	@media ${Device.tab} {
		display: none;
	}
`;

const DesktopDescription = styled(MobileDescription)`
	display: none;
	@media ${Device.tab} {
		display: block;
		${MIXINS.FontMixin({
        size: '18px',
        lineHeight: '32px',
    })};
		padding-top: 14px;
		text-align: start;
	}

	@media ${Device.desktop} {
		${MIXINS.FontMixin({
        size: '22px',
        lineHeight: '36px',
    })};
		padding-top: 22px;
	}
`;

const MobileSubDescription = styled.div`
	color: ${(props) => props.theme.color.WHITE};
	${MIXINS.FontMixin({
        font: 'inter',
        weight: 700,
        size: '12px',
        lineHeight: '20px',
    })};
	text-align: center;

	@media ${Device.tab} {
		display: none;
	}
`;

const DesktopSubDescription = styled(MobileSubDescription)`
	display: none;

	@media ${Device.tab} {
		display: block;
		text-align: start;
		color: ${(props) => props.theme.color.WHITE};
		${MIXINS.FontMixin({
        size: '20px',
        lineHeight: '32px',
    })};
	}

	@media ${Device.desktop} {
		${MIXINS.FontMixin({
        size: '24px',
        lineHeight: '40px',
    })};
	}
`;

const SubWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

interface IBrandData {
  brandLogosMobile?: string;
  brandLogosDesktop?: string;
  title?: string;
  description?: string;
  subDescription?: string;
}

const BrandSection = (props: { brandData: IBrandData }) => {
    const { brandData } = props;
    return (
        <BrandSectionContainer>
            <Wrapper>
                <SubWrapper>
                    <Title>{brandData.title}</Title>
                    <DesktopDescription>{brandData.description}</DesktopDescription>
                    <DesktopSubDescription>
                        {brandData.subDescription}
                    </DesktopSubDescription>
                </SubWrapper>
                <BrandLogoMobile src={brandData.brandLogosMobile} />
                <BrandLogoDesktop src={brandData.brandLogosDesktop} />
            </Wrapper>
            <MobileDescription>{brandData.description}</MobileDescription>
            <MobileSubDescription>
                {brandData.subDescription}
            </MobileSubDescription>
        </BrandSectionContainer>
    );
};

export default BrandSection;
