var init = (function () {
    // required if we send data as stringified JSON
    // var statement = '${data}';

    // no txn json
    // statement = '{"UserDetails":{"Name":"Shreya Khajanchi","PhoneNumber":9999911111,"Email":"superfian@gmail.com","Address":"2nd Floor, D406, Sector 40 NOIDA, UP","MaskedCreditCardNumber":"10010100466777"},"FromDate":{"year":"2020","month":"10","day":"1"},"ToDate":{"year":2020,"month":12,"day":10},"TransactionDetails":[],"TransactionSummary":null}';

    // no txn summary json
    // statement = '{"UserDetails":{"Name":"Shreya Khajanchi","PhoneNumber":9999911111,"Email":"superfian@gmail.com","Address":"2nd Floor, D406, Sector 40 NOIDA, UP","MaskedCreditCardNumber":"10010100466777"},"FromDate":{"year":"2020","month":"10","day":"1"},"ToDate":{"year":2020,"month":12,"day":10},"TransactionDetails":[{"Amount": {"units": 1000000,"nanos": 500000000},"Date": {"seconds": 1606056420,"nanos": 10},"MerchantName": "ATM Withdrawal","MerchantLocation": "PNB ATM","PaymentMethod": "Debit Card","TransactionType": "AUTOMATED","Category": "Test","RewardCoins": 1200}],"Summary": null}';

    // both txn & txn summary json
    var statement =JSON.stringify({
    "UserDetails":
         {
             "Name": "Jolly Joseph",
             "PhoneNumber": 8971743426,
             "Email": "swarooplokesh123@gmail.com",
             "Address": "421, Fi Apartments, Bangalore, Karnataka, INDIA - 686502",
             "MaskedCreditCardNumber": "•••• •••• •••• 4390"
         },
    "FiBrandLogo": "https://epifi-icons.s3.ap-south-1.amazonaws.com/statement/svgs/logo_v2.svg",
    "PartnerBankLogo": "https://epifi-icons.s3.ap-south-1.amazonaws.com/statement/svgs/federal-perfect-banking.svg",
    "CreditCardProgramLogo": "https://epifi-icons.s3.ap-south-1.amazonaws.com/statement/svgs/simplifi.svg",
     "FromDate":
         {
             "year": 2023,
             "month": 3,
             "day": 2
         },
     "ToDate":
         {
             "year": 2023,
             "month": 3,
             "day": 29
         },
     "Summary":
         {
             "StatementDate":
                 {
                     "year": 2023,
                     "month": 3,
                     "day": 30
                 },
             "PaymentDueDate":
                 {
                     "year": 2023,
                     "month": 4,
                     "day": 16
                 },
             "AvailableLimit":
                 {
                     "currency_code": "INR",
                     "units": 216178,
                     "nanos": 600000000
                 },
             "TotalAmountDue":
                 {
                     "currency_code": "INR",
                     "units": 32046,
                     "nanos": 400000000
                 },
             "MinAmountDue":
                 {
                     "currency_code": "INR",
                     "units": 1602,
                     "nanos": 320000000
                 },
             "OpeningBalance":
                 {
                     "currency_code": "INR"
                 },
             "Spends":
                 {
                     "currency_code": "INR",
                     "units": 40775
                 },
             "Interest": null,
             "Fees":
                 {
                     "currency_code": "INR"
                 },
             "RepaymentsAndRefunds":
                 {
                     "currency_code": "INR",
                     "units": 695312222,
                     "nanos": 600000000
                 },
             "SpendsConvertedToEmi":
                 {
                     "currency_code": "INR"
                 }
         },
     "TransactionDetails":
         [
             {
                 "Amount":
                     {
                         "currency_code": "INR",
                         "units": 250
                     },
                 "Date":
                     {
                         "seconds": 1679984912
                     },
                 "MerchantName": "ABCRESTAURANTCOIMBATORE               IN",
                 "MerchantLocation": "IN",
                 "TransactionOrigin": "",
                 "Category": "",
                 "TransactionType": "Debit",
                 "PaymentMethod": "",
                 "RewardCoins": 100
             },
             {
                 "Amount":
                     {
                         "currency_code": "INR",
                         "units": 15000
                     },
                 "Date":
                     {
                         "seconds": 1679995217
                     },
                 "MerchantName": "555ELECTRONICSTRIVANDRAM              IN",
                 "MerchantLocation": "IN",
                 "TransactionOrigin": "",
                 "Category": "",
                 "TransactionType": "Debit",
                 "PaymentMethod": "",
                 "RewardCoins": 100
             },
             {
                 "Amount":
                     {
                         "currency_code": "INR",
                         "units": 250
                     },
                 "Date":
                     {
                         "seconds": 1680068096
                     },
                 "MerchantName": "",
                 "MerchantLocation": "",
                 "TransactionOrigin": "",
                 "Category": "",
                 "TransactionType": "Credit",
                 "PaymentMethod": "",
                 "RewardCoins": 0
             },
             {
                 "Amount":
                     {
                         "currency_code": "INR",
                         "units": 1255
                     },
                 "Date":
                     {
                         "seconds": 1680083723
                     },
                 "MerchantName": "555ELECTRONICSTRIVANDRAM              IN",
                 "MerchantLocation": "IN",
                 "TransactionOrigin": "",
                 "Category": "",
                 "TransactionType": "Debit",
                 "PaymentMethod": "",
                 "RewardCoins": 100
             },
             {
                 "Amount":
                     {
                         "currency_code": "INR",
                         "units": 2000
                     },
                 "Date":
                     {
                         "seconds": 1680083815
                     },
                 "MerchantName": "555ELECTRONICSTRIVANDRAM              IN",
                 "MerchantLocation": "IN",
                 "TransactionOrigin": "",
                 "Category": "",
                 "TransactionType": "Debit",
                 "PaymentMethod": "",
                 "RewardCoins": 100
             },
             {
                 "Amount":
                     {
                         "currency_code": "INR",
                         "units": 22000
                     },
                 "Date":
                     {
                         "seconds": 1680083956
                     },
                 "MerchantName": "555ELECTRONICSTRIVANDRAM              IN",
                 "MerchantLocation": "IN",
                 "TransactionOrigin": "",
                 "Category": "",
                 "TransactionType": "Debit",
                 "PaymentMethod": "",
                 "RewardCoins": 100
             },
             {
                 "Amount":
                     {
                         "currency_code": "INR",
                         "units": 270
                     },
                 "Date":
                     {
                         "seconds": 1680084007
                     },
                 "MerchantName": "ABCRESTAURANTCOIMBATORE               IN",
                 "MerchantLocation": "IN",
                 "TransactionOrigin": "",
                 "Category": "",
                 "TransactionType": "Debit",
                 "PaymentMethod": "",
                 "RewardCoins": 100
             },
             {
                 "Amount":
                     {
                         "currency_code": "INR",
                         "units": 1000,
                         "nanos": 280000000
                     },
                 "Date":
                     {
                         "seconds": 1680093903
                     },
                 "MerchantName": "Others",
                 "MerchantLocation": "nt",
                 "TransactionOrigin": "",
                 "Category": "",
                 "TransactionType": "Credit",
                 "PaymentMethod": "Mobile",
                 "RewardCoins": 0
             },
             {
                 "Amount":
                     {
                         "currency_code": "INR",
                         "units": 2000,
                         "nanos": 830000000
                     },
                 "Date":
                     {
                         "seconds": 1680094007
                     },
                 "MerchantName": "Others",
                 "MerchantLocation": "nt",
                 "TransactionOrigin": "",
                 "Category": "",
                 "TransactionType": "Credit",
                 "PaymentMethod": "Mobile",
                 "RewardCoins": 0
             },
             {
                 "Amount":
                     {
                         "currency_code": "INR",
                         "units": 2000,
                         "nanos": 830000000
                     },
                 "Date":
                     {
                         "seconds": 1680096809
                     },
                 "MerchantName": "Repayment",
                 "MerchantLocation": "nt",
                 "TransactionOrigin": "",
                 "Category": "",
                 "TransactionType": "Credit",
                 "PaymentMethod": "Mobile",
                 "RewardCoins": 0
             },
             {
                 "Amount":
                     {
                         "currency_code": "INR",
                         "units": 200,
                         "nanos": 830000000
                     },
                 "Date":
                     {
                         "seconds": 1680096820
                     },
                 "MerchantName": "Others",
                 "MerchantLocation": "nt",
                 "TransactionOrigin": "",
                 "Category": "",
                 "TransactionType": "Credit",
                 "PaymentMethod": "Mobile",
                 "RewardCoins": 0
             },
             {
                 "Amount":
                     {
                         "currency_code": "INR",
                         "units": 1700,
                         "nanos": 830000000
                     },
                 "Date":
                     {
                         "seconds": 1680096830
                     },
                 "MerchantName": "Repayment",
                 "MerchantLocation": "nt",
                 "TransactionOrigin": "",
                 "Category": "",
                 "TransactionType": "Credit",
                 "PaymentMethod": "Mobile",
                 "RewardCoins": 0
             },
             {
                 "Amount":
                     {
                         "currency_code": "INR",
                         "units": 270
                     },
                 "Date":
                     {
                         "seconds": 1680102981
                     },
                 "MerchantName": "",
                 "MerchantLocation": "",
                 "TransactionOrigin": "",
                 "Category": "",
                 "TransactionType": "Credit",
                 "PaymentMethod": "",
                 "RewardCoins": 0
             },
             {
                 "Amount":
                     {
                         "currency_code": "INR",
                         "units": 1255
                     },
                 "Date":
                     {
                         "seconds": 1680103081
                     },
                 "MerchantName": "",
                 "MerchantLocation": "",
                 "TransactionOrigin": "",
                 "Category": "",
                 "TransactionType": "Credit",
                 "PaymentMethod": "",
                 "RewardCoins": 0
             },
             {
                 "Amount":
                     {
                         "currency_code": "INR",
                         "units": 50
                     },
                 "Date":
                     {
                         "seconds": 1680106034
                     },
                 "MerchantName": "Others",
                 "MerchantLocation": "NK",
                 "TransactionOrigin": "",
                 "Category": "",
                 "TransactionType": "Credit",
                 "PaymentMethod": "Mobile",
                 "RewardCoins": 0
             }
         ],
     "RewardsSummary":
         {
             "Title": "2x rewards",
             "MerchantWiseRewardInfo":
                 [
    
                 ],
             "BottomText": "We don't endorse these brands & vice versa. These brand logos are for representation & information purposes only.",
             "RewardCoinsSummary":
                 {
                     "Title": "FI-COINS EARNED",
                     "TotalRewardCoinsEarned": 600,
                     "TotalFiCoinsText": "xyz",
                     "TotalFiCoins": 100
                 }
         },
     "ExtraRewardsInfo":
         [
             {
                 "Text": "Extra Rewards",
                 "RewardCoinsEarned": 12000,
                 "RewardTypeLogo": "https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/2x_statement_extra_rewards.png"
             },
             {
                 "Text": "Extra Rewards",
                 "RewardCoinsEarned": 36000,
                 "RewardTypeLogo": "https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/5x_statement_extra_rewards.png"
             }
         ],
     "TipsAndInformationSection":
         {
             "IconUrl": "https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/Bulb_4x.png",
             "Title": "Pro tip",
             "InformationText":
                 [
                     {
                         "Title": "Want to improve your credit score? Pay your bills before the due date.To reduce late payment charges, pay more than the minimum due.",
                         "TextWithLinkAndValues": null
                     },
                     {
                         "Title": "Paying only the minimum monthly due would stretch repayment over many months/years. And each time, your interest payments get compounded & pile on your outstanding balance. See a sample calculation for interest applied when only minimum amount due is paid, in the MITC.",
                         "TextWithLinkAndValues":
                             [
                                 {
                                     "Title": "MITC",
                                     "Value": "MITC",
                                     "Link": "https://fi.money/credit-card/important-T&Cs",
                                     "Type": ""
                                 }
                             ]
                     }
                 ]
         },
     "FeeBreakDown":
         {
             "Title": "FEE BREAKDOWN",
             "FeeBreakDownComponents":
                 [
                     {
                         "FeeType": "Interest charges",
                         "Amount": { "currency_code": "INR", "units": 100 },
                         "FeeAmountType": "PLUS"
                     },
                     {
                         "FeeType": "Cash withdrawal fees ",
                         "Amount": { "currency_code": "INR", "units": 500 },
                         "FeeAmountType": "MINUS"
                     },
                     {
                         "FeeType": "Interest charges",
                         "Amount": { "currency_code": "INR", "units": 100 },
                         "FeeAmountType": "PLUS"
                     }
                 ]
         },
     "ContactUsDetails":
         {
             "Title": "IMPORTANT INFORMATION",
             "CustomerCareDetails":
                 [
                     {
                         "Title": "In case your credit card is lost or stolen, freeze or block your card immediately from the Fi app or contact Fi's customer care.",
                         "CustomerCareOrganisation": "Fi app",
                         "Email": "",
                         "Phone": "",
                         "Recommended": false,
                         "WebText": "",
                         "WebLinkText": "",
                         "WebLink": "",
                         "TextWithLinkAndValues": null
                     },
                     {
                         "Title": "For further assistance on this or any other matters related to your credit card, reach out to Fi's Customer Care:",
                         "CustomerCareOrganisation": "Fi's Customer Care:",
                         "Email": "",
                         "Phone": "",
                         "Recommended": false,
                         "WebText": "",
                         "WebLinkText": "",
                         "WebLink": "",
                         "TextWithLinkAndValues":
                             [
                                 {
                                     "Title": "Email",
                                     "Value": "help@fi.care",
                                     "Link": "www.google.com",
                                     "Type": "mailto"
                                 },
                                 {
                                     "Title": "Phone",
                                     "Value": "08047485490",
                                     "Link": "",
                                     "Type": "tel"
                                 }
                             ]
                     },
                     {
                         "Title": "For credit card grievances that need to be addressed by Federal Bank's Principal Nodal officer for Grievance Redressal: ",
                         "CustomerCareOrganisation": "Federal Bank's Principal Nodal officer",
                         "Email": "support@federalbank.co.in",
                         "Phone": "",
                         "Recommended": false,
                         "WebText": "",
                         "WebLinkText": "",
                         "WebLink": "",
                         "TextWithLinkAndValues":
                             [
                                 {
                                     "Title": "Name",
                                     "Value": "Ms Shalini Warrier, Executive Director",
                                     "Link": "",
                                     "Type": ""
                                 },
                                 {
                                     "Title": "Email",
                                     "Value": "support@federalbank.co.in",
                                     "Link": "",
                                     "Type": ""
                                 }
                             ]
                     }
                 ],
             "PostalAddress": "Postal address: CEO's Secretariat, Federal Bank Limited, Federal Towers, Bank Junction, Aluva, Kerala, 6831010.",
             "TnCSection":
                 {
                     "Text": "To know more, read Federal Bank's Most Important Terms & Conditions, Key Fact Statement and Terms & Conditions.",
                     "TextWithLinkAndValues":
                         [
                             {
                                 "Title": "Most Important Terms & Conditions",
                                 "Value": "Most Important Terms & Conditions",
                                 "Link": "https://fi.money/credit-card/T&Cs",
                                 "Type": ""
                             },
                             {
                                 "Title": "Key Fact Statement",
                                 "Value": "Key Fact Statement",
                                 "Link": "https://fi.money/credit-card/key-fact-statement",
                                 "Type": ""
                             },
                             {
                                 "Title": "Terms & Conditions.",
                                 "Value": "Terms & Conditions.",
                                 "Link": "https://fi.money/credit-card/T&Cs",
                                 "Type": ""
                             }
                         ]
                 },
             "IssuerDetails":
                 {
                     "Title": "ISSUER DETAILS",
                     "LeftTextWithLinkAndValues":
                         [
                             {
                                 "Title": "The federal Bank Limited",
                                 "Value": "",
                                 "Link": ""
                             },
                             {
                                 "Title": "GSTN",
                                 "Value": "32AABCT0020H3Z3",
                                 "Link": ""
                             },
                             {
                                 "Title": "Parackal Towers, Thottakkatukara, Aluva,\n\t\tErnakulam, Kerala - 683101",
                                 "Value": "",
                                 "Link": ""
                             }
                         ],
                     "RightTextWithLinkAndValues":
                         [
                             {
                                 "Title": "Place Of Service:",
                                 "Value": "Kerala",
                                 "Link": ""
                             },
                             {
                                 "Title": "State Code:",
                                 "Value": "32",
                                 "Link": ""
                             },
                             {
                                 "Title": "HSN",
                                 "Value": "- 997114 - Financial and Related Services",
                                 "Link": ""
                             }
                         ]
                 }
         },
     "EmiSummary":
         {
             "NoOfActiveEmi": 0,
             "DueAmount": null,
             "EmiDetails":
                 []
         }
    })
    
    var json = JSON.parse(statement);

    var json = JSON.parse(JSON.stringify({
        "UserDetails":
            {
                "Name": "Sko",
                "PhoneNumber": 9080859568,
                "Email": "skojha@gmail.com",
                "Address": "Flat Number 06, 16th Floor, B Block, Random Building, Random Sector, Random Rd, Thiruvananthapuram, Kerela, India, TamilNadu, India,andom Sector, Random Rd, Thiruvananthapuram, Kerela, India, TamilNadu, India, andom Sector, Random Rd, Thiruvananthapuram, Kerela, India, TamilNadu, India, andom Sector, Random Rd, Thiruvananthapuram, Kerela, India, TamilNadu, India",
                "MaskedCreditCardNumber": "XXXX2233"
            },
        "FromDate":
            {
                "year": 22,
                "month": 11,
                "day": 5
            },
        "ToDate":
            {
                "year": 22,
                "month": 12,
                "day": 4
            },
        "Summary":
            {
                "StatementDate":
                    {
                        "year": 22,
                        "month": 12,
                        "day": 5
                    },
                "PaymentDueDate":
                    {
                        "year": 22,
                        "month": 12,
                        "day": 4
                    },
                "AvailableLimit":
                    {
                        "currency_code": "INR",
                        "units": 120
                    },
                "TotalAmountDue":
                    {
                        "currency_code": "INR",
                        "units": 120
                    },
                "MinAmountDue":
                    {
                        "currency_code": "INR",
                        "units": 120
                    },
                "OpeningBalance":
                    {
                        "currency_code": "INR",
                        "units": 120
                    },
                "Spends":
                    {
                        "currency_code": "INR",
                        "units": 120
                    },
                "Interest":
                    {
                        "currency_code": "INR",
                        "units": 120
                    },
                "Fees":
                    {
                        "currency_code": "INR",
                        "units": 120
                    },
                "RepaymentsAndRefunds":
                    {
                        "currency_code": "INR",
                        "units": 120
                    },
                "SpendsConvertedToEmi":
                    {
                        "currency_code": "INR",
                        "units": 120
                    }
            },
        "TransactionDetails":
            [
                {
                    "Amount":
                        {
                            "currency_code": "INR",
                            "units": 120
                        },
                    "Date":
                        {
                            "seconds": 1684505361
                        },
                    "MerchantName": "AMAZON",
                    "MerchantLocation": "INDIA",
                    "TransactionOrigin": "",
                    "Category": "",
                    "TransactionType": "Credit",
                    "PaymentMethod": "Web",
                    "RewardCoins": 1200
                },
                {
                    "Amount":
                        {
                            "currency_code": "INR",
                            "units": 120
                        },
                    "Date":
                        {
                            "seconds": 1683562036
                        },
                    "MerchantName": "AMAZON",
                    "MerchantLocation": "INDIA",
                    "TransactionOrigin": "",
                    "Category": "",
                    "TransactionType": "Credit",
                    "PaymentMethod": "Web",
                    "RewardCoins": 1200
                },
                {
                    "Amount":
                        {
                            "currency_code": "INR",
                            "units": 120
                        },
                    "Date":
                        {
                            "seconds": 1683562036
                        },
                    "MerchantName": "AMAZON",
                    "MerchantLocation": "INDIA",
                    "TransactionOrigin": "",
                    "Category": "",
                    "TransactionType": "Credit",
                    "PaymentMethod": "Web",
                    "RewardCoins": 1200
                },
                {
                    "Amount":
                        {
                            "currency_code": "INR",
                            "units": 120
                        },
                    "Date":
                        {
                            "seconds": 1683562036
                        },
                    "MerchantName": "AMAZON",
                    "MerchantLocation": "INDIA",
                    "TransactionOrigin": "",
                    "Category": "",
                    "TransactionType": "Credit",
                    "PaymentMethod": "Web",
                    "RewardCoins": 1200
                },
                {
                    "Amount":
                        {
                            "currency_code": "INR",
                            "units": 120
                        },
                    "Date":
                        {
                            "seconds": 1683562036
                        },
                    "MerchantName": "AMAZON",
                    "MerchantLocation": "INDIA",
                    "TransactionOrigin": "",
                    "Category": "",
                    "TransactionType": "Credit",
                    "PaymentMethod": "Web",
                    "RewardCoins": 1200
                },
                {
                    "Amount":
                        {
                            "currency_code": "INR",
                            "units": 120
                        },
                    "Date":
                        {
                            "seconds": 1683562036
                        },
                    "MerchantName": "AMAZON",
                    "MerchantLocation": "INDIA",
                    "TransactionOrigin": "",
                    "Category": "",
                    "TransactionType": "Credit",
                    "PaymentMethod": "Web",
                    "RewardCoins": 1200
                },
                {
                    "Amount":
                        {
                            "currency_code": "INR",
                            "units": 120
                        },
                    "Date":
                        {
                            "seconds": 1683562036
                        },
                    "MerchantName": "AMAZON",
                    "MerchantLocation": "INDIA",
                    "TransactionOrigin": "",
                    "Category": "",
                    "TransactionType": "Credit",
                    "PaymentMethod": "Web",
                    "RewardCoins": 1200
                },
                {
                    "Amount":
                        {
                            "currency_code": "INR",
                            "units": 120
                        },
                    "Date":
                        {
                            "seconds": 1683562036
                        },
                    "MerchantName": "AMAZON",
                    "MerchantLocation": "INDIA",
                    "TransactionOrigin": "",
                    "Category": "",
                    "TransactionType": "Credit",
                    "PaymentMethod": "Web",
                    "RewardCoins": 1200
                },
                {
                    "Amount":
                        {
                            "currency_code": "INR",
                            "units": 120
                        },
                    "Date":
                        {
                            "seconds": 1683562036
                        },
                    "MerchantName": "AMAZON",
                    "MerchantLocation": "INDIA",
                    "TransactionOrigin": "",
                    "Category": "",
                    "TransactionType": "Credit",
                    "PaymentMethod": "Web",
                    "RewardCoins": 1200
                },
                {
                    "Amount":
                        {
                            "currency_code": "INR",
                            "units": 120
                        },
                    "Date":
                        {
                            "seconds": 1683562036
                        },
                    "MerchantName": "AMAZON",
                    "MerchantLocation": "INDIA",
                    "TransactionOrigin": "",
                    "Category": "",
                    "TransactionType": "Credit",
                    "PaymentMethod": "Web",
                    "RewardCoins": 1200
                },
                {
                    "Amount":
                        {
                            "currency_code": "INR",
                            "units": 120
                        },
                    "Date":
                        {
                            "seconds": 1683562036
                        },
                    "MerchantName": "AMAZON",
                    "MerchantLocation": "INDIA",
                    "TransactionOrigin": "",
                    "Category": "",
                    "TransactionType": "Credit",
                    "PaymentMethod": "Web",
                    "RewardCoins": 1200
                },
                {
                    "Amount":
                        {
                            "currency_code": "INR",
                            "units": 120
                        },
                    "Date":
                        {
                            "seconds": 1683562036
                        },
                    "MerchantName": "AMAZON",
                    "MerchantLocation": "INDIA",
                    "TransactionOrigin": "",
                    "Category": "",
                    "TransactionType": "Credit",
                    "PaymentMethod": "Web",
                    "RewardCoins": 1200
                },
                {
                    "Amount":
                        {
                            "currency_code": "INR",
                            "units": 120
                        },
                    "Date":
                        {
                            "seconds": 1683562036
                        },
                    "MerchantName": "AMAZON",
                    "MerchantLocation": "INDIA",
                    "TransactionOrigin": "",
                    "Category": "",
                    "TransactionType": "Credit",
                    "PaymentMethod": "Web",
                    "RewardCoins": 1200
                },
                {
                    "Amount":
                        {
                            "currency_code": "INR",
                            "units": 120
                        },
                    "Date":
                        {
                            "seconds": 1683562036
                        },
                    "MerchantName": "AMAZON",
                    "MerchantLocation": "INDIA",
                    "TransactionOrigin": "",
                    "Category": "",
                    "TransactionType": "Credit",
                    "PaymentMethod": "Web",
                    "RewardCoins": 1200
                },
                {
                    "Amount":
                        {
                            "currency_code": "INR",
                            "units": 120
                        },
                    "Date":
                        {
                            "seconds": 1683562036
                        },
                    "MerchantName": "AMAZON",
                    "MerchantLocation": "INDIA",
                    "TransactionOrigin": "",
                    "Category": "",
                    "TransactionType": "Credit",
                    "PaymentMethod": "Web",
                    "RewardCoins": 1200
                },
                {
                    "Amount":
                        {
                            "currency_code": "INR",
                            "units": 120
                        },
                    "Date":
                        {
                            "seconds": 1683562036
                        },
                    "MerchantName": "AMAZON",
                    "MerchantLocation": "INDIA",
                    "TransactionOrigin": "",
                    "Category": "",
                    "TransactionType": "Credit",
                    "PaymentMethod": "Web",
                    "RewardCoins": 1200
                }
    
            ],
        "RewardsSummary":
            {
                "Title": "2X rewards on your top merchants",
                "MerchantWiseRewardInfo":
                    [
                        {
                            "MerchantIconUrl": "https://epifi-icons.s3.ap-south-1.amazonaws.com/merchant_updated/zomato.png",
                            "MerchantDisplayName": "UBER",
                            "TotalAmountSpent": null,
                            "TotalRewardCoinsEarned": 120
                        },
                        {
                            "MerchantIconUrl": "https://epifi-icons.s3.ap-south-1.amazonaws.com/merchant_updated/zomato.png",
                            "MerchantDisplayName": "ZOMATO",
                            "TotalAmountSpent": null,
                            "TotalRewardCoinsEarned": 120
                        },
                        {
                            "MerchantIconUrl": "https://epifi-icons.s3.ap-south-1.amazonaws.com/merchant_updated/zomato.png",
                            "MerchantDisplayName": "SWIGGY",
                            "TotalAmountSpent": null,
                            "TotalRewardCoinsEarned": 120
                        }
                    ],
                "BottomText": "We don't endorse these brands & vice versa. These brand logos are for representation & information purposes only.",
                "RewardCoinsSummary":
                    {
                        "Title": "FI-COINS EARNED",
                        "TotalRewardCoinsEarned": 1200,
                        "TotalFiCoinsText": "",
                        "TotalFiCoins": 0
                    }
            },
        "ExtraRewardsInfo":
            [
                {
                    "Text": "Extra rewards",
                    "RewardCoinsEarned": 1000,
                    "RewardTypeLogo": "https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/2x_rewards_info_statement_icon_4x.png"
                },
                {
                    "Text": "Extra rewards",
                    "RewardCoinsEarned": 1000,
                    "RewardTypeLogo": "https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/2x_rewards_info_statement_icon_4x.png"
                }
            ],
        "TipsAndInformationSection":
            {
                "IconUrl": "https://epifi-icons.s3.ap-south-1.amazonaws.com/credit_card_images/Bulb_4x.png",
                "Title": "Pro tip",
                "InformationText":
                    [
                        {
                            "Title": "Want to improve your credit score? Pay your bills before the due date.To reduce late payment charges, pay more than the minimum due.",
                            "TextWithLinkAndValues": null
                        },
                        {
                            "Title": "Paying only the minimum monthly due would stretch repayment over many months/years. And each time, your interest payments get compounded & pile on your outstanding balance. See a sample calculation for interest applied when only minimum amount due is paid, in the MITC.",
                            "TextWithLinkAndValues":
                                [
                                    {
                                        "Title": "MITC",
                                        "Value": "MITC",
                                        "Link": "https://www.google.com",
                                        "Type": ""
                                    }
                                ]
                        }
                    ]
            },
        "FeeBreakDown":
            {
                "Title": "Fees, Interest and Charges Breakdown",
                "FeeBreakDownComponents":
                    [
                        {
                            "FeeType": "CARD REG FEES",
                            "Amount":
                                {
                                    "currency_code": "INR",
                                    "units": 2000
                                },
                            "FeeAmountType": "PLUS"
                        },
                        {
                            "FeeType": "CARD REG FEES SERVICE TAX",
                            "Amount":
                                {
                                    "currency_code": "INR",
                                    "units": 360
                                },
                            "FeeAmountType": "PLUS"
                        },
                        {
                            "FeeType": "STORIFYME.COM 4917698799460DE - FX Fees @ 1%",
                            "Amount":
                                {
                                    "currency_code": "INR",
                                    "units": 82
                                },
                            "FeeAmountType": "PLUS"
                        },
                        {
                            "FeeType": "DRI*Maxon Computer maxon.net IE - FX Fees @ ‎1%",
                            "Amount":
                                {
                                    "currency_code": "INR",
                                    "units": 90
                                },
                            "FeeAmountType": "PLUS"
                        },
                        {
                            "FeeType": "DRI*Maxon Computer maxon.net IE - FX Fees Service Tax @ ‎18.0%",
                            "Amount":
                                {
                                    "currency_code": "INR",
                                    "units": 16
                                },
                            "FeeAmountType": "PLUS"
                        },
                        {
                            "FeeType": "APOLLO.IO +14156912009 US - FX Fees @ 1%",
                            "Amount":
                                {
                                    "currency_code": "INR",
                                    "units": 81
                                },
                            "FeeAmountType": "PLUS"
                        },
                        {
                            "FeeType": "APOLLO.IO +14156912009 US - FX Fees Service Tax @ 18.0%",
                            "Amount":
                                {
                                    "currency_code": "INR",
                                    "units": 14
                                },
                            "FeeAmountType": "PLUS"
                        },
                        {
                            "FeeType": "Epidemic Sound AB Stockholm SE - FX Fees @ 1%",
                            "Amount":
                                {
                                    "currency_code": "INR",
                                    "units": 20
                                },
                            "FeeAmountType": "PLUS"
                        },
                        {
                            "FeeType": "Epidemic Sound AB Stockholm SE - FX Fees Service Tax @ 18.0%",
                            "Amount":
                                {
                                    "currency_code": "INR",
                                    "units": 3
                                },
                            "FeeAmountType": "PLUS"
                        }
                    ]
            },
        "ContactUsDetails":
            {
                "Title": "IMPORTANT INFORMATION",
                "CustomerCareDetails":
                    [
                        {
                            "Title": "Please note that the Fi coins will be credited in 10 days post bill generation. Further, in case of any transaction cancellations / reversals/ refunds, the associated Fi coins (1x/2x/5x) which were awarded would be deducted from your Fi coins balance.",
                        },
                        {
                            "Title": "This kind of adjustment can be done post the bill generation, in case the transaction cancellations/ refunds/ reversals are received post bill generation date. In this case, the projected Fi-coins shown in the bill would not match the Fi-coins awarded to you in app.",
                        },
                        {
                            "Title": "Top 3 brands in the 2X or 5X leaderboard once fixed in a statement, will not be changed post statement generation, despite reversals or cancellations in constituting transactions.",
                        },
                        {
                            "Title": "For further assistance on this or any other matters related to your credit card, reach out to Fi's Customer Care:",
                            "CustomerCareOrganisation": "Fi's Customer Care:",
                            "Email": "",
                            "Phone": "",
                            "Recommended": false,
                            "WebText": "",
                            "WebLinkText": "",
                            "WebLink": "",
                            "TextWithLinkAndValues":
                                [
                                    {
                                        "Title": "Email",
                                        "Value": "help@fi.care",
                                        "Link": "",
                                        "Type": ""
                                    },
                                    {
                                        "Title": "Phone",
                                        "Value": "08047485490",
                                        "Link": "",
                                        "Type": ""
                                    }
                                ]
                        },
                        {
                            "Title": "For credit card grievances that need to be addressed by Federal Bank’s Principal Nodal officer for Grievance Redressal: ",
                            "CustomerCareOrganisation": "Federal Bank’s Principal Nodal officer",
                            "Email": "",
                            "Phone": "",
                            "Recommended": false,
                            "WebText": "",
                            "WebLinkText": "",
                            "WebLink": "",
                            "TextWithLinkAndValues":
                                [
                                    {
                                        "Title": "Name",
                                        "Value": "Ms Shalini Warrier, Executive Director",
                                        "Link": "",
                                        "Type": ""
                                    },
                                    {
                                        "Title": "Email",
                                        "Value": "support@federalbank.co.in",
                                        "Link": "",
                                        "Type": ""
                                    }
                                ]
                        }
                    ],
                "PostalAddress": "Postal address: CEO’s Secretariat, Federal Bank Limited, Federal Towers, Bank Junction, Aluva, Kerala, 6831010.",
                "TnCSection":
                    {
                        "Text": "To know more, read Federal Bank’s Most Important Terms & Conditions, Key Fact Statement and Terms & Conditions.",
                        "TextWithLinkAndValues":
                            [
                                {
                                    "Title": "Most Important Terms & Conditions",
                                    "Value": "Most Important Terms & Conditions",
                                    "Link": "https://www.google.com",
                                    "Type": ""
                                },
                                {
                                    "Title": "Key Fact Statement",
                                    "Value": "Key Fact Statement",
                                    "Link": "https://www.google.com",
                                    "Type": ""
                                },
                                {
                                    "Title": "Terms & Conditions.",
                                    "Value": "Terms & Conditions.",
                                    "Link": "https://www.google.com",
                                    "Type": ""
                                }
                            ]
                    },
                "IssuerDetails":
                    {
                        "Title": "ISSUER DETAILS",
                        "LeftTextWithLinkAndValues": [
                            {
                                "Title": "The federal Bank Limited",
                                "Value": "",
                                "Link": ""
                            },
                            {
                                "Title": "GSTN",
                                "Value": "32AABCT0020H3Z3",
                                "Link": ""
                            },
                            {
                                "Title": "Parackal Towers, Thottakkatukara, Aluva,\n\t\tErnakulam, Kerala - 683101",
                                "Value": "",
                                "Link": ""
                            }],
                        "RightTextWithLinkAndValues":
                            [
                                {
                                    "Title": "Place Of Service:",
                                    "Value": "Kerala",
                                    "Link": ""
                                },
                                {
                                    "Title": "State Code:",
                                    "Value": "32",
                                    "Link": ""
                                },
                                {
                                    "Title": "HSN",
                                    "Value": "- 997114 - Financial and Related Services",
                                    "Link": ""
                                }
                            ]
                    }
            },
        "EmiSummary":
            {
                "NoOfActiveEmi": 0,
                "DueAmount": null,
                "EmiDetails": null
            }
    }));
    console.log(statement);

    var json = JSON.parse(statement);


    if (isEmptyObject(json)) {
        // print undefined as BE looks for this log and returns error to caller
        console.log(undefined);
        return;
    }

    var fromDateMonth = getMonthStr(json.FromDate.month);
    var fromDateMonthShortStr = getMonthStr(json.FromDate.month, true);
    var toDateMonth = getMonthStr(json.ToDate.month);
    var toDateMonthShortStr = getMonthStr(json.ToDate.month, true);

    json.FromDate.month = fromDateMonth;
    json.ToDate.month = toDateMonth;

    json.FromDate.monthShortStr = fromDateMonthShortStr;
    json.ToDate.monthShortStr = toDateMonthShortStr;

    var txnSummaryData = {};
    var rewardsSummaryData = {};
    var txnSummaryJSON = json.Summary;
    var rewardsSummaryJSON = json.RewardsSummary;
    var tipsAndInformationData = json.TipsAndInformationSection;
    var extraRewardsInfo = json.ExtraRewardsInfo;
    var feeBreakDown = json.FeeBreakDown;
    var customerCareDetails = json.ContactUsDetails.CustomerCareDetails;
    var hasTxnSummaryData = true;
    var hasRewardsSummaryData = true;
    var showProTipInReward = false;
    var ContactUsDetails = json.ContactUsDetails;
    var tncSectionDetails = json.ContactUsDetails.TnCSection;
    var hasFeeBreakDownComponents = feeBreakDown.FeeBreakDownComponents.length > 0 || false
    var EmiSummary = json.EmiSummary;

    extraRewardsInfo.forEach(function (item) {
        item.RewardCoinsEarned = getFormattedAmount({ "units": item.RewardCoinsEarned, "nanos": 0 })
    })


    if (Object.keys(txnSummaryJSON).length) {
        var statementDate = txnSummaryJSON.StatementDate;
        var paymentDueDate = txnSummaryJSON.PaymentDueDate;
        var availableLimit = txnSummaryJSON.AvailableLimit;
        var openingBalance = txnSummaryJSON.OpeningBalance;
        var spends = txnSummaryJSON.Spends;
        var interest = txnSummaryJSON.Interest;
        var fees = txnSummaryJSON.Fees;
        var repaymentsAndRefunds = txnSummaryJSON.RepaymentsAndRefunds;
        var spendsConvertedToEmi = txnSummaryJSON.SpendsConvertedToEmi;
        var totalAmountDue = txnSummaryJSON.TotalAmountDue;
        var minAmountDue = txnSummaryJSON.MinAmountDue;

        if (statementDate) {
            var statementMonth = getMonthStr(statementDate.month);
            txnSummaryData.StatementDate = statementDate.day + ' ' + statementMonth + ' ' + statementDate.year
        }

        if (paymentDueDate) {
            var paymentDueMonth = getMonthStr(paymentDueDate.month);
            txnSummaryData.PaymentDueDate = paymentDueDate.day + ' ' + paymentDueMonth + ' ' + paymentDueDate.year
        }

        if (availableLimit) {
            txnSummaryData.AvailableLimit = {
                Amount: getFormattedAmount(availableLimit)
            };
        }

        if (openingBalance) {
            txnSummaryData.OpeningBalance = {
                Amount: getFormattedAmount(openingBalance)
            };
        }

        if (spends) {
            txnSummaryData.Spends = {
                Amount: getFormattedAmount(spends)
            };
        }

        if (interest) {
            txnSummaryData.Interest = {
                Amount: getFormattedAmount(interest)
            };
        }

        if (fees) {
            txnSummaryData.Fees = {
                Amount: getFormattedAmount(fees)
            };
        }

        if (repaymentsAndRefunds) {
            txnSummaryData.RepaymentsAndRefunds = {
                Amount: getFormattedAmount(repaymentsAndRefunds)
            };
        }

        if (spendsConvertedToEmi) {
            txnSummaryData.SpendsConvertedToEmi = {
                Amount: getFormattedAmount(spendsConvertedToEmi)
            };
        }

        if (totalAmountDue) {
            txnSummaryData.TotalAmountDue = {
                Amount: getFormattedAmount(totalAmountDue)
            };
        }

        if (minAmountDue) {
            txnSummaryData.MinAmountDue = {
                Amount: getFormattedAmount(minAmountDue)
            };
        }
    } else {
        hasTxnSummaryData = false;
    }

    rewardsSummaryData.title = rewardsSummaryJSON.Title;
    rewardsSummaryData.bottomText = rewardsSummaryJSON.BottomText;
    rewardsSummaryData.rewardCoinsSummary = rewardsSummaryJSON.RewardCoinsSummary
    rewardsSummaryData.rewardCoinsSummary.TotalRewardCoinsEarned = getFormattedAmount({ "units": rewardsSummaryData.rewardCoinsSummary.TotalRewardCoinsEarned })

    if (rewardsSummaryJSON.MerchantWiseRewardInfo.length > 0) {

        var merchantWiseRewardInfo = [];

        rewardsSummaryJSON.MerchantWiseRewardInfo.forEach(function (item) {
            var modifiedData = {};

            modifiedData.title = item.MerchantDisplayName;
            modifiedData.merchantIconUrl = item.MerchantIconUrl;
            modifiedData.totalRewardCoinsEarned = getFormattedAmount({ "units": item.TotalRewardCoinsEarned })
            modifiedData.amount = getFormattedAmount(item.TotalAmountSpent);
            merchantWiseRewardInfo.push(modifiedData);
        })

        rewardsSummaryData.merchantWiseRewardInfo = merchantWiseRewardInfo;
    } else {
        hasRewardsSummaryData = false;
        showProTipInReward = true;
    }

    feeBreakDown.FeeBreakDownComponents.forEach((function (item) {
        if (item.FeeAmountType === 'PLUS') {
            item.isFeeAmountTypePlus = true;
        } else {
            item.isFeeAmountTypeMinus = true;
        }
    }));

    var txnData = {};

    // format txn details according to the rendered html
    json.TransactionDetails && json.TransactionDetails.forEach(function (item) {
        var modifiedItem = {};

        modifiedItem.Amount = getFormattedAmount(item.Amount);
        item.RewardCoins = getFormattedAmount({ "units": item.RewardCoins })

        modifiedItem.TxnDescription = function () {
            var str = "";

            if (item.MerchantLocation) {
                str += item.MerchantLocation;
            }

            if (item.PaymentMethod) {
                if (item.MerchantLocation) {
                    str += " • " + item.PaymentMethod;
                } else {
                    str += item.PaymentMethod;
                }
            }

            if (item.Category) {
                if (item.MerchantLocation) {
                    str += " • " + item.Category;
                } else if (item.PaymentMethod) {
                    str += " • " + item.Category;
                } else {
                    str += item.Category;
                }
            }

            return str;
        };

        if (item.TransactionType) {
            var txnType = item.TransactionType.toLowerCase();

            modifiedItem.IsDebit = txnType === "debit";
            modifiedItem.IsCredit = txnType === "credit";
            modifiedItem.IsAutomated = txnType === "automated";
        } else if (item.AmountBadge) {
            var amountBadge = item.AmountBadge.toLowerCase();

            modifiedItem.IsDebit = amountBadge === "debit";
            modifiedItem.IsCredit = amountBadge === "credit";
            modifiedItem.IsAutomated = amountBadge === "automated";
        }

        modifiedItem.MerchantName = item.MerchantName;
        modifiedItem.RewardCoins = item.RewardCoins;
        modifiedItem.hasRewardCoins = !!parseInt(item.RewardCoins.units);

        var tsSeconds = item.Date.seconds + 19800; // offset 5.5 * 60 * 60
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
        txnData[dateAndMonth].timeInMs = tsSeconds * 1000;
    });

    // debugger;
    json.TxnData = sortTxnData(txnData);

    // prepare the page txn data to make it render on the html
    var pageData = [{ page: 1, data: [{ name: "", data: [] }], hasValidData: true }];
    var currIdx = 0;
    var innerIdx = -1;
    var height = hasTxnSummaryData ? 90 : 684; // total height - 1120, header - 208, footer - 160, txn summary - 662, left content = 684 (1120 - 208 - 160 - 662)
    var currHeight = 0;

    json.TxnData.forEach(function (item) {
        innerIdx += 1;
        currHeight += 40 + 42;

        if (currHeight > height) {
            currIdx += 1;
            height = 812; // total height - 1120, header - 80, footer - 160, content top padding & header - 32 + 36, left content = 812 (1120 - 80 - 160 - 32 - 36)
            innerIdx = 0;
            currHeight = 40 + 42;
        }

        if (!pageData[currIdx]) {
            pageData[currIdx] = { page: currIdx + 1, data: [{ name: "", data: [] }] };
            pageData[currIdx].hasValidData = true;
        }

        pageData[currIdx].data[innerIdx] = {
            name: item.name,
            data: [item.data[0]]
        };

        item.data.forEach(function (idata, sidx) {
            if (sidx !== 0) {
                currHeight += 54;

                if (currHeight > height) {
                    currIdx += 1;
                    height = 812;
                    innerIdx = 0;
                    currHeight = 40 + 42;
                }

                if (!pageData[currIdx]) {
                    pageData[currIdx] = { page: currIdx + 1, data: [{ name: item.name, data: [] }] };
                    pageData[currIdx].hasValidData = true;
                }

                pageData[currIdx].data[innerIdx].data.push(idata);
            }
        })
    });

    ///// Logic to start transaction data from page 2nd ////

    // Removing last data from the page 1st transaction
    var firstPageTransaction = pageData[0].data.pop();

    // Adding empty object at the place from where we remove the transaction data
    pageData[0].data.push({ name: '', data: [{}] });

    /**
     * Checking if date in removeData(firstPageTransaction) transaction is same in other page transaction date
     */
    if (pageData.length === 1) {
        pageData.push({ page: 2, data: [firstPageTransaction], hasValidData: true });
    } else if (pageData.length > 1) {
        if (firstPageTransaction.name === pageData[1].data[0].name) {
            pageData[1].data[0].data.unshift(firstPageTransaction.data[0]);
        } else {
            pageData[1].data.unshift(firstPageTransaction);

        }
    }
    ///// Logic End ////

    // need to create new page if data is greater than 9
    var len = pageData.length;
    var rendered = "";
    var extrapage = "";
    var lastPageData = pageData[pageData.length - 1];

    // if (getTransactionsInPage(lastPageData) > 9) {
    //           extractRemainingTransactionsInPage(pageData, lastPageData, 9);
    //           len = pageData.length;
    // }

    // Create new page for EMI summary if it exists
    var hasEmiSummary = false;
    var emiSummaryDetails =EmiSummary.EmiDetails;

    if (emiSummaryDetails && emiSummaryDetails.length > 0) {
        hasEmiSummary = true;
        var newObj = {};
        len += 1;
        newObj.page = len;
        // even if there is no txn for the current page, do not show the no txn UI
        newObj.showNoTxnUi = false;
        newObj.data = [{ name: '', data: [] }];
        pageData.push(newObj);
    }

    var renderHeader, contentData;

    pageData.forEach(function (item, idx) {
        var headerTemplate;
        var hasTxns = !!item.data[0].data.length;
        var hasValidData = item.hasValidData;
        var hasPageLengthOne = item.page === 1;

        var showNoTxnUi = true;

        if (item.showNoTxnUi !== undefined) showNoTxnUi = item.showNoTxnUi;

        contentData = {
            TxnSummaryData: txnSummaryData,
            HasTxnSummaryData: hasTxnSummaryData && idx === 0 && hasTxns,
            TxnData: item.data,
            HasTxns: hasTxns,
            showNoTxnUi: showNoTxnUi,
            FromDate: json.FromDate,
            ToDate: json.ToDate,
            RenderRewardsData: item.page === 1,
            RewardsSummaryData: rewardsSummaryData,
            hasRewardsSummaryData: hasRewardsSummaryData,
            TipsAndInformationData: tipsAndInformationData,
            ExtraRewardsInfo: extraRewardsInfo,
            FeeBreakDown: feeBreakDown,
            CustomerCareDetails: customerCareDetails,
            pageLength: item.page === pageData.length,
            hasPageLengthOne: hasPageLengthOne,
            ContactUsDetails: ContactUsDetails,
            TncSection: getTncText(tncSectionDetails),
            showProTipInReward: showProTipInReward,
            EmiSummary: EmiSummary,
            hasEmiSummary: hasEmiSummary,
            hasFeeBreakDownComponents: hasFeeBreakDownComponents,
            firstPagefooter: hasPageLengthOne && showProTipInReward
        };

        if (idx === 0) {
            headerTemplate = document.getElementById("primary-header-template").innerHTML;
            contentData.Class = hasTxnSummaryData ? "ccr" : "ccr ccr--v2";
        } else {
            headerTemplate = document.getElementById("secondary-header-template").innerHTML;
            contentData.Class = "ccr ccr--v1";
        }

        var contentTemplate = document.getElementById("content-template").innerHTML;
        var footerTemplate = document.getElementById("footer-template").innerHTML;
        var extraPageTemplate = document.getElementById("last-page-template").innerHTML;

        renderHeader = Mustache.render(headerTemplate, {
            UserDetails: json.UserDetails,
            FromDate: json.FromDate,
            ToDate: json.ToDate,
            FiBrandLogo: json.FiBrandLogo,
            PartnerBankLogo: json.PartnerBankLogo,
            CreditCardProgramLogo: json.CreditCardProgramLogo,
        });
        var renderFooter = Mustache.render(footerTemplate, { Page: item.page, Length: pageData.length + 1 });
        var renderContent = Mustache.render(contentTemplate, contentData);
        var renderExtraPageContent = Mustache.render(extraPageTemplate, contentData)

        rendered += renderHeader + renderContent + renderFooter;
        extrapage = renderHeader + renderExtraPageContent + Mustache.render(footerTemplate, { Page: pageData.length + 1, Length: pageData.length + 1 });
    });

    document.getElementById("target").innerHTML = rendered;
    document.getElementById("extra-page").innerHTML = extrapage


    var topElement = document.querySelector('#extra-page .issuer-adress');
    var bottomElement = document.querySelector('#extra-page .fcr').children[0];
    var footerTemplate = document.getElementById("footer-template").innerHTML;
    var debugMsgs = [];

    console.log(topElement, bottomElement);

    // debugMsgs.push({
    //     value : JSON.stringify(topElement) + ' class = ' + document.querySelector('#extra-page .issuer-detail').className
    // });
    // debugMsgs.push({
    //     value : JSON.stringify(bottomElement) + ' class = ' + document.querySelector('#extra-page .fcr').children[0].className
    // })
    var bottomsTop = getTopDistance(bottomElement);
    var topTop = getTopDistance(topElement);
    var topsBottom = topTop + topElement.offsetHeight;
    debugMsgs.push({value: JSON.stringify(topElement.getBoundingClientRect())})

    debugMsgs.push({
        value : '1st -> bottom' + topsBottom
    })
    debugMsgs.push({
        value : '2nd -> top' + bottomsTop
    })
    // var heightOfFees = document.querySelector('bg--light-grey.fees-section')
    if (contentData.FeeBreakDown.FeeBreakDownComponents.length > 3) {// if there is overflow

        var extraPageOverflowTemplate = document.getElementById("last-page-template-overflow-one").innerHTML;
        var extraPageOneRenderedContent = Mustache.render(extraPageOverflowTemplate, contentData)
        extrapage = renderHeader + extraPageOneRenderedContent + Mustache.render(footerTemplate, { Page: pageData.length + 1, Length: pageData.length + 1 });

        var extraPageOverflowTemplateTwo = document.getElementById("last-page-template-overflow-two").innerHTML;
        var extraPageTwoRenderedContent = Mustache.render(extraPageOverflowTemplateTwo, contentData);

        extrapage += renderHeader + extraPageTwoRenderedContent + Mustache.render(footerTemplate, { Page: pageData.length + 2, Length: pageData.length + 2, lastPage : true });

        document.getElementById("extra-page").innerHTML = extrapage
    }

    // var debugDiv = document.getElementById('debug-page');
    // var debugTemplate = document.getElementById('debug-page-template').innerHTML;
    // debugDiv.innerHTML = renderHeader + Mustache.render(debugTemplate, {messages : debugMsgs}) + Mustache.render(footerTemplate, { Page: pageData.length + 3, Length: pageData.length + 3 });;


});

