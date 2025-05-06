import { CREDIT_CARD_TYPE } from '@/constants/AppConstant';

// Homepage Event
export const HOME_PAGE_EVENT = 'OpenedFiWebHomePage';

// export const HOME_PAGE_LEAVE_EVENT = 'LeftFiWebHomePage';
export const HOME_PAGE_BOTTOM_EVENT = 'ReachedBottomFiWebHomePage';
export const HOME_PAGE_DEPTH_EVENT = 'ScrolledFiWebHomePage';
export const HOME_PAGE_CLICKED_GET_EARLY_ACCESS_EVENT = 'ClickedGetEarlyAccess';
export const HOME_PAGE_CLICKED_JOIN_WL_EVENT = 'ClickedJoinWL';
export const HOME_PAGE_CLICKED_ALREADY_FINITE_CLUB_EVENT = 'ClickedAlreadyFiniteClub';
export const HOME_PAGE_CLICKED_ALREADY_IN_WL_EVENT = 'ClickedAlreadyInWL';
export const HOME_PAGE_ENTERED_CODE_EVENT = 'EnteredFiniteCode';
export const HOME_PAGE_CLICKED_REDEEM_FINITE_CODE_EVENT = 'ClickedRedeemFiniteCode';
export const HOME_PAGE_CLICKED_SOCIAL_LINK_EVENT = 'ClickedFollowUs';
export const HOME_PAGE_LOADED_GET_FINITE_CODE_CBO = 'LoadedGetFiniteCodeCBOFE';
export const HOME_PAGE_CLICKED_FINITE_CODE_CBO = 'ClickedGetFiniteCodeCBO';
export const HOME_PAGE_LOADED_GET_FINITE_CODE_WAITLIST = 'LoadedGetFiniteCodeWLFE';
export const HOME_PAGE_CLICKED_FINITE_CODE_WAITLIST = 'ClickedGetFiniteCodeWL';

// Waitlist iOS Flow
export const WAITLIST_IOS_HOME_EVENT = 'iOSFlowStarter';

// Personalized WebPage
export const OPENED_PERSONALIZED_WEBPAGE = 'OpenedPersonalizedWebPage';
export const CLICKED_PLAY_INTRO_VIDEO = 'ClickedPlayIntroVideo';
export const CLICKED_KNOW_BUTTON = 'ClickedKnowButton';
export const CLICKED_GROW_BUTTON = 'ClickedGrowButton';
export const CLICKED_GET_FI_ANDROID_PERSONALIZED = 'ClickedGetFiAndroidPersonalized';
export const CLICKED_GET_FI_IOS_PERSONALIZED = 'ClickedGetFiIOSPersonalized';

// Faq Events
export const CLICKED_FAQ_CATEGORY = 'ClickedFAQCategory';
export const CLICKED_FAQ_FOLDER = 'ClickedFAQFolder';
export const CLICKED_FAQ_ARTICLE = 'ClickedFAQArticle';

// Waitlist Start
export const WAITLIST_HOME_EVENT = 'LoadedLandingPageWL';
export const WAITLIST_GET_FINITE_CODE_CLICKED_EVENT = 'ClickedGetFiniteCodeWL';
export const WAITLIST_I_HAVE_A_FINITE_CODE_CLICKED_EVENT = 'ClickedIHaveFiniteCodeWL';
export const WAITLIST_ENTERED_FINITE_CODE_EVENT = 'EnteredFiniteCodeWL';
export const WAITLIST_VERIFYING_FINITE_CODE_EVENT = 'LoadedDecodingPageWL';

// Mobile No Verification
export const WAITLIST_ENTERED_NAME_EVENT = 'EnteredNameWL';
export const WAITLIST_ENTERED_MOBILE_EVENT = 'EnteredMobNoWL';
export const WAITLIST_GENERATE_OTP_EVENT = 'GenerateOTPWL';
export const WAITLIST_RESEND_OTP_EVENT = 'ClickedResendOTPWL';
export const WAITLIST_ENTERED_OTP_EVENT = 'EnteredOTPWL';
export const WAITLIST_VERIFY_OTP_EVENT = 'VerifyOTPWL';

// Returning User Mobile No Verification
export const WAITLIST_EXISTING_USER_ENTERED_MOBILE_EVENT = 'RUEnteredMobNoWL';
export const WAITLIST_EXISTING_USER_GENERATE_OTP_EVENT = 'RUGenerateOTPWL';
export const WAITLIST_EXISTING_USER_RESEND_OTP_EVENT = 'RUClickedResendOTPWL';
export const WAITLIST_EXISTING_USER_ENTERED_OTP_EVENT = 'RUEnteredOTPWL';
export const WAITLIST_EXISTING_USER_VERIFY_OTP_EVENT = 'RUVerifyOTPWL';

