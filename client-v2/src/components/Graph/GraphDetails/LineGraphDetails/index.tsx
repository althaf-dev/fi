import React from 'react';

import {
    Wrapper,
    Container,
    Description,
    BulletContainer,
    ExtraInfoContainer,
    ExtraInfoText,
} from './styled';

interface LineGraphDetailsProps {
    graphInfo?: any;
}

const LineGraphDetails = (props: LineGraphDetailsProps) => {
    const { graphInfo } = props;

    return (
        <Wrapper>
            {graphInfo?.extraInfo && (
                <ExtraInfoContainer>
                    {graphInfo.extraInfo.map((data: any) => (
                        <div key={data.id}>
                            <ExtraInfoText>
                                {data.text}
                            </ExtraInfoText>
                        </div>
                    ))}
                </ExtraInfoContainer>
            )}
            <Container>
                {graphInfo?.labels?.map((data: any) => (
                    <div key={data.labelName}>
                        <BulletContainer bulletColor={data.bulletColor} />
                        <Description>
                            {data.labelName}
                        </Description>
                    </div>
                ))}
            </Container>
        </Wrapper>
    );
};

LineGraphDetails.defaultProps = {
    graphInfo: {},
};

export default LineGraphDetails;
