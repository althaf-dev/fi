(function() {
    fetch("../json/main.json")
        .then((response) => response.json())
        .then((json) => {
            var modifiedJSON = {};

            modifiedJSON.images={
                filogo: json.logoImageUrl
            }

            modifiedJSON.userdetails={
                financialYear: json.financialYear,
                name: json.name,
                statementPeriod: json.statementPeriod,
                panNumber: json.panNumber,
                generationDate: json.generationDate,
            }

            modifiedJSON.investedDetails={
                investedDetails: json.investedDetails,
                totalInvestedAmount: json.totalInvestedAmount
            }

            modifiedJSON.upcomingInvestmentDetails={
                investmentdetails: json.upcomingInvestmentDetails,
                totalUpcomingInvestmentAmount: json.totalUpcomingInvestmentAmount
            }

        // get static html content
        var primaryContentTemplate = document.getElementById("primary-header-template").innerHTML;
        var secondaryContentTemplate = document.getElementById("second-content-template").innerHTML;
        var tertiaryContentTemplate = document.getElementById("third-content-template").innerHTML;
        var fourthContentTemplate = document.getElementById("fourth-content-template").innerHTML;

        // insert dynamic data in html
        var renderPrimaryContent = Mustache.render(primaryContentTemplate, { data:modifiedJSON.images});
        var renderSecondaryContent = Mustache.render(secondaryContentTemplate, {data:modifiedJSON.userdetails});
        var renderTertiaryContent = Mustache.render(tertiaryContentTemplate, {data:modifiedJSON.investedDetails});
        var renderFooterContent = Mustache.render(fourthContentTemplate, {data:modifiedJSON.upcomingInvestmentDetails});

        var rendered = renderPrimaryContent + renderSecondaryContent + renderTertiaryContent + renderFooterContent;

        // inject final content in html
        document.getElementById("target").innerHTML = rendered;
    });
})();
