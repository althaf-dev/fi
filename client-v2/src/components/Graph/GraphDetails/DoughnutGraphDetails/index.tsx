import React from 'react';

import {
    Wrapper,
    Container,
    Section,
    Description,
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
                {graphInfo?.labels?.map((data: any) => (
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
        </Wrapper>
    );
};

DoughnutGraphDetails.defaultProps = {
    graphInfo: {},
};

export default DoughnutGraphDetails;
