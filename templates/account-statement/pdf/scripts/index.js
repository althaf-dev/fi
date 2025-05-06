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
    fetch("json/main.json")
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
            var hasTxnSummaryData = true;

            if (txnSummaryJSON) {
                var openingBalance = txnSummaryJSON.OpeningBalance;
                var closingBalance = txnSummaryJSON.ClosingBalance;
                var moneyIn = txnSummaryJSON.MoneyIn;
                var spent = txnSummaryJSON.Spent;
                var saved = txnSummaryJSON.Saved;

                if (openingBalance) {
                    txnSummaryData.OpeningBalance = {
                        Amount: getFormattedAmount(openingBalance.Amount)
                    };
                }

                if (closingBalance) {
                    txnSummaryData.ClosingBalance = {
                        Amount: getFormattedAmount(closingBalance.Amount)
                    };
                }

                if (moneyIn) {
                    txnSummaryData.MoneyIn = {
                        Amount: getFormattedAmount(moneyIn.Amount),
                        TransactionLabel: moneyIn.TransactionCount + (moneyIn.TransactionCount > 1 ? " Transactions" : " Transaction") 
                    };
                }

                if (spent) {
                    txnSummaryData.Spent = {
                        Amount: getFormattedAmount(spent.Amount),
                        TransactionLabel: spent.TransactionCount + (spent.TransactionCount > 1 ? " Transactions" : " Transaction")
                    };
                }

                if (saved) {
                    txnSummaryData.Saved = {
                        Amount: getFormattedAmount(saved.Amount),
                        TransactionLabel: saved.TransactionCount + (saved.TransactionCount > 1 ? " Transactions" : " Transaction")
                    };
                }
            } else {
                hasTxnSummaryData = false;
            }

            var txnData = {};

            // format txn details according to the rendered html
            json.TransactionDetails && json.TransactionDetails.forEach(function(item) {
                var modifiedItem = Object.assign({}, item);
                
                modifiedItem.Amount = getFormattedAmount(modifiedItem.Amount);
                modifiedItem.Balance = getFormattedAmount(modifiedItem.Balance);

                modifiedItem.TxnDescription = function() {
                    var str = "";
                    
                    if (this.Comments) {
                        str += this.Comments;
                    }

                    if (this.Location) {
                        if (this.Comments) {
                            str += " • " + this.Location;
                        } else {
                            str += this.Location;
                        }
                    }

                    if (this.PaymentMethod) {
                        if (this.Location) {
                            str += " • " + this.PaymentMethod;
                        } else if (this.Comments) {
                            str += " • " + this.PaymentMethod;
                        } else {
                            str += this.PaymentMethod;
                        }
                    }

                    return str;
                };

                if (item.TransactionType) {
                    var txnType = item.TransactionType.toLowerCase();

                    modifiedItem.IsExpense = txnType === "expense";
                    modifiedItem.IsIncome = txnType === "income";
                    modifiedItem.IsSaving = txnType === "savings";
                } else if (item.AmountBadge) {
                    var amountBadge = item.AmountBadge.toLowerCase();

                    modifiedItem.IsExpense = amountBadge === "debit";
                    modifiedItem.IsIncome = amountBadge === "credit";
                    modifiedItem.IsSaving = amountBadge === "savings";
                }

                if (modifiedItem.IsSaving) {
                    modifiedItem.AmountUnitsClass = "l1--v1";
                    modifiedItem.AmountDecimalsClass = "l5";
                } else {
                    modifiedItem.AmountUnitsClass = "l1";
                    modifiedItem.AmountDecimalsClass = "l3";
                }

                var tsSeconds = parseInt(item.TransactionDateTime.seconds, 10) + 19800; // offset 5.5 * 60 * 60
                var dateAndMonth = getFormattedDateAndMonth(tsSeconds);
                var hasDayIcon = false;
                var hasNightIcon = false;
                var iconObj;

                if (txnData[dateAndMonth]) {
                    hasDayIcon = txnData[dateAndMonth].hasDayIcon;
                    hasNightIcon = txnData[dateAndMonth].hasNightIcon;
                }

                iconObj = getIconObj(tsSeconds, hasDayIcon, hasNightIcon);

                if (iconObj.dayIcon) {
                    hasDayIcon = true;
                    modifiedItem.IsDayIcon = true;
                } else if (iconObj.nightIcon) {
                    hasNightIcon = true;
                    modifiedItem.IsNightIcon = true;
                }

                if (!txnData[dateAndMonth]) {
                    txnData[dateAndMonth] = { data: [modifiedItem], hasDayIcon: hasDayIcon, hasNightIcon: hasNightIcon };
                } else {
                    txnData[dateAndMonth].data.push(modifiedItem);
                    txnData[dateAndMonth].hasDayIcon = hasDayIcon;
                    txnData[dateAndMonth].hasNightIcon = hasNightIcon;
                }
            });

            // sort the txn data according to the timestamp
            json.TxnData = sortTxnData(txnData);

            // prepare the page txn data to make it render on the html
            var pageData = [{ page: 1, data: [{ name: "", data: []}] }];
            var currIdx = 0;
            var innerIdx = -1;
            var height = hasTxnSummaryData ? 485 : 644; // total height - 1120, header - 260, footer - 160, txn summary - 142, content top & bottom padding - 16 + 36, left content = 684 (1120 - 260 - 160 - 142 - 16 - 36)
            var currHeight = 0;

            json.TxnData.forEach(function(item) {
                innerIdx += 1;
                currHeight += 40 + 42;

                if (currHeight > height) {
                    currIdx += 1;
                    height = 812; // total height - 1120, header - 80, footer - 160, content top padding & header - 32 + 36, left content = 812 (1120 - 80 - 160 - 32 - 36)
                    innerIdx = 0;
                    currHeight = 40 + 42;
                }

                if (!pageData[currIdx]) {
                    pageData[currIdx] = { page: currIdx + 1, data: [{ name: "", data: []}] };
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
            var rendered = "";

            pageData.forEach(function(item, idx) {
                var headerTemplate;
                var hasTxns = !!item.data[0].data.length;
                var contentData = {
                    TxnSummaryData: txnSummaryData,
                    HasTxnSummaryData: hasTxnSummaryData && idx === 0 && hasTxns,
                    TxnData: item.data,
                    HasTxns: hasTxns,
                    FromDate: json.FromDate,
                    ToDate: json.ToDate,
                };

                if (idx === 0) {
                    headerTemplate = document.getElementById("primary-header-template").innerHTML;
                    contentData.Class = (hasTxnSummaryData ? "ccr" : "ccr ccr--v2").concat(!!json.UserDetails.Address ? " ccr--v3" : "");
                } else {
                    headerTemplate = document.getElementById("secondary-header-template").innerHTML;
                    contentData.Class = "ccr ccr--v1";
                }
                
                var contentTemplate = document.getElementById("content-template").innerHTML;
                var footerTemplate = document.getElementById("footer-template").innerHTML;

                var renderHeader = Mustache.render(headerTemplate, {
                    Class: !!json.UserDetails.Address ? 'hcr--v2' : 'hcr',
                    UserDetails: json.UserDetails,
                    HasUserAddress: !!json.UserDetails.Address,
                    FromDate: json.FromDate,
                    ToDate: json.ToDate,
                });
                var renderFooter = Mustache.render(footerTemplate, { Page: item.page, Length: len });
                var renderContent = Mustache.render(contentTemplate, contentData);

                rendered += renderHeader + renderContent + renderFooter;
            });

            document.getElementById("target").innerHTML = rendered;    
        });
})();
