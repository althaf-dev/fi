/* eslint-disable no-restricted-syntax */
/**
 *
 * Utils file for render component
 *
 * @param styles
 * @returns css string
 */

export const jsonStyleToCssStringConverter = (styles: any) => {
    try {
        const obj: any = {};
        const devices = {
            phone: '',
            tab: '',
            desktop: ''
        };
        // eslint-disable-next-line no-restricted-syntax

        for (const device of Object.keys(styles)) {
            for (const [key, value] of Object.entries(styles[device])) {
                const [componentStyleId, cssKey] = key.split('/');
                if (cssKey) {
                    if (!obj[componentStyleId]) {
                        obj[componentStyleId] = { ...devices };
                    }

                    let str;

                    if (cssKey === 'css') {
                        str = value;
                    } else {
                        str = (`${cssKey}: ${value};`);
                    }

                    obj[componentStyleId][device] += str;
                }
            }
        }

        Object.keys(obj).forEach((item: string) => {
            obj[item].toString = () => '';
        });
        return obj;
    } catch (error: any) {
        return null;
    }
};

const cssStringToStyleJson = (str: string, id: string) => {
    const index = str.indexOf('{');
    const obj:Record<string, string> = {};

    if (index !== -1) {
        const s = str.substring(index + 1);
        const styleArr = s.split(';');

        styleArr.forEach((stl) => {
            if (!str) return;
            const [key, value] = stl.split(':');
            if (key && value) {
                obj[`${id}/${key.trim()}`] = value.trim();
            }
        });
        return obj;
    }

    return obj;
};

const defaultEmptyStyleProp = {
    desktop: {},
    tab: {},
    phone: {},
};

export const StylePropertiesGenerator = (str: string, id: string = 'main', defaultProp: any = defaultEmptyStyleProp) => {
    const styleProp = structuredClone(defaultProp);

    const nStr = str
        .replaceAll('<style>', '')
        .replaceAll('\n', '');

    const arr = nStr.split('}');

    arr.forEach((item) => {
        if (item.includes('@media (min-width: 768px)')) {
            const syl = cssStringToStyleJson(item, id);
            styleProp.tab = { ...styleProp.tab, ...syl };
        } else if (item.includes('@media (min-width: 1290px)')) {
            const syl = cssStringToStyleJson(item, id);
            styleProp.desktop = { ...styleProp.desktop, ...syl };
        } else {
            const syl = cssStringToStyleJson(item, id);
            styleProp.phone = { ...styleProp.phone, ...syl };
        }
    });

    return styleProp;
};