// Waitlist Approved or Rejected
export const WAITLIST_SECURED_SPOT_ON_WAITLIST_EVENT = 'SecuredSpotOnWL';
export const WAITLIST_ACCEPTED_TO_FINITE_CLUB_EVENT = 'AcceptedToFiniteClubWL';
export const WAITLIST_REJECTED_FROM_WAITLIST_EVENT = 'RejectedFromWL';
export const WAITLIST_SHARED_FINITE_CODE_EVENT = 'SharedFiniteCodeWL';

// Email
export const WAITLIST_EMAIL_PAGE_EVENT = 'LoadedEmailPageWL';
export const WAITLIST_SUBMIT_EMAIL_EVENT = 'SubmittedEmailWL';
export const WAITLIST_CLICK_CHANGE_EMAIL_EVENT = 'ClickedChangeEmailWL';
export const WAITLIST_SUBMIT_CHANGE_EMAIL_EVENT = 'SubmittedChangeEmailWL';

// Employer and PF Check
export const WAITLIST_EMPLOYMENT_CHECK_PAGE = 'LoadedEmploymentCheckPageWL';
export const WAITLIST_COMPANY_DETAILS_FETCH_EVENT = 'GetCompanyWL';
export const WAITLIST_SUBMITTED_COMPANY_NAME_EVENT = 'SubmittedCompanyNameWL';
// EnterCompanyEmailWL
export const WAITLIST_SUBMITTED_COMPANY_EMAIL_EVENT = 'SubmittedCompanyEmailWL';
export const WAITLIST_EMPLOYMENT_CHECK_EVENT = 'VerifyEmployerWL';
export const WL_PICKED_SUGGESTED_COMPANY_NAME_EVENT = 'PickedSuggestedCompanyNameWL';

// Referals Event
export const WAITLIST_REFERRAL_EVENT = 'LoadedReferralLandingPageWL';
export const WAITLIST_REFERRAL_CLICKED_REDEEM_EVENT = 'ClickedRedeemReferralCodeWL';

// Insights Event
export const INSIGHTS_CLICKEDSTARTINSIGHTSWL_EVENT = 'ClickedStartInsightsWL';
export const INSIGHTS_SIGNEDINGOOGLEWL_EVENT = 'SignedInGoogleWL';
export const INSIGHTS_ALLOWEDGMAILACCESS_EVENT = 'AllowedGmailAccess';
export const INSIGHTS_SHOWNGMAILINSIGHTWL_EVENT = 'ShownGmailInsightWL';
export const INSIGHTS_FINISHEDINSIGHTSQUIZWL_EVENT = 'FinishedInsightsQuizWL';
export const INSIGHTS_CLICKEDNEXTINSIGHTWL_EVENT = 'ClickedNextInsightWL';
export const INSIGHTS_NOGMAILINSIGHTWL_EVENT = 'NoGmailInsightWL';

// Waitlist Freelancer Events
export const CLICKED_I_AM_FREELANCER = 'ClickedIAmFreelancer';
export const STARTED_FREELANCER_FLOW_WL = 'StartedFreelancerFlowWL';
export const ADDED_EMP_CREDS_WL = 'AddedEmpCredentialsWL';
export const ADDED_WORK_ID_WL = 'AddedWorkIDWL';
export const SELECTED_PROFESSION_WL = 'SelectedProfessionWL';
export const SIGNED_UP_FREELANCER_FLOW = 'ThanksForSigningUpFreelancerFE';

// CBO Events
export const OPENED_CBO_LANDING_PAGE = 'OpenedCBOLandingPage';
export const CLICKED_CBO_APPLY_NOW = 'ClickedCBOApplyNow';
export const SCROLLED_CBO_PAGE = 'ScrolledCBOPage';
export const CLICKED_SEE_MORE_CBO_PAGE = 'ClickedSeeMoreCBOPage';
export const CLICKED_CBO_TERMS = 'ClickedCBOTerms';
export const CLICKED_CBO_LETS_GO = 'ClickedCBOLetsGo';
export const CLICKED_CONTINUE_PAGE1_CBO = 'ClickedContinuePage1CBO';
export const CLICKED_CONTINUE_PAGE2_CBO = 'ClickedContinuePage2CBO';
export const CLICKED_CONTINUE_PAGE3_CBO = 'ClickedContinuePage3CBO';
export const CLICKED_CBO_EMP_VER_LETS_GO = 'ClickedCBOEmpVerLetsGo';
export const CLICKED_SHARE_CBO = 'ClickedShareCBO';
export const SENT_CBO_DATA = 'SentCBODataToBE';

