/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

const Section = styled.div`
    max-width: 768px;
    padding: 12px 16px 24px;
    margin: 0px auto;
`;

const Title = styled.div`
    color: ${(props) => props.theme.color.MINE_SHAFT};
    font-family: Gilroy, sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 24px;
    padding-top: 12px;
`;

const Heading = styled.div`
    color: ${(props) => props.theme.color.MINE_SHAFT};
    font-family: Gilroy, sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 12px;
`;

const SubHeading = styled.div`
    color: ${(props) => props.theme.color.MINE_SHAFT};
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 36px;
    margin-top: -20px;
`;

const Description = styled.div<{ lastContent?: boolean }>`
    color: ${(props) => props.theme.color.GREY_2};
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: ${(props) => (props.lastContent ? '36px' : '16px')};

    /* Styling here since <span> is coming from JSON files HTML template string */
    span {
        margin-left: 20px;
    }
`;

const ListingContainer = styled.ul`
    list-style: none;
    text-indent: -13px;
    margin-left: 20px;
}
`;

const Listing = styled.li<{ lastContent?: boolean }>`
    color: ${(props) => props.theme.color.GREY_2};
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: ${(props) => (props.lastContent ? '36px' : '2px')}
`;

const BulletPoints = styled.span`
    color: ${(props) => props.theme.color.GREY_2};
    padding-right: 5px;
`;

export {
    Section,
    Title,
    Heading,
    SubHeading,
    Description,
    ListingContainer,
    Listing,
    BulletPoints,
};
