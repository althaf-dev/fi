import React, { memo } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    ArcElement,
    BarElement,
    Filler,
    Tooltip,
} from 'chart.js';

import { Doughnut, Line, Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    ArcElement,
    BarElement,
    Filler,
    Tooltip,
);

interface GraphProps {
    graphType: 'bar' | 'line' | 'doughnut';
    graphData: any;
    graphOptions?: any;
}

// Add different types of graphs here
const graphComponentsType = {
    doughnut: Doughnut,
    line: Line,
    bar: Bar,
};

const Graph = (props: GraphProps) => {
    const { graphData, graphType, graphOptions } = props;
    const GraphComponent = graphComponentsType[graphType];
    if (graphData) {
        return (
            <GraphComponent
                data={graphData}
                options={graphOptions}
            />
        );
    }
    return <></>;
};

Graph.defaultProps = {
    graphOptions: null,
};

export default memo(Graph);
