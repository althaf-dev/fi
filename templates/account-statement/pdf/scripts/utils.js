/**
	 * Returns the month string label
	 * @example
	 * getMonthStr(1)
	 * returns "January"
	 *
	 * @param {number} month number with 1 to 12
	 * @returns {string} Returns the month string label
	 */
function getMonthStr(month, shortStr) {
    var monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var shortStrMonthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    if (shortStr) {
        return shortStrMonthList[month - 1];
    }

    return monthList[month - 1];
}

/**
 * Returns the formatted amount
 * @example
 * getFormattedAmount({ units: 1000000, Nanos: 250000000 })
 * returns { units: 10,00,000, decimals: 25 }
 *
 * @param {object} amount object with units and units
 * @returns {object} Returns the formatted amount
 */
/*
function getFormattedAmount(amount) {
    if (!amount) return {};

    var nanos = amount.units;
    nanos = (nanos / 1e9).toFixed(2).slice(-2);

    return {
        units: amount.units.toLocaleString("en-IN"),
        decimals: nanos
    };
}
*/
function getFormattedAmount(amount) {
    if (!amount) return {};
    var nanos = "00";

    if (amount.nanos) {
        nanos = amount.nanos;
        nanos = (nanos / 1e9).toFixed(2).slice(-2);
    }

    var modifiedUnits = "0";

    if (amount.units) {
        modifiedUnits = amount.units.toString();
        modifiedUnits = modifiedUnits.replace(/\B(?=(\d{2})*(\d{3})(?!\d))/g, ",");
    }

    return {
        units: modifiedUnits,
        decimals: nanos
    };
}

/**
 * Returns the hour 12 str - am/pm
 * @example
 * getFormattedHour12(1605917420)
 * returns "am"
 *
 * @param {number} ts seconds
 * @returns {string} Returns the hour 12 str - am/pm
 */
/*
function getFormattedHour12(ts) {
    var d = new Date(ts * 1000);
    var hour12 = d.toLocaleTimeString([], { timeZone: "IST", hour12: true }).slice(-2);

    return hour12;
}
*/
function getFormattedHour12(ts) {
    var d = new Date(ts * 1000);
    var hours = d.getHours();

    if (hours >= 12) {
        return "pm";
    }

    return "am";
}

/**
 * Returns the 2-digit hours
 * @example
 * getFormattedHours(1605917420)
 * returns "05"
 *
 * @param {number} ts seconds
 * @returns {string} Returns the 2-digit hours
 */
/*
function getFormattedHours(ts) {
    var d = new Date(ts * 1000);
    var hours = d.toLocaleTimeString([], { timeZone: "IST", hour12: true, hour: "2-digit" }).slice(0, 2);

    return hours;
}
*/

function getFormattedHours(ts) {
    var d = new Date(ts * 1000);
    var hours = d.getHours();

    if (hours >= 12) {
        hours = hours - 12;
    }

    return addPrefixZero(hours);
}

// add zero for numbers less than 10
function addPrefixZero(str) {
    var modifiedStr = ("0" + str).slice(-2);

    return modifiedStr;
}

/**
 * Returns the formatted date & month str
 * @example
 * getFormattedDateAndMonth(1605917420)
 * returns "21 Nov"
 *
 * @param {number} ts seconds
 * @returns {string} Returns the formatted date & month str
 */
function getFormattedDateAndMonth(ts) {
    var d = new Date(ts * 1000);

    var date = addPrefixZero(d.getDate());
    var monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var month = monthList[d.getMonth()];
    var dateAndMonth = date + " " + month;

    return dateAndMonth;
}

function getIconObj(ts, hasDayIcon, hasNightIcon) {
    var hours = getFormattedHours(ts);
    var ampm = getFormattedHour12(ts);

    if (!hasDayIcon && !hasNightIcon) {
        if ((hours >= "05" && ampm === "am") || (hours < "06" && ampm === "pm")) {
            return {
                dayIcon: true,
                nightIcon: false,
            };
        } else {
            return {
                dayIcon: false,
                nightIcon: true,
            };
        }
    } else if (!hasDayIcon) {
        if ((hours >= "05" && ampm === "am") || (hours < "06" && ampm === "pm")) {
            return {
                dayIcon: true,
                nightIcon: false,
            };
        }
    } else if (!hasNightIcon) {
        if ((hours >= "06" && ampm === "pm")) {
            return {
                dayIcon: false,
                nightIcon: true,
            };
        }
    }

    return {
        dayIcon: false,
        nightIcon: false,
    };
}

function sortTxnData(txnData) {
    var txnDataKeys = Object.keys(txnData);

    var sortedKeys = txnDataKeys.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(txnData[b].timeInMs) - new Date(txnData[a].timeInMs);
    });
    console.log(sortedKeys);

    var sortedTxnData = [];

    sortedKeys.forEach(function (item) {
        sortedTxnData.push({
            name: item,
            data: txnData[item].data
        })
    })

    return sortedTxnData;
}

function isEmptyObject(obj) {
    // not using check Object.keys(obj).length === 0; as that's valid only for ECMA 5+
    return JSON.stringify(obj) === '{}';
}
