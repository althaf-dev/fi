import React, { useState } from 'react';
import styled from 'styled-components';

import { Device } from '../../../Themes/Device';
import MIXINS from '../../../Themes/mixins';

// import PaymentsAccordion from '../PaymentsAccordion';

interface IWrapper {
    mobile: string;
    tab: string;
    desktop: string;
}

const Wrapper = styled.div<{width?: IWrapper}>`
    ${MIXINS.FlexMixin({ dir: 'column' })}
    width: ${(props) => props.width.mobile || '320px'};
    margin-top: 10px;

    @media ${Device.desktop} {
        margin-top: 30px;
        width: ${(props) => props.width.desktop || '468px'};
    }
`;

interface AccordionContainerProps {
    data: any;
}

const AccordionContainer = (props: AccordionContainerProps) => {
    const { data } = props;
    const { list, width = {} } = data;

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Wrapper width={width}>
            {/* {list.map((item, index) => (
                <PaymentsAccordion
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    index={index}
                    title={item.title}
                    content={item.content}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                />
            ))} */}
        </Wrapper>
    );
};

export default AccordionContainer;
