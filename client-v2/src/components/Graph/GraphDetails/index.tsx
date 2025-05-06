import React from 'react';

import DoughnutGraphDetails from './DoughnutGraphDetails';
import LineGraphDetails from './LineGraphDetails';

interface GraphDetailsProps {
    graphInfo: any;
    graphType: string;
}

// eslint-disable-next-line no-shadow
enum GraphType {
    Doughnut = 'doughnut',
    Line = 'line',
}

const GraphDetails = (props: GraphDetailsProps) => {
    const { graphInfo, graphType } = props;

    const renderGraphDetailsBasedOnGraphType = () => {
        let Component;

        switch (graphType) {
            case GraphType.Doughnut: {
                Component = DoughnutGraphDetails;
                break;
            }

            case GraphType.Line: {
                Component = LineGraphDetails;
                break;
            }

            default:
                return null;
        }

        return (
            <Component graphInfo={graphInfo} />
        );
    };

    return (
        <>
            {renderGraphDetailsBasedOnGraphType()}
        </>
    );
};

export default GraphDetails;
