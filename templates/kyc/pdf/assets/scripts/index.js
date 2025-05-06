/**
 * Returns the formatted address string
 * @example
 * getFormattedAddress({"street": "address","city": "Mumbai","pin_code": 400058,"state": "Maharashtra","country": "India"})
 * returns "address, Mumbai, Maharashtra, 400058"
 *
 * @param {object} address number with 1 to 12
 * @returns {string} Returns the formatted address string
 */
function getFormattedAddress(address) {
    var formattedAddress = '';

    if (address.street) {
        formattedAddress += address.street;
    }

    if (address.city) {
        formattedAddress += ', ' + address.city;
    }

    if (address.state) {
        formattedAddress += ', ' + address.state;
    }

    if (address.pin_code) {
        formattedAddress += ', ' + address.pin_code;
    }

    return formattedAddress;
}

(function() {
    fetch("../../models/json/main.json")
        .then((response) => response.json())
        .then((json) => {
            var modifiedJSON = {};

            modifiedJSON.applicationDetails = {
                type: json.application_type,
                kycMode: json.kyc_mode,
            };

            modifiedJSON.identityDetails = {
                name: json.name,
                fatherOrSpouseName: json.father_name_or_spouse_name,
                gender: json.gender,
                maritalStatus: json.maritial_status,
                dob: json.dob,
                nationality: json.nationality,
                status: json.status,
                pan: json.pan,
                aadhaar: json.aadhaar_number,
                proofSubmitted: json.proof_of_identity_submitted,
                photograph: json.photograph,
            };

            modifiedJSON.addressDetails = {
                residenceAddress: getFormattedAddress(json.residence_address),
                contactNumber: json.contact_details && json.contact_details.mobile_number,
                emailId: json.contact_details && json.contact_details.email_id,
                permanentAddress: getFormattedAddress(json.permanent_address),
                proofSubmitted: json.proof_of_address_submitted,
                proofIdNumber: json.proof_of_address_id_number,
                proofExpiryDate: json.proof_of_address_expiry_date,
            };

            modifiedJSON.declarationDetails = {
                date: json.declaration_date,
                place: json.declaration_place,
            };

            modifiedJSON.images = {
                signature: json.signature,
                additionalImages: json.additional_data,
            };

            var verificationDetails = json.verification_details || {};

            modifiedJSON.verificationDetails = {
                ipvDate: verificationDetails.ipv_date,
                officerName: verificationDetails.officer_name,
                empCode: verificationDetails.emp_code,
                officerDesignation: verificationDetails.officer_designation,
                intermediaryCode: verificationDetails.intermediary_code,
                officerSignature: verificationDetails.officer_signature,
            };

            var primaryContentTemplate = document.getElementById("primary-content-template").innerHTML;
            var secondaryContentTemplate = document.getElementById("secondary-content-template").innerHTML;
            var tertiaryContentTemplate = document.getElementById("tertiary-content-template").innerHTML;
            var officeUseContentTemplate = document.getElementById("office-use-content-template").innerHTML;

            var renderPrimaryContent = Mustache.render(primaryContentTemplate, {
                applicationDetails: modifiedJSON.applicationDetails,
                identityDetails: modifiedJSON.identityDetails,
            });
            var renderSecondaryContent = Mustache.render(secondaryContentTemplate, {
                addressDetails: modifiedJSON.addressDetails,
                declarationDetails: modifiedJSON.declarationDetails,
            });
            var renderTertiaryContent = Mustache.render(tertiaryContentTemplate, {
                data: modifiedJSON.images,
            });
            var renderOfficeUseContent = Mustache.render(officeUseContentTemplate, {
                data: modifiedJSON.verificationDetails,
            });

            var rendered = renderPrimaryContent + renderSecondaryContent + renderTertiaryContent + renderOfficeUseContent;

            document.getElementById("target").innerHTML = rendered;
        });
})();
