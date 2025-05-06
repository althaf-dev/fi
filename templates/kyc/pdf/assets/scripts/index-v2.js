
(function() {
    fetch("../../models/json/main.json")
        .then((response) => response.json())
        .then((json) => {
        // main object for mustache.js
        var modifiedJSON = {};

        // if not INDIAN, covert value to OTHER
        const ogNationality = json.nationality.toLowerCase();
        var nationalityCheckboxVal = ogNationality === 'indian' ? 'INDIAN' : 'OTHER';

        // show empty value if nationality is indian else show the provided nationality
        var nationalityText = ogNationality === 'indian' ? '' : json.nationality;

        var localAddressType = json.residence_address.type || 'unspecified';
        var permanentAddressType = json.permanent_address.type || 'unspecified';

        modifiedJSON.identity = {
            name: json.name,
            fatherOrSpouseName: json.father_name_or_spouse_name,
            dob: json.dob,
            pan: json.pan,
            nationality: nationalityText,
        };

        modifiedJSON.residenceAddress = {
            state: json.residence_address.state,
            country: json.residence_address.country,
            city: json.residence_address.city,
            pinCode: json.residence_address.pin_code,
            street: json.residence_address.street,
            line1: json.residence_address.line1,
			district: json.residence_address.district,
        };

            const proofOfAddressVar = {
                type: json.proof_of_address_submitted,
                value: json.proof_of_address_id_number,
                expiryDate: json.proof_of_address_expiry_date,
            };

        modifiedJSON.permanentAddress = {
            state: json.permanent_address.state,
            country: json.permanent_address.country,
            city: json.permanent_address.city,
            pinCode: json.permanent_address.pin_code,
            street: json.permanent_address.street,
            line1: json.permanent_address.line1,
			proofOfAddress: proofOfAddressVar,
			district: json.permanent_address.district,
        };

        var contactDetails = json.contact_details || {};
        modifiedJSON.contactDetails = {
            mobileNumber: contactDetails.mobile_number,
            emailId: contactDetails.email_id,
            officeTelNumber: contactDetails.office_tel,
            resTelNumber: contactDetails.res_tel,
        };

        modifiedJSON.appDeclaration = {
            date: json.declaration_date,
            place: json.declaration_place,
        };

        var verificationDetails = json.verification_details || {};
        modifiedJSON.verification = {
            ipvDate: verificationDetails.ipv_date,
            officerName: verificationDetails.officer_name,
            empCode: verificationDetails.emp_code,
            officerDesignation: verificationDetails.officer_designation,
            intermediaryCode: verificationDetails.intermediary_code,
        };

        var additionalImagesArr = json.additional_data || [];
        modifiedJSON.images = {
            signature: json.signature,
            additionalImages: additionalImagesArr,
            photograph: json.photograph,
            officerSignature: verificationDetails.officer_signature
        };

        /**
         * used to dynamically mark checkbox in html
         * @param {string} variable Takes the variable from html wrapped in mustache.js template
         * @param {string} requiredValue Takes the required value from JS script / JSON
         * @returns {string} 'checked' if values are equal else empty string
         */
        function getIsChecked(variable, requiredValue) {
            if (variable.toLowerCase() === requiredValue.toLowerCase()) return 'checked';
            return '';
        };

		/**
		 * used to dynamically fill the value of proof of address submitted for permanent address
		 * @param {string} poaInfo The value received from backend response
		 * @param {string} htmlValue The value passed from the HTML file
		 * @returns {string} The value in case the type matches else empty string
		 */
		function getPoaValue(poaInfo, htmlValue) {
			if (poaInfo.type.toLowerCase() === htmlValue.toLowerCase()) return poaInfo.value;
			return '';
		}

		/**
		 * used to dynamically fill the value of expiry date for proof of address submitted under permanent address
		 * @param {string} poaInfo The value received from backend response
		 * @param {string} htmlValue The value passed from the HTML file
		 * @returns {string} The value in case the type matches else empty string
		 */
		function getPoaExpiryDate(poaInfo, htmlValue) {
			if (poaInfo.type.toLowerCase() === htmlValue.toLowerCase()) return poaInfo.expiryDate;
			return '';
		}

        // function definitions for mustache.js - Main contain checkbox logic
        modifiedJSON.funcs = {
            genderCheck: function() {
                return function(val) {
                    return getIsChecked(json.gender, val);
                }
            },
            maritalCheck: function() {
                return function(val) {
                    return getIsChecked(json.marital_status, val);
                }
            },
            appTypeCheck: function() {
                return function(val) {
                    return getIsChecked(json.application_type, val);
                }
            },
            kycModeCheck: function() {
                return function(val) {
                    return getIsChecked(json.kyc_mode, val);
                }
            },
            resiStatusCheck: function() {
                return function(val) {
                    return getIsChecked(json.status, val);
                }
            },
            nationalityCheck: function() {
                return function(val) {
                    return getIsChecked(nationalityCheckboxVal, val);
                }
            },
            localAddressTypeCheck: function() {
                return function(val) {
                    return getIsChecked(localAddressType, val);
                }
            },
            permanentAddressTypeCheck: function() {
                return function(val) {
                    return getIsChecked(permanentAddressType, val);
                }
            },
			poaTypeCheck: function() {
				return function(val) {
					return getIsChecked(json.proof_of_address_submitted, val)
				}
			},
			poaValue: function() {
				return function(val) {
					return getPoaValue(proofOfAddressVar, val)
				}
			},
			poaExpiryDate: function() {
				return function(val) {
					return getPoaExpiryDate(proofOfAddressVar, val)
				}
			},
        };

        // get static html content
        var primaryContentTemplate = document.getElementById("first-page-template").innerHTML;
        var secondaryContentTemplate = document.getElementById("second-page-template").innerHTML;
        var additionalContentTemplate = document.getElementById("additional-page-template").innerHTML;

        // insert dynamic data in html
        var renderPrimaryContent = Mustache.render(primaryContentTemplate, modifiedJSON);
        var renderSecondaryContent = Mustache.render(secondaryContentTemplate, modifiedJSON);
        var renderAdditionalContent = Mustache.render(additionalContentTemplate, modifiedJSON);

        var rendered = renderPrimaryContent + renderSecondaryContent + renderAdditionalContent;

        // inject final content in html
        document.getElementById("target").innerHTML = rendered;
        });
})();
