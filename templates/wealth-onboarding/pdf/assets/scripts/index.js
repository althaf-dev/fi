(function() {
    fetch("../../models/json/signature.json")
        .then((response) => response.json())
        .then((json) => {
            var modifiedJSON = {};

            modifiedJSON.secondaryContent = {
                signature: json.signature,
                name: json.name
            };

            var primaryContentTemplate = document.getElementById("primary-content-template").innerHTML;
            var secondaryContentTemplate = document.getElementById("secondary-content-template").innerHTML;

            var renderPrimaryContent = Mustache.render(primaryContentTemplate, {});
            var renderSecondaryContent = Mustache.render(secondaryContentTemplate, {
                data: modifiedJSON.secondaryContent,
            });

            var renderContent = renderPrimaryContent + renderSecondaryContent;

            document.getElementById("target").innerHTML = renderContent;
        });
})();
