/* eslint-disable import/prefer-default-export */
/**
 * @param event
 * @param allowDecimal
 * @returns
 * if decimalValidation is false than prevent to type floating value
 * else allowed to type floating value
 */
export const validateInputtedNumber = (event, allowDecimal: boolean) => {
    const keyValue = event.key;
    const hasEnteredDecimalPoint = keyValue === '.';
    const curValue = event.target.value;
    /**
     * if decimalValidation is false than not allowed to type decimal value in the input value
     */
    if (!allowDecimal && (hasEnteredDecimalPoint || curValue.includes('.'))) {
        event.preventDefault();
    }

    // regex for the case where we have more than 1 zero & only zeros - '00000'
    // const hasMoreThan1Zero = /^(0)\1{1,}$/.test(curValue);

    // TODO: Add check if value is number
};

export const validatePhoneNumber = (event) => {
    const { keyCode } = event;

    if (event.target.value.length === 0) {
        // restrict 0, 1, 2, 3, 4, 5 as first digit of mobile number
        if ([48, 49, 50, 51, 52, 53].includes(keyCode)) {
            event.preventDefault();
        }
    }

    // restrict alphabets
    if (keyCode >= 65 && keyCode <= 90) {
        event.preventDefault();
    }

    // restrcit ; = , - . / ` [ ] '
    if ([186, 187, 188, 189, 190, 191, 192, 219, 221, 222].includes(keyCode)) {
        event.preventDefault();
    }

    // up & down arrow keys which increases, decreases focused number
    if ([38, 40].includes(keyCode)) {
        event.preventDefault();
    }
};
