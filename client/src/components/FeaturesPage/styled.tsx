import styled from 'styled-components';

import { Device } from '../../Themes/Device';

import { Font } from '../Abstract';

const FeaturePageTitle = styled(Font)`
    margin-bottom: 30px;
    text-align: center;

    @media ${Device.tab} {
        margin-bottom: 40px;
    }

    @media ${Device.desktop} {
        margin-bottom: 60px;
    }
`;

const CalculatorContainer = styled.div`
    background-color: ${(props) => props.theme.color.WHITE};
    border-radius: 20px;
    margin-top: -10px;
    width: 100%;

    @media ${Device.desktop} {
        border-radius: 30px;
        margin-top: 32px;
    }
`;

const CalculatorSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 768px;
    margin: 0px auto;
    padding: 20px;

    @media ${Device.desktop} {
        flex-direction: row;
        justify-content: space-between;
        max-width: 1440px;
        padding: 40px 20px;
    }
`;

/* Deprecated currently
Using ImageHolderV2 which has fixed height
ImageHolder has fixed width
Moved to v2 since having fixed width was causing a DOM shift on render
Due to the layout shift, functions like scrollIntoView were not working as expected
Having a fixed height occupied space in the DOM before the image was rendered and hence scrollIntoView worked as expected
const ImageHolder = styled.div`
    width: 230px;
    height: auto;
    margin: 0 auto;

    @media ${Device.tab} {
        width: 300px;
    }

    @media ${Device.desktop} {
        width: 450px;
    }
`;
*/

const ImageHolderV2 = styled.div`
    height: 268px;
    width: auto;
    margin: 0 auto;

    @media ${Device.tab} {
        height: 350px;
    }

    @media ${Device.desktop} {
        height: 525px;
    }
`;

export { FeaturePageTitle, CalculatorContainer, CalculatorSection, ImageHolderV2 };