var domC = 'DOMContentLoaded'
var onLoad = 'load'

window.addEventListener(domC, init);

function getTransactionsInPage(currentPageData) {
    var count = 0;
    currentPageData.data.forEach( function(dateItem) {
        count += dateItem.data.length;
    });
    return count;
}

function extractRemainingTransactionsInPage(pageData, currentPageData, fromIndex) {
    var count = 0;
    for (var index = 0; index < currentPageData.data.length; index++) {
        var dateItem = currentPageData.data[index];
        var updatedCount = count + dateItem.data.length;
        if (updatedCount >= fromIndex) {
            var slicedData = dateItem.data.splice( -(updatedCount - fromIndex) );
            var newPageData = [{
                name : dateItem.name,
                data : slicedData
            }];
            newPageData = newPageData.concat(currentPageData.data.splice(index + 1));
            pageData.push({
                hasValidData : true,
                page : pageData.length,
                data : newPageData
            });
            break;
        }
        count = updatedCount;
    }
}

function getTopDistance (elem) {

    // Set our distance placeholder
    var distance = 0;

    // Loop up the dom
    do {
        // Increase our distance counter
        distance += elem.offsetTop;

        // Set the element to it's parent
        elem = elem.offsetParent;

    } while (elem);
    distance = distance < 0 ? 0 : distance;
    return distance;
}

function getTncText(tncSectionDetails) {
    var finalText = tncSectionDetails.Text;
    if (tncSectionDetails.TextWithLinkAndValues.length > 0) {
        tncSectionDetails.TextWithLinkAndValues.forEach (function (textWithLinkAndValue) {
            var linkTemplate = "<a class='link' href='url' >urlText</a>"
            linkTemplate = linkTemplate.replace("url",textWithLinkAndValue.Link)
            linkTemplate = linkTemplate.replace("urlText",textWithLinkAndValue.Value)
            finalText = finalText.replace(textWithLinkAndValue.Title,linkTemplate)
        })
    }
    var tncText = "<div class='l6--v7'>" + finalText + "</div>"
    console.log(tncText);
    return tncText;
}
