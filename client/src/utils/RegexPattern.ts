// export const REGEX_EMAIL = /^[^<>()[\]\\,;:\%#^\s@\"$&!@]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}))/;
export const REGEX_EMAIL = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,5})$/;
export const REGEX_MOBILE = /^[6789]\d{9}$/;
export const REGEX_AT_LEAST_ONE_CHAR = /^(?!\s*$).+/;
export const REGEX_NAME = /^[a-zA-Z ]*$/;
export const REGEX_URL = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/;
export const REGEX_COMMUNITY_USERNAME = /^[a-zA-Z0-9_]{3,20}$/;
export const REGEX_REFERAL_CODE = /^[a-zA-Z0-9]{0,10}$/;
export const REGEX_NUMBER_INPUT = /^[0-9]+$/;
export const REGEX_ALLOW_NUMERIC_VALUE = /[^0-9]/g;
// the output of date input is of format yyyy-mm-dd format though the view format is based on locale
export const REGEX_DATE_OF_BIRTH = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
export const REGEX_PAN_CARD_NUMBER = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
export const REGEX_BLOCK_GMAIL = /^(?!.*@gmail)([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/;
export const REGEX_BLOCK_YAHOO = /^(?!.*@yahoo)([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/;
export const REGEX_BLOCK_REDIF = /^(?!.*@rediff)([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/;
export const REGEX_BLOCK_HOTMAIL = /^(?!.*@hotmail)([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/;
export const REGEX_BLOCK_OUTLOOK = /^(?!.*@outlook)([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/;
