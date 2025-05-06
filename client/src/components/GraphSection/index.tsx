/**
 * @file GraphSection Component
 *
 * This component renders a section with a graph based on provided data.
 * It allows the user to select different tags and visualize corresponding graphs.
 *
 * Usage:
 *  <GraphSection data={graphData} />
 *
 * Props:
 *  - data: An array of graph data containing top tags, details, and visuals.
 *    Example data structure:
 *    [{
 *      topTag: 'Tag 1',
 *      description: 'Description 1',
 *      details: [
 *        {
 *          bottomTag: 'Subtag 1',
 *          visuals: {
 *            graphType: 'bar',
 *            graphData: chartData,
 *            graphOptions: chartOptions,
 *            labels: [
 *              { bulletColor: '#FF0000', labelName: 'Label 1' },
 *              { bulletColor: '#00FF00', labelName: 'Label 2' },
 *            ],
 *          },
 *        },
 *        ...
 *      ],
 *    },
 *    ...]
 */

import React, {
    Suspense, lazy, useMemo, useState, memo,
} from 'react';

import { IGraphData, IGraphDetail, IGraphVisuals } from '../../interfaces/graph';

import {
    TopTagsList, BottomTagsList, Tag, GraphContainer, Description,
    LabelsWrapper, BulletContainer, LabelName,
} from './styled';

/**
 * The `lazy` function is used here to enable code splitting and lazy loading of the `Graph` component
 * This allows the `Graph` component, which uses the Chart.js library, to be loaded separately and asynchronously
 * By using lazy loading, the initial bundle size and loading time of the main application can be reduced
 * The `Graph` component will be loaded on-demand when it is actually needed.
 */
const Graph = lazy(() => import('../../components/Graph'));

interface IGraphSectionProps {
    data: IGraphData[];
}

const GraphSection = (props: IGraphSectionProps) => {
    const { data } = props;

    const topTagsList = useMemo(() => data?.map((item: IGraphData) => item?.topTag) ?? [], [data]);

    const initialTopTag = topTagsList[0] || '';

    const bottomTagsSet = useMemo(() => {
        const set = new Set<string>();

        data?.forEach((item: IGraphData) => {
            item.details.forEach((detail: IGraphDetail) => {
                set.add(detail?.bottomTag);
            });
        });
        return set;
    }, [data]);

    const bottomTagsList = useMemo(() => [...bottomTagsSet], [bottomTagsSet]);
    const initialBottomTag = bottomTagsList[0] || '';

    const [activeTopTag, setActiveTopTag] = useState<string>(initialTopTag);
    const [activeBottomTag, setActiveBottomTag] = useState<string>(initialBottomTag);

    const tagDetails: IGraphData = useMemo(() => data?.find((item: IGraphData) => item?.topTag === activeTopTag), [data, activeTopTag]);
    const { details, description } = tagDetails || {};
    // eslint-disable-next-line max-len
    const { visuals }: { visuals?: IGraphVisuals } = useMemo(() => details?.find((detail: IGraphDetail) => detail?.bottomTag === activeBottomTag) || {}, [details, activeBottomTag]);

    const {
        graphType, graphOptions, graphData, labels,
    } = visuals || {};

    const onTopTagClick = (value: string) => () => {
        setActiveTopTag(value);
    };

    const onBottomTagClick = (value: string) => () => {
        setActiveBottomTag(value);
    };

    return (
        <>
            {topTagsList?.length ? (
                <TopTagsList>
                    {topTagsList?.map((tag: string) => (
                        <Tag key={tag} onClick={onTopTagClick(tag)} isActive={tag === activeTopTag}>
                            {tag}
                        </Tag>
                    ))}
                </TopTagsList>
            ) : null}
            {labels?.length ? (
                <LabelsWrapper>
                    {labels?.map((label) => {
                        const { bulletColor, labelName } = label || {};

                        return (
                            <React.Fragment key={labelName}>
                                <BulletContainer bulletColor={bulletColor} />
                                <LabelName>
                                    {labelName}
                                </LabelName>
                            </React.Fragment>
                        );
                    })}
                </LabelsWrapper>
            ) : null}
            <Suspense fallback={<div />}>
                <GraphContainer>
                    <Graph
                        graphType={graphType}
                        graphData={graphData}
                        graphOptions={graphOptions}
                    />
                </GraphContainer>
            </Suspense>
            {bottomTagsList?.length ? (
                <BottomTagsList>
                    {bottomTagsList?.map((tag: string) => (
                        <Tag key={tag} onClick={onBottomTagClick(tag)} isActive={tag === activeBottomTag}>
                            {tag}
                        </Tag>
                    ))}
                </BottomTagsList>
            ) : null}
            {description ? <Description>{description}</Description> : null}
        </>
    );
};

export default memo(GraphSection);
