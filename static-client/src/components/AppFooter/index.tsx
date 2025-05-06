import React from 'react';
import AppStickyFooter from './AppStickyFooter/AppStickyFooter';
import CustomAppFooter from './AppFooter';

interface AppFooterProps {
    trackingPayload?: object;
    homePageVariant?: object;
    hideStickyFooter?: boolean;
    noPadding?: boolean;
    backgroundColor?: string;
    showSecondaryContent?: boolean;
    screen?: string;
    parentComponent?: string;
    salaryProgram?: boolean;
}

const AppFooter = (props: AppFooterProps) => {
    const {
        trackingPayload, homePageVariant, hideStickyFooter, noPadding, showSecondaryContent,
        screen, parentComponent, salaryProgram, backgroundColor
    } = props;

    return (
        <>
            <CustomAppFooter
                noPadding={noPadding}
                backgroundColor={backgroundColor}
                trackingPayload={trackingPayload}
                showSecondaryContent={showSecondaryContent}
                screenName={screen}
                parentComponent={parentComponent}
                salaryProgram={salaryProgram}
            />

            {
                !hideStickyFooter ? (
                    <AppStickyFooter
                        trackingPayload={trackingPayload}
                        homePageVariant={homePageVariant}
                    />
                ) : null
            }
        </>
    );
};

AppFooter.defaultProps = {
    trackingPayload: {},
    homePageVariant: {},
    hideStickyFooter: false,
    noPadding: false,
    backgroundColor: '',
    showSecondaryContent: false,
    screen: '',
    parentComponent: '',
    salaryProgram: false,
};

export default AppFooter;
