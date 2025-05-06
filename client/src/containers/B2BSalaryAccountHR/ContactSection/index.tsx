/**
 * @file B2BSalaryAccountHR Contact Section
 */

import React from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import { Font, Image } from '../../../components';

import { ICONS_URL_MAP } from '../../../constants/AssetConstants';
import { StyledLink } from '../../../components/styled';
import MIXINS from '../../../Themes/mixins';

const PosterSection = styled.div`
  text-align: center;
  padding: 20px;
  max-width: 360px;
  margin: 0px auto 0px auto;

  @media ${Device.tab} {
    max-width: 768px;
    padding: 40px 40px 0px 40px;
    margin: 0px auto;
  }

  @media ${Device.desktop} {
    text-align: left;
    padding: 50px;
    max-width: 1290px;
  }
`;

const Title = styled(Font)`
  margin-bottom: 12px;
  text-align: center;

  @media ${Device.desktop} {
    margin-bottom: 32px;
  }
`;

const Description = styled(Font)`
  max-width: 100%;
  margin: 0px auto 30px;
  text-align: center;

  @media ${Device.tab} {
    max-width: 610px;
  }

  @media ${Device.desktop} {
    margin: 0px auto 60px;
    max-width: 684px;
  }
`;

const ArrowWrapper = styled.span`
  display: inline-block;
  height: 15px;
  width: 15px;
  margin-left: 3px;
  vertical-align: middle;

  @media ${Device.desktop} {
    height: 19px;
    width: 19px;
  }
`;

const Link = styled(StyledLink)`
  text-decoration: underline;
  text-underline-position: under;
  padding-left: 0.5rem;
  ${MIXINS.FontMixin({
        font: 'Gilroy',
        weight: 600,
        size: '16px',
        lineHeight: '24px',
    })};

  @media ${Device.desktop} {
    ${MIXINS.FontMixin({
        size: '24px',
        lineHeight: '33px',
    })};
  }
`;

interface ICompanySectionProps {
  data: {
    title: string;
    mailId: string;
  };
}

const CompanySection = (props: ICompanySectionProps) => {
    const { data } = props;
    const { title, mailId } = data;

    return (
        <PosterSection>
            <Title font='cardTitleVariantFour' tagType='h1' color='MINE_SHAFT'>
                {title}
            </Title>
            <Description font='p' tagType='p' color='SUVA_GREY'>
                Write to us at:
                <Link url='mailto:salaryprogram@epifi.com' isExternal>
                    {mailId}
                    <ArrowWrapper>
                        <Image
                            loadingType='lazy'
                            icon={ICONS_URL_MAP.TOP_RIGHT_ARROW_GREEN}
                            alt='arrow'
                            objectType='contain'
                        />
                    </ArrowWrapper>
                </Link>
            </Description>
        </PosterSection>
    );
};

export default React.memo(CompanySection);
