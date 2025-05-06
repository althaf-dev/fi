
(function() {
    fetch("../../models/json/images-pdf.json")
        .then((response) => response.json())
        .then((json) => {
        // main object for mustache.js
        var modifiedJSON = {};

        var additionalImagesArr = json.additional_data || [];
        modifiedJSON.images = {
            additionalImages: additionalImagesArr,
        };

        // get static html content
        var additionalContentTemplate = document.getElementById("additional-page-template").innerHTML;

        // insert dynamic data in html
        var renderAdditionalContent = Mustache.render(additionalContentTemplate, modifiedJSON);

        var rendered = renderAdditionalContent;

        // inject final content in html
        document.getElementById("target").innerHTML = rendered;
        });
})();
