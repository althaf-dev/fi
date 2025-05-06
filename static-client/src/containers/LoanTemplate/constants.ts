/*
* @file constants
*
* This file contains the constants like header data, footer data and the images for the loan template
*/

import { LOAN_TEMPLATE_URL_MAP } from "../../constants/AssetConstants";

/*
 * These images are for the desktop view and for flexi interest loan
 */
export const flexi_interest_loan_desktop_images = [
  {
    src: LOAN_TEMPLATE_URL_MAP.ADJUST_INTEREST,
    alt: "Gallery image 1",
  },
  {
    src: LOAN_TEMPLATE_URL_MAP.SAVE_MORE,
    alt: "Gallery image 2",
  },
];

/*
 *  These images are for the mobile view and for flexi interest loan
 */

export const flexi_interest_loan_mobile_images = [
  {
    src: LOAN_TEMPLATE_URL_MAP.SAY_HELLO,
    alt: "Gallery image 1",
  },
];

/*
 *These are the data for the heade component of the flexi interest loan
 */

export const flexi_interest_loan_header_data = {
  title: "Say hello to a loan that you can control",
  buttonText: "Join Waitlist",
  subTitle: "Pick the interest & charges that suits your goals",
  link: "https://www.surveymonkey.com/r/SKHDLTK",
};

/*
 * This the footer section of the all the templates
 */
export const loan_template_contact_us_data = {
  title: "Got questions? We're here to help",
  disclaimer:
    "Disclaimer: Joining the waitlist does not guarantee loan approval. This is subject to eligibility criteria and the lender's assessment.",
  buttonText: "Get in touch",
};

/*
 * These images are for the desktop view for instant loan approval
 */
export const instant_loan_approval_desktop_images = [
  {
    src: LOAN_TEMPLATE_URL_MAP.REDUCE_INTEREST,
    alt: "Gallery image 1",
  },
  {
    src: LOAN_TEMPLATE_URL_MAP.NO_CATCH,
    alt: "Gallery image 2",
  },
];
/*
 * These images are for the desktop view
 */

/*
 * These images are for the mobile view for instant loan approval
 */

export const instant_loan_approval_mobile_images = [
  {
    src: LOAN_TEMPLATE_URL_MAP.ONE_MIN,
    alt: "Gallery image 1",
  },
];
/*
 * These images are for the mobile view
 */

/*
 * These are the data for the header component of the instant loan approval
 */
export const instant_loan_approval_header_data = {
  title: "1-minute loan approval, guaranteed ⚡",
  buttonText: "Join Waitlist",
  subTitle: "",
  link: "https://www.surveymonkey.com/r/S5595L3",
};

/*
 *  These are the data for the header component of the zero interest loan
 */
export const zero_interest_loan_header_data = {
  title: "Pay 0% interest on your loan for 60 days",
  buttonText: "Join Waitlist",
  subTitle: "",
  link: "https://www.surveymonkey.com/r/SK35SCR",
};

/*
 * These images are for the desktop view for zero interest loan
 */
export const zero_interest_loan_desktop_images = [
  {
    src: LOAN_TEMPLATE_URL_MAP.NO_HIDDEN,
    alt: "Gallery image 1",
  },
  {
    src: LOAN_TEMPLATE_URL_MAP.CHOOSE_LOAN,
    alt: "Gallery image 2",
  },
  {
    src: LOAN_TEMPLATE_URL_MAP.INTEREST_FREE,
    alt: "Gallery image 3",
  },
];

/*
 * These images are for the mobile view for zero interest loan
 */
export const zero_interest_loan_mobile_images = [
  {
    src: LOAN_TEMPLATE_URL_MAP.ZERO_INTEREST,
    alt: "Gallery image 1",
  },
];
