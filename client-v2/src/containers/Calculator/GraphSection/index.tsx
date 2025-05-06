import React, { memo, Suspense, lazy } from 'react';
import { InView } from 'react-intersection-observer';

import GraphDetails from '../../../components/Graph/GraphDetails';
import { htmlSanitization } from '../../../utils';

import TableDetails from '../TableDetails';
import { VisualType } from '../constants';

import {
    CircularProgressBarContainer,
    CircleContainer,
    VisualsContainer,
    StickyVisualSection,
    VisualsSection,
    OutputSentence,
    StickyGraphBottomInputFields,
    GraphContainer,
} from './styled';

const Graph = lazy(() => import('../../../components/Graph'));

interface GraphSectionProps {
    commonGraphSectionProps: any;
    stickSectionVisualType?: string;
    isStickySection?: boolean;
    graphBottomCalculatorInputFields?: any;
    // eslint-disable-next-line react/require-default-props
    renderComponentBasedOnComponentType?: (
        item: any,
        index?: number,
        showComponentInsideStickyGraph?: boolean
    ) => any;
}

const GraphSection = (props: GraphSectionProps) => {
    const {
        commonGraphSectionProps,
        stickSectionVisualType,
        isStickySection,
        graphBottomCalculatorInputFields,
        renderComponentBasedOnComponentType,
    } = props;

    const {
        graphView,
        outputResult,
        outputSentence,
        getVisualType,
        onVisible,
        visualType,
        graphType,
        graphData,
        graphInfo,
        viewVisualSection,
        graphOptions,
    } = commonGraphSectionProps;

    const graphSection = (
        <div>
            <CircleContainer>
                <Suspense fallback={<div />}>
                    <GraphContainer graphType={graphType}>
                        <Graph
                            graphType={graphType}
                            graphData={graphData}
                            graphOptions={graphOptions}
                        />
                    </GraphContainer>
                </Suspense>
            </CircleContainer>
            <GraphDetails graphInfo={graphInfo} graphType={graphType} />
        </div>
    );

    const tableSection = (
        <TableDetails
            tableData={
                viewVisualSection && outputResult?.visuals[1]?.data.values
            }
            isStickySection={isStickySection}
        />
    );

    const getVisualsSection = () => {
        if (isStickySection && stickSectionVisualType === VisualType.Graph) {
            return graphSection;
        }
        if (!isStickySection && visualType === VisualType.Graph) {
            return graphSection;
        }
        return tableSection;
    };

    const graphContainer = (
        <CircularProgressBarContainer
            backgroundColor={outputResult?.visuals[0]?.data?.backgroundColor}
            stickySection={isStickySection}
            isTableType={stickSectionVisualType === VisualType.Table}
        >
            {!graphView ? (
                <OutputSentence>
                    <div
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{
                            __html: htmlSanitization(outputSentence),
                        }}
                    />
                </OutputSentence>
            ) : null}
            {getVisualsSection()}
            {/**
             * check if visual array length is greater than one If yes then show the different visual component like graph and table
             * if visuals array length is one then only show the graph component
             */}
            {viewVisualSection ? (
                <VisualsContainer stickySection={isStickySection}>
                    {outputResult?.visuals.map((item: any) =>
                        !isStickySection ? (
                            <VisualsSection
                                key={item.label}
                                onClick={getVisualType(
                                    item.type,
                                    isStickySection
                                )}
                                activeGraphLabelId={visualType === item.type}
                            >
                                {item.label}
                            </VisualsSection>
                        ) : (
                            <StickyVisualSection
                                key={item.label}
                                onClick={getVisualType(
                                    item.type,
                                    isStickySection
                                )}
                                activeGraphLabelId={
                                    stickSectionVisualType === item.type
                                }
                            >
                                {item.label}
                            </StickyVisualSection>
                        )
                    )}
                </VisualsContainer>
            ) : null}
            {graphBottomCalculatorInputFields?.length ? (
                <StickyGraphBottomInputFields>
                    {graphBottomCalculatorInputFields.map((item: any) => (
                        <React.Fragment key={item.id}>
                            {renderComponentBasedOnComponentType &&
                                renderComponentBasedOnComponentType(
                                    item,
                                    undefined,
                                    true
                                )}
                        </React.Fragment>
                    ))}
                </StickyGraphBottomInputFields>
            ) : null}
        </CircularProgressBarContainer>
    );

    return graphView ? (
        <>{graphContainer}</>
    ) : (
        <InView onChange={(inView: boolean) => onVisible(inView)}>
            {graphContainer}
        </InView>
    );
};

GraphSection.defaultProps = {
    isStickySection: false,
    stickSectionVisualType: 'graph',
    graphBottomCalculatorInputFields: null,
};

export default memo(GraphSection);
