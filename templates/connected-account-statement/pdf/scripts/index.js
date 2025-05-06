function sortTxnData(txnData) {
    var txnDataKeys = Object.keys(txnData);

    var sortedKeys = txnDataKeys.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(a) - new Date(b);
    });

    var sortedTxnData = [];

    sortedKeys.forEach(function(item) {
        sortedTxnData.push({
            name: item,
            data: txnData[item].data
        })
    })

    return sortedTxnData;
}

(function() {
    fetch('json/main.json')
        .then((response) => response.json())
        .then((json) => {
            var fromDateMonth = getMonthStr(json.FromDate.month);
            var fromDateMonthShortStr = getMonthStr(json.FromDate.month, true);
            var toDateMonth = getMonthStr(json.ToDate.month);
            var toDateMonthShortStr = getMonthStr(json.ToDate.month, true);

            json.FromDate.month = fromDateMonth;
            json.ToDate.month = toDateMonth;

            json.FromDate.monthShortStr = fromDateMonthShortStr;
            json.ToDate.monthShortStr = toDateMonthShortStr;

            var txnSummaryData = {};
            var txnSummaryJSON = json.TransactionSummary;

            if (txnSummaryJSON) {
                var closingBalance = txnSummaryJSON.ClosingBalance;

                if (closingBalance) {
                    txnSummaryData.ClosingBalance = {
                        Amount: getFormattedAmount(closingBalance.Amount)
                    };
                }
            }

            var txnData = {};

            // format txn details according to the rendered html
            json.TransactionDetails && json.TransactionDetails.forEach(function(item) {
                var modifiedItem = Object.assign({}, item);
                
                modifiedItem.Amount = getFormattedAmount(modifiedItem.Amount);
                modifiedItem.Balance = getFormattedAmount(modifiedItem.Balance);

                if (item.AmountBadge) {
                    var amountBadge = item.AmountBadge.toLowerCase();

                    modifiedItem.IsDebit = amountBadge === 'debit';
                    modifiedItem.IsCredit = amountBadge === 'credit';
                    modifiedItem.IsUnspecified = amountBadge === 'amount_badge_unspecified';
                }

                var tsSeconds = item.TransactionDateTime.seconds + 19800; // offset 5.5 * 60 * 60
                var dateAndMonth = getFormattedDateAndMonth(tsSeconds);

                if (!txnData[dateAndMonth]) {
                    txnData[dateAndMonth] = { data: [modifiedItem] };
                } else {
                    txnData[dateAndMonth].data.push(modifiedItem);
                }
            });

            // sort the txn data according to the timestamp
            json.TxnData = sortTxnData(txnData);

            // prepare the page txn data to make it render on the html
            var pageData = [{ page: 1, data: [{ name: '', data: []}] }];
            var currIdx = 0;
            var innerIdx = -1;
            var height = 700; // total height - 1120, header - 225, footer - 160, content top & bottom padding - 16 + 32 (1120 - 225 - 80 - 16 - 32)
            var currHeight = 0;

            json.TxnData.forEach(function(item) {
                innerIdx += 1;
                currHeight += 40 + 42;

                if (currHeight > height) {
                    currIdx += 1;
                    height = 812; // total height - 1120, header - 80, footer - 160, content top padding & header - 32 + 36 (1120 - 80 - 120 - 32 - 36)
                    innerIdx = 0;
                    currHeight = 40 + 42;
                }

                if (!pageData[currIdx]) {
                    pageData[currIdx] = { page: currIdx + 1, data: [{ name: '', data: []}] };
                }

                pageData[currIdx].data[innerIdx] = {
                    name: item.name,
                    data: [item.data[0]]
                };

                item.data.forEach(function(idata, sidx) {
                    if (sidx !== 0) {
                        currHeight += 54;

                        if (currHeight > height) {
                            currIdx += 1;
                            height = 812;
                            innerIdx = 0;
                            currHeight = 40 + 42;
                        }

                        if (!pageData[currIdx]) {
                            pageData[currIdx] = { page: currIdx + 1, data: [{ name: item.name, data: []}] };
                        }
        
                        pageData[currIdx].data[innerIdx].data.push(idata);
                    }
                })
            });

            var len = pageData.length;
            var rendered = '';

            pageData.forEach(function(item, idx) {
                var headerTemplate;
                var hasTxns = !!item.data[0].data.length;
                var contentData = {
                    TxnData: item.data,
                    HasTxns: hasTxns,
                    FromDate: json.FromDate,
                    ToDate: json.ToDate,
                };

                if (idx === 0) {
                    headerTemplate = document.getElementById('primary-header-template').innerHTML;
                    contentData.Class = 'ccr';
                } else {
                    headerTemplate = document.getElementById('secondary-header-template').innerHTML;
                    contentData.Class = 'ccr ccr--v1';
                }
                
                var contentTemplate = document.getElementById('content-template').innerHTML;
                var footerTemplate = document.getElementById('footer-template').innerHTML;

                var renderHeader = Mustache.render(headerTemplate, {
                    UserDetails: json.UserDetails,
                    FromDate: json.FromDate,
                    ToDate: json.ToDate,
                    TxnSummaryData: txnSummaryData,
                });
                var renderFooter = Mustache.render(footerTemplate, { Page: item.page, Length: len });
                var renderContent = Mustache.render(contentTemplate, contentData);

                rendered += renderHeader + renderContent + renderFooter;
            });

            document.getElementById('target').innerHTML = rendered;    
        });
})();