// finite code flow event
export const CLICKED_HAVE_A_FINITE_CODE = 'ClickedHaveAFiniteCode';
export const LOADED_FINITE_CODE_ENTER_PAGE = 'LoadedFiniteCodeEnterPage';
export const ENTERED_FINITE_CODE = 'EnteredFiniteCode';
export const LOADED_INVALID_FINITE_CODE_PAGE = 'LoadedInvalidFiniteCodePage';
export const CLICKED_RETRY_FINITE_CODE_ENTRY_LINK = 'ClickedRetryFiniteCodeEntryLink';
export const LOADED_SECURED_EARLY_ACCESS_PAGE = 'LoadedSecuredEarlyAccessPage';
export const CLICKED_GET_THE_FI_APP = 'ClickedGetTheFiApp';
export const CLICKED_GET_THE_FI_APP_IOS = 'ClickedGetTheFiAppiOS';
export const SCANNED_QR_CODE = 'ScannedQRCode';
export const CLICKED_DOWNLOAD_FI = 'ClickedDownloadFi';

// Static page event
export const LOADED_ABOUT_US_WEBSITE = 'LoadedAboutUsWebsite';
export const LOADED_FAQ_WEBSITE = 'LoadedFAQWebsite';
export const LOADED_CAREERS_WEBSITE = 'LoadedCareersWebsite';

// early access page
export const SECURED_DIRECT_ACCESS_WL = 'SecuredDirectAccessOnWLFE';

// Features page event
export const LOADED_FEATURES_WEBSITE = 'LoadedFeaturesWebsite';
export const CLICKED_FEATURES_HEADLINE = 'ClickedFeaturesHeadline';

// Salary account signup page events
export const LANDEDON_DESKTOP_PAGE_WEB = 'LandedOnDesktopPageWeb';
export const SCANNED_QR_APP_DOWNLAOD_WEB = 'ScannedQRAppDownlaodWeb';
export const CLICKED_GET_IT_ON_PLAYSTORE = 'ClickedGetItOnPlayStore';
export const CLICKED_GET_IT_ON_APPSTORE = 'ClickedGetItOnPlayStore';
export const CLCIKED_SIGNUP_IN_BROWSERWEB = 'ClcikedSignupInBrowserWeb';
export const ENTER_NUMBER_ON_WEB = 'EnterMobileNumberOnWeb';
export const CLICKED_LEARN_ABOUT_FI_COINS_WEB = 'ClickedLearnAboutFiCoinsWeb';
export const CLCIKED_SEND_UPDATED_ONWAWEB = 'ClcikedSendUpdatedOnWAWeb';
export const CLICKED_NEXT_ON_MOBILE_NO_WEB = 'ClickedNextOnMobileNoWeb';
export const ENTERED_OTP_ON_MOBILE_NOWEB = 'EnteredOTPOnMobileNoWeb';
export const CLICKED_RESEND_OTP_ON_MOBILE_NO_WEB = 'ClickedResendOTPOnMobileNoWeb';
export const CLICKED_TRY_IT_ON_APP_WEB = 'ClickedTryItOnAppWeb';
export const ENTER_WORK_EMAIL_ON_WEB = 'EnterWorkEmailOnWeb';
export const CLICKED_NEXT_ON_WORK_EMAIL_WEB = 'ClickedNextOnWorkEmailWeb';
export const ENTERED_OTP_ON_WORK_EMAIL_WEB = 'EnteredOTPOnWorkEmailWeb';
export const CLICKED_RESEND_OTP_ON_WORK_EMAIL_WEB = 'ClickedResendOTPOnWorkEmailWeb';
export const CLICKED_VERIFY_ANOTHER_WAY = 'ClickedVerifyAnotherWay';

// Credit Card Waitlist flow events
export const ENTERED_OTP_WL_CC_EVENT = 'EnteredOTPWLCC';
export const VERIFY_OTP_WL_CC_EVENT = 'VerifyOTPWLCC';
export const ENTERED_NAME_WL_CC_EVENT = 'EnteredNameWLCC';
export const VERIFY_EMAIL_WL_CC_EVENT = 'EnteredEmailWLCC';
export const SECURED_SPOT_ON_WL_CC_EVENT = 'SecuredSpotOnWLCCBE';

