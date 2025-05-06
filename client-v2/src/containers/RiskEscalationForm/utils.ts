/**
 * @file Util functions for Credit Card Eligibility
 */
import { getDeviceInfo } from '../../device';
import { getCookieId } from '../../events';

// construct common request with common info
export const constructPayloadWithCommonInfo = (payload: Record<string, any>) => ({
    ...payload,
    deviceInfo: getDeviceInfo(), // device info
    prospectId: getCookieId('prospectId'), // prospectId for sever events
});

/**
 * TODO: short term fix, long term rich text solve has to be prioritised for BE.
 * formatted data to differentiate data based on identifier
 * 1. string starts with '*' consider as type 'list'
 * 2. reset of the string consider as type 'text'
 * @param  data : Array<string>
 * @returns format data in from of Array of elements type
 * for element type text { type: 'text' , data: 'string'  }
 * for element type list { type: 'list' , data: Array<string>  }
 *
 */

export const formatIntroScreenData = (data: Array<string>) => {
    if (!Array.isArray(data)) return [];
    let isListElement = false;
    let list:Array<any> = [];
    const formattedData:any = [];
    data.forEach((item: any) => {
        if (!isListElement) {
            list = [];
        }
        if (typeof (item) === 'string' && item.length > 2 && item.charAt(0) === '*') {
            isListElement = true;
            list.push(item.substring(1, item.length - 1));
        } else {
            if (isListElement) {
                formattedData.push({
                    type: 'list',
                    data: list,
                });
            }
            formattedData.push({
                type: 'text',
                data: item
            });
            list = [];
            isListElement = false;
        }
    });
    return formattedData;
};

export default {
    constructPayloadWithCommonInfo,
};
