import logger from '@/utils/logger';
import { ResponsiveStyle } from '../types';
import { Variants } from './types';
import styleVariantsMap from './variants';

type StyleEngineProps = {
    type: string;
    variant?: string;
};

const recursiveStyleFetcher = (variants: Variants, name: string, extendMemo: Set<string> = new Set()): ResponsiveStyle | null => {
    // checking variant reputations to avoid maximum call stack exceeded issue
    if (extendMemo.has(name)) {
        // eslint-disable-next-line no-throw-literal
        throw {
            message: 'Circular Recursive Loop Detected',
            name
        };
    }

    const styleDetails = variants[name];

    if (!styleDetails) {
        return null;
    }

    extendMemo.add(name);

    if (styleDetails.extends) {
        const extendsProperties = recursiveStyleFetcher(variants, styleDetails.extends, extendMemo);

        return {
            phone: {
                ...extendsProperties?.phone,
                ...styleDetails?.properties?.phone,
            },
            tab: {
                ...extendsProperties?.tab,
                ...styleDetails?.properties?.tab,
            },
            desktop: {
                ...extendsProperties?.desktop,
                ...styleDetails?.properties?.desktop,
            }
        };
    }
    return styleDetails.properties;
};

const styleEngine = (props: StyleEngineProps) => {
    try {
        const { type, variant } = props;
        const variants = styleVariantsMap[type as keyof typeof styleVariantsMap];

        if (!variants) {
            return null;
        }

        switch (type) {
            case 'Text': {
                const styleDetails = variants[variant as keyof typeof variants];
                return styleDetails || null;
            }
            case 'h1': {
                const styleDetails = variants[variant as keyof typeof variants];
                return styleDetails || null;
            }

            default: {
                return recursiveStyleFetcher(variants, variant!);
            }
        }
    } catch (e) {
        logger.error('error', e);
        return null;
    }
};

export default styleEngine;