// salary b2b page events
export const SALARY_B2B_PAGE_FORM_SUBMIT = 'Salary_B2b_page_form_submit';
export const SALARY_B2B_CLICKED_OTHER_WAYS_VERIFY = 'Salary_B2b_Clicked_Other_ways_verify';
export const CLICKED_CALENDLY_BOOK_NOW_B2B = 'Clicked_Calendly_Book_NowB2B';
export const B2B_OTP_VERIFIED = 'B2B_OTP_verified';

// Credit Card Eligibility events
export const GFF_ELIG_CHECK_START = 'GFF-elig-check-start';
export const GFF_COMPLETED_CHECK = 'GFF-completed-check';

// Amplifi Credit Card Eligibility events
export const LANDED_ON_INTRO_SCREEN = 'LandedOnIntroScreen';
export const SCROLL_ON_INTRO_SCREEN = 'ScrollonIntroScreen';
export const CLICKED_CHECK_ELIGIBILITY_INTRO_SCREEN = 'ClickedCheckEligibilityIntroScreen';
export const LANDED_ON_MOBILE_SCREEN = 'LandedOnMobileScreen';
export const CLICKED_VERIFY_MOBILE_NUMBER_SCREEN = 'ClickedVerifyMobileNumberScreen';
export const LANDED_ON_OTP_SCREEN = 'LandedOnOTPScreen';
export const ENTERED_OTP_WLCC = 'EnteredOTPWLCC';
export const VERIFY_OTP_WLCC = 'VerifyOTPWLCC';
export const LANDED_ON_PERSONAL_DETAILS = 'LandedOnPersonalDetails';
export const ENTERED_FIRST_NAME_WLCC = 'EnteredFirstNameWLCC';
export const ENTERED_LAST_NAME_WLCC = 'EnteredLastNameWLCC';
export const ENTER_WORK_EMAIL_WLCC = 'EnteredEmailWLCC';
export const ENTERED_PAN_WLCC = 'EnteredPANWLCC';
export const ENTERED_DOB_WLCC = 'EnteredDOBWLCC';
export const CLICKED_ON_CONSENT_1_TICK_MARK_WLCC = 'ClickedonConsent1TickMarkWLCC';
export const CLICKED_ON_CONSENT_2_TICK_MARK_WLCC = 'ClickedonConsent2TickMarkWLCC';
export const CLICKED_CHECK_ELIGIBILITY_BUTTON_ON_DETAILS_PAGE = 'ClickedCheckEligibilityButtonOnDetailsPage';
export const ELIGIBILITY_SUCCESS = 'EligibilitySuccess';
export const ELIGIBILITY_FAILURE = 'EligibilityFailure';
export const ELIGIBILITY_DOWNLOAD = 'EligibleDownload';
export const NON_ELIGIBILITY_DOWNLOAD = 'Non-EligibleDownload';

