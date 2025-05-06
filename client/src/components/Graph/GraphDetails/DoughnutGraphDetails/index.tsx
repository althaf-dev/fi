import React from 'react';

import {
    Wrapper,
    Container,
    Section,
    Description,
    Separator,
    BulletContainer,
} from './styled';

interface DoughnutGraphDetailsProps {
    graphInfo?: any;
}

const DoughnutGraphDetails = (props: DoughnutGraphDetailsProps) => {
    const { graphInfo } = props;

    return (
        <Wrapper>
            <Container>
                {graphInfo?.labels?.map((data) => (
                    <Section key={data.labelName}>
                        <div>
                            <BulletContainer bulletColor={data.bulletColor} />
                            <Description>
                                {data.labelName}
                            </Description>
                        </div>
                        <Description>
                            {data.labelValue}
                        </Description>
                    </Section>
                ))}
            </Container>
            {/* <>
                <Separator />
            </> */}
        </Wrapper>
    );
};

DoughnutGraphDetails.defaultProps = {
    graphInfo: {},
};

export default DoughnutGraphDetails;
