const maskedValue = '^';
const regex = /[^\s]/g;
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function maskValue(value) {

  if (typeof value !== 'string') {
    return value;
  }

  return value.replace(regex, maskedValue);
}

function maskData(json) {
  for (var key in json) {
    const dataType = Object.prototype.toString.call(json[key]);
    switch (dataType) {
      case '[object Array]':
        for (var index = 0; index < json[key].length; index++) {
          if ((typeof json[key]) == 'object') {
            maskData(json[key]);
          } else {
            json[key][index] = maskValue(json[key][index]);
          }
        }
        break;
      case '[object Object]':
        maskData(json[key]);
        break;
      case '[object String]':
        json[key] = maskValue(json[key]);
        break;
    }
  }
}

function addDaysToDate(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);

  const month = monthNames[result.getMonth()];
  const day = result.getDate();
  const year = result.getFullYear();

  return day + ' ' + month + ', ' + year;
}

(function () {
    fetch("../json/main.json")
        .then((response) => response.json())
        .then((json) => {

            json.smaNpaClassificationDate = [
                {
                  defaultCategory: "SMA 0 (Principal or interest payment overdue for not more than 30 days)",
                  dateClassification: addDaysToDate(json.emiStartDate, 0)
                },
                {
                  defaultCategory: "SMA 1 (Installment or interest payment overdue Between 31-60 days)",
                  dateClassification: addDaysToDate(json.emiStartDate, 30)
                },
                {
                  defaultCategory: "SMA 2 (Instalment or interest overdue above 60 days, Till classification as NPA ) ",
                  dateClassification: addDaysToDate(json.emiStartDate, 60)
                },
                {
                  defaultCategory: "NPA(Installment or interest overdue above 90 days)",
                  dateClassification: addDaysToDate(json.emiStartDate, 90)
                },
              ]
        
              // maskData(json);

              // get static html content
              var primaryContentTemplate = document.getElementById("first-page-template").innerHTML;
              var termsContentTemplate = document.getElementById("personal-loan-agreement-page-template").innerHTML;
              var schedule1Template = document.getElementById("schedule-1-template").innerHTML;
              var privacyPolicyTemplate = document.getElementById("privacy-policy-of-lsp").innerHTML;
        
              // insert dynamic data in html
              var renderPrimaryContent = Mustache.render(primaryContentTemplate, { data: json });
              var renderSecondaryContent = Mustache.render(termsContentTemplate, { data: json });
              var renderTertiaryContent = Mustache.render(schedule1Template, { data: json });
              var renderFifthContent = Mustache.render(privacyPolicyTemplate, { data: json });
        
              var rendered = renderPrimaryContent + renderSecondaryContent + renderTertiaryContent + renderFifthContent;
        
              // inject final content in html
              document.getElementById("target").innerHTML = rendered;
        });
})();