export const CREDIT_CARD_MAP: any = {
    [CREDIT_CARD_TYPE.AMPLIFI]: {
        LANDED_ON_INTRO_SCREEN: 'LandedOnIntroScreen',
        SCROLL_ON_INTRO_SCREEN: 'ScrollonIntroScreen',
        CLICKED_CHECK_ELIGIBILITY_INTRO_SCREEN: 'ClickedCheckEligibilityIntroScreen',
        LANDED_ON_MOBILE_SCREEN: 'LandedOnMobileScreen',
        CLICKED_VERIFY_MOBILE_NUMBER_SCREEN: 'ClickedVerifyMobileNumberScreen',
        LANDED_ON_OTP_SCREEN: 'LandedOnOTPScreen',
        ENTERED_OTP_WLCC: 'EnteredOTPWLCC',
        VERIFY_OTP_WLCC: 'VerifyOTPWLCC',
        LANDED_ON_PERSONAL_DETAILS: 'LandedOnPersonalDetails',
        ENTERED_FIRST_NAME_WLCC: 'EnteredFirstNameWLCC',
        ENTERED_LAST_NAME_WLCC: 'EnteredLastNameWLCC',
        ENTER_WORK_EMAIL_WLCC: 'EnteredEmailWLCC',
        ENTERED_PAN_WLCC: 'EnteredPANWLCC',
        ENTERED_DOB_WLCC: 'EnteredDOBWLCC',
        CLICKED_ON_CONSENT_1_TICK_MARK_WLCC: 'ClickedonConsent1TickMarkWLCC',
        CLICKED_ON_CONSENT_2_TICK_MARK_WLCC: 'ClickedonConsent2TickMarkWLCC',
        CLICKED_CHECK_ELIGIBILITY_BUTTON_ON_DETAILS_PAGE: 'ClickedCheckEligibilityButtonOnDetailsPage',
        ELIGIBILITY_SUCCESS: 'EligibilitySuccess',
        ELIGIBILITY_FAILURE: 'EligibilityFailure',
        ELIGIBILITY_DOWNLOAD: 'EligibleDownload',
        NON_ELIGIBILITY_DOWNLOAD: 'Non-EligibleDownload'
    },
    [CREDIT_CARD_TYPE.MAGNIFI]: {
        LANDED_ON_INTRO_SCREEN: 'MagWebsiteVisitors',
        CLICKED_CHECK_ELIGIBILITY_INTRO_SCREEN: 'ClickedCheckMagEligibilityIntroScreen',
        LANDED_ON_MOBILE_SCREEN: 'LandedOnMagMobileScreen',
        CLICKED_VERIFY_MOBILE_NUMBER_SCREEN: 'ClickedVerifyMagMobileNumberScreen',
        LANDED_ON_OTP_SCREEN: 'LandedOnMagOTPScreen',
        ENTERED_OTP_WLCC: 'EnteredMagOTP',
        VERIFY_OTP_WLCC: 'VerifyMagOTP',
        LANDED_ON_PERSONAL_DETAILS: 'LandedOnMagPersonalDetailsPage',
        CLICKED_ON_CONSENT_1_TICK_MARK_WLCC: 'ClickedonMagConsent1TickMarkWLCC',
        CLICKED_ON_CONSENT_2_TICK_MARK_WLCC: 'ClickedonMagConsent2TickMarkWLCC',
        CLICKED_CHECK_ELIGIBILITY_BUTTON_ON_DETAILS_PAGE: 'ClickedCheckMagEligibilityButtonOnDetailsPage',
        ELIGIBILITY_SUCCESS: 'MagEligibilitySuccess',
        ELIGIBILITY_FAILURE: 'MagEligibilityFailure',
        ELIGIBILITY_DOWNLOAD: 'MagEligibleDownload',
        NON_ELIGIBILITY_DOWNLOAD: 'MagNonEligibleDownload',
    },
};

// digital savings account events

export const CLICKED_DOWNLOAD_NOW_SECUREDIGITALSA = 'Clicked Download Now - Android - SecureDigitalSA';
export const CLICKED_DOWNLOAD_NOW_IOS_SECUREDIGITALSA = 'Clicked Download Now - iOS - SecureDigitalSA';
export const PAGE_VIEW_SECUREDIGITALSA = 'Page View - SecureDigitalSA';

export const riskFormEvents = {
    RISK_FORM_LANDING_PAGE: 'RISK_FORM_LANDING_PAGE',
    RISK_FORM_ENTERED_PHONE_NUMBER: 'RISK_FORM_ENTERED_PHONE_NUMBER',
    RISK_FORM_LAND_OTP_VERIFICATION_PAGE: 'RISK_FORM_LAND_OTP_VERIFICATION',
    RISK_FORM_LAND_OTP_VERIFICATION_SUCCESS: 'RISK_FORM_LAND_OTP_VERIFICATION_SUCCESS',
    RISK_FORM_LAND_OTP_VERIFICATION_FAILED: 'RISK_FORM_LAND_OTP_VERIFICATION_FAILED',
    RISK_FORM_ENTERED_OTP: 'RISK_FORM_ENTERED_OTP',
    RISK_FORM_LAND_ON_INTRO_FROM: 'RISK_FORM_INTRO_FROM',
    RISK_FORM_FORM_REQUEST_SUCCESS: 'RISK_FORM_FORM_REQUEST_SUCCESS',
    RISK_FORM_FORM_REQUEST_FAILED: 'RISK_FORM_FORM_REQUEST_FAILED',
    RISK_FROM_CLICKED_NEXT_BUTTON_IN_INTRO_PAGE: 'RISK_FROM_CLICKED_NEXT_BUTTON_IN_INTRO_PAGE',
    RISK_FORM_LANDED_ON_QUESTIONER_PAGE: 'RISK_FORM_LANDED_ON_QUESTIONER_PAGE',
    RISK_FORM_CLICKED_ON_SUBMIT_BUTTON_QUESTIONER_PAGE: 'RISK_FORM_CLICKED_ON_SUBMIT_BUTTON_QUESTIONER_PAGE',
    RISK_FORM_SUBMISSION_SUCCESS: 'RISK_FORM_SUBMISSION_SUCCESS',
    RISK_FORM_SUBMISSION_FAILURE: 'RISK_FORM_SUBMISSION_FAILURE',
    RISK_FORM_LANDED_ON_FINAL_SCREEN: 'RISK_FORM_LANDED_ON_FINAL_SCREEN',
};
