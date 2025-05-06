(function() {
    fetch("../../models/json/digilocker.json")
        .then((response) => response.json())
        .then((json) => {
            var modifiedJSON = {};

            modifiedJSON.applicationDetails = {
                type: json.DocumentType,
                generationDate: json.GenerationDate,
                downloadDate: json.DownloadDate,
                maskedAadhaarNumber: json.MaskedAadhaarNumber,
                name: json.Name,
                dateOfBirth: json.DateOfBirth,
                gender: json.Gender,
                careOf: json.CareOf,
                address: json.Address,
                landmark: json.Landmark,
                locality: json.Locality,
                city: json.City,
                pincode: json.PinCode,
                state: json.State,
                personImage: json.Photo,
            };

            var primaryContentTemplate = document.getElementById("primary-content-template").innerHTML;

            var renderPrimaryContent = Mustache.render(primaryContentTemplate, {
                applicationDetails: modifiedJSON.applicationDetails,
            });

            var rendered = renderPrimaryContent;

            document.getElementById("target").innerHTML = rendered;
        });
})();
