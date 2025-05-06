(function() {
    fetch("../../models/json/main.json")
        .then((response) => response.json())
        .then((json) => {

        // get static html content
        var primaryContentTemplate = document.getElementById("first-page-template").innerHTML;
        var secondaryContentTemplate = document.getElementById("second-page-template").innerHTML;
        var tertiaryContentTemplate = document.getElementById("third-page-template").innerHTML;
        var additionalContentTemplate = document.getElementById("additional-page-template").innerHTML;

        // insert dynamic data in html
        var renderPrimaryContent = Mustache.render(primaryContentTemplate, json);
        var renderSecondaryContent = Mustache.render(secondaryContentTemplate, json);
        var renderTertiaryContent = Mustache.render(tertiaryContentTemplate, json);
        var renderAdditionalContent = Mustache.render(additionalContentTemplate, json);

        var rendered = renderPrimaryContent + renderSecondaryContent + renderTertiaryContent + renderAdditionalContent;

        // inject final content in html
        document.getElementById("target").innerHTML = rendered;
    });
})();
