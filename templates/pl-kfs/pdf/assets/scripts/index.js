(function () {
    fetch("../json/main.json")
        .then((response) => response.json())
        .then((json) => {

            // get static html content
            var primaryContentTemplate = document.getElementById("first-page-template").innerHTML;

            // insert dynamic data in html
            var renderPrimaryContent = Mustache.render(primaryContentTemplate, { data: json });

            var rendered = renderPrimaryContent;

            // inject final content in html
            document.getElementById("target").innerHTML = rendered;
        });
})();
