(function () {
    fetch("../json/main.json")
        .then((response) => response.json())
        .then((json) => {

            // get static html content
            var primaryContentTemplate = document.getElementById("primary-header-template").innerHTML;
            var aboutContentTemplate = document.getElementById("about-content-template").innerHTML;
            var pageContentTemplate = document.getElementById("page-content-template").innerHTML;
            var loanAggrementContentTemplate = document.getElementById("loan-aggrement-content-template").innerHTML;
            var installmentContentTemplate = document.getElementById("installment-content-template").innerHTML;

            // insert dynamic data in html
            var renderPrimaryContent = Mustache.render(primaryContentTemplate, {});
            var aboutPageContent = Mustache.render(aboutContentTemplate, {});
            var renderPageContent = Mustache.render(pageContentTemplate, { data: json.loanAgreementDetails });
            var loanAggrementPageContent = Mustache.render(loanAggrementContentTemplate, { data: json.loanAgreementDetails });
            var installmentPageContent = Mustache.render(installmentContentTemplate, { data: json.installmentDetails });

            var rendered = renderPrimaryContent + aboutPageContent + renderPageContent + loanAggrementPageContent + installmentPageContent;

            // inject final content in html
            document.getElementById("target").innerHTML = rendered;
        });
})();
