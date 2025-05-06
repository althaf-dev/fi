/*
* @file constants.js
* This file contains all the constants used for PDF generation from html files.
*/

// eslint-disable-next-line no-unused-vars
const tableHeader = [
    'Gr. No.', 'Purpose Group Name', 'Purpose Code', 'Description',
];

// eslint-disable-next-line no-unused-vars
const tableData = [
    {
        grno: '00',
        children: [
            {
                groupName: 'Capital Account',
                children: [
                    {
                        code: 'S0017',
                        description: `Acquisition of non-produced non-financial assets (Purchase of intangible assets 
                            like patents, copyrights, trademarks etc., land acquired by government, use of natural resources) – Government`,
                    },
                    {
                        code: 'S0019',
                        description: `Acquisition of non-produced non-financial assets (Purchase of intangible
                            assets like patents, copyrights, trademarks etc., use of natural
                            resources) – Non-Government`,
                    },
                    {
                        code: 'S0026',
                        description: `Capital transfers ( Guarantees payments, Investment Grand given by
                            the government/international organisation, exceptionally large Non-life
                            insurance claims) – Government`,
                    },
                    {
                        code: 'S0027',
                        description: `Capital transfers ( Guarantees payments, Investment Grand given by
                            the Non-government, exceptionally large Non-life insurance claims) –
                            Non-Government`,
                    },
                    {
                        code: 'S0099',
                        description: 'Other capital payments not included elsewhere',
                    },

                ],
            },
            {
                groupName: 'Financial Account',
                children: [],
            },
            {
                groupName: 'Foreign Direct Investments',
                children: [
                    {
                        code: 'S0003',
                        description: `Indian Direct investment abroad (in branches & wholly owned
                            subsidiaries) in equity Shares`,
                    },
                    {
                        code: 'S0004',
                        description: `Indian Direct investment abroad (in subsidiaries and associates) in debt
                        instruments`,
                    },
                    {
                        code: 'S0005',
                        description: 'Indian investment abroad – in real estate',
                    },
                    {
                        code: 'S0006',
                        description: `Repatriation of Foreign Direct Investment made by overseas Investors in
                        India – in equity shares`,
                    },
                    {
                        code: 'S0007',
                        description: `Repatriation of Foreign Direct Investment in made by overseas Investors
                        India – in debt instruments`,
                    },
                    {
                        code: 'S0008',
                        description: `Repatriation of Foreign Direct Investment made by overseas Investors in
                        India – in real estate`,
                    },
                ],
            },
            {
                groupName: 'Foreign Portfolio Investments',
                children: [
                    {
                        code: 'S0001',
                        description: 'Indian Portfolio investment abroad – in equity shares',
                    },
                    {
                        code: 'S0002',
                        description: 'Indian Portfolio investment abroad – in debt instruments',
                    },
                    {
                        code: 'S0009',
                        description: 'Repatriation of Foreign Portfolio Investment made by overseas Investors in India – in equity shares',
                    },
                    {
                        code: 'S0010',
                        description: `Repatriation of Foreign Portfolio Investment made by overseas Investors
                        in India – in debt instruments`,
                    },
                ],
            },
            {
                groupName: 'External Commercial Borrowings',
                children: [
                    {
                        code: 'S0011',
                        description: 'Loans extended to Non-Residents',
                    },
                    {
                        code: 'S0012',
                        description: 'Repayment of long & medium term loans with original maturity above one year received from Non-Residents',
                    },
                ],
            },
            {
                groupName: 'Short term Loans',
                children: [
                    {
                        code: 'S0013',
                        description: 'Repayment of short term loans with original maturity up to one year received from Non-Residents',
                    },
                ],
            },
            {
                groupName: 'Banking Capital',
                children: [
                    {
                        code: 'S0014',
                        description: 'Repatriation of Non-Resident Deposits (FCNR(B)/NR(E)RA etc)',
                    },
                    {
                        code: 'S0015',
                        description: 'Repayment of loans & overdrafts taken by ADs on their own account.',
                    },
                    {
                        code: 'S0016',
                        description: 'Sale of a foreign currency against another foreign currency',
                    },
                ],
            },
            {
                groupName: 'Financial Derivatives and Others',
                children: [
                    {
                        code: 'S0020',
                        description: `Payments made on account of margin payments, premium payment and
                        settlement amount etc. under Financial derivative transactions`,
                    },
                    {
                        code: 'S0021',
                        description: 'Payments made on account of sale of share under Employee stock option',
                    },
                    {
                        code: 'S0022',
                        description: 'Investment in Indian Depositories Receipts (IDRs)',
                    },
                    {
                        code: 'S0023',
                        description: 'Opening of foreign currency account abroad with a bank',
                    },
                ],
            },
            {
                groupName: 'External Assistance',
                children: [
                    {
                        code: 'S0024',
                        description: `External Assistance extended by India. e.g. Loans and advances
                        extended by India to Foreign governments under various agreements`,
                    },
                    {
                        code: 'S0025',
                        description: 'Repayments made on account of External Assistance received by India',
                    },
                ],
            },
        ],
    },
    {
        grno: '01',
        children: [
            {
                groupName: 'Imports',
                children: [
                    {
                        code: 'S0101',
                        description: `Advance payment against imports made to countries other than Nepal
                        and Bhutan`,
                    },
                    {
                        code: 'S0102',
                        description: `Payment towards imports- settlement of invoice other than Nepal and
                        Bhutan`,
                    },
                    {
                        code: 'S0103',
                        description: 'Imports by diplomatic missions other than Nepal and Bhutan',
                    },
                    {
                        code: 'S0104',
                        description: `Intermediary trade/transit trade, i.e., third country export passing through
                        India`,
                    },
                    {
                        code: 'S0108',
                        description: `Goods acquired under merchanting / Payment against import leg of
                        merchanting trade*`,
                    },
                    {
                        code: 'S0109',
                        description: 'Payments made for Imports from Nepal and Bhutan, if any',
                    },
                ],
            },
        ],
    },
    {
        grno: '02',
        children: [
            {
                groupName: 'Transport',
                children: [
                    {
                        code: 'S0201',
                        description: `Payments for surplus freight/passenger fare by foreign shipping
                        companies operating in India`,
                    },
                    {
                        code: 'S0202',
                        description: `Payment for operating expenses of Indian shipping companies operating
                        abroad`,
                    },
                    {
                        code: 'S0203',
                        description: 'Freight on imports – Shipping companies',
                    },
                    {
                        code: 'S0204',
                        description: 'Freight on exports – Shipping companies',
                    },
                    {
                        code: 'S0205',
                        description: 'Operational leasing/Rental of Vessels (with crew) –Shipping companies',
                    },
                    {
                        code: 'S0206',
                        description: 'Booking of passages abroad – Shipping companies',
                    },
                    {
                        code: 'S0207',
                        description: `Payments for surplus freight/passenger fare by foreign Airlines
                        companies operating in India`,
                    },
                    {
                        code: 'S0208',
                        description: 'Operating expenses of Indian Airlines companies operating abroad',
                    },
                    {
                        code: 'S0209',
                        description: 'Freight on imports – Airlines companies',
                    },
                    {
                        code: 'S0210',
                        description: 'Freight on exports – Airlines companies',
                    },
                    {
                        code: 'S0211',
                        description: 'Operational leasing / Rental of Vessels (with crew) – Airline companies',
                    },
                    {
                        code: 'S0212',
                        description: 'Booking of passages abroad – Airlines companies',
                    },
                    {
                        code: 'S0214',
                        description: `Payments on account of stevedoring, demurrage, port handling charges
                        etc.(Shipping companies)`,
                    },
                    {
                        code: 'S0215',
                        description: `Payments on account of stevedoring, demurrage, port handling charges,
                        etc.(Airlines companies)`,
                    },
                    {
                        code: 'S0205',
                        description: 'Operational leasing/Rental of Vessels (with crew) –Shipping companies',
                    },
                    {
                        code: 'S0216',
                        description: 'Payments for Passenger - Shipping companies',
                    },
                    {
                        code: 'S0217',
                        description: 'Other payments by Shipping companies',
                    },
                    {
                        code: 'S0218',
                        description: 'Payments for Passenger - Airlines companies',
                    },
                    {
                        code: 'S0219',
                        description: 'Other Payments by Airlines companies',
                    },
                    {
                        code: 'S0220',
                        description: `Payments on account of freight under other modes of transport (Internal
                            Waterways, Roadways, Railways, Pipeline transports and others)`,
                    },
                    {
                        code: 'S0221',
                        description: `Payments on account of passenger fare under other modes of transport
                        (Internal Waterways, Roadways, Railways, Pipeline transports and
                        others)`,
                    },
                    {
                        code: 'S0222',
                        description: 'Postal & Courier services by Air',
                    },
                    {
                        code: 'S0223',
                        description: 'Postal & Courier services by Sea',
                    },
                    {
                        code: 'S0224',
                        description: 'Postal & Courier services by others',
                    },
                ],
            },
        ],
    },
    {
        grno: '03',
        children: [
            {
                groupName: 'Travel',
                children: [
                    {
                        code: 'S0301',
                        description: 'Business travel.',
                    },
                    {
                        code: 'S0303',
                        description: 'Travel for pilgrimage',
                    },
                    {
                        code: 'S0304',
                        description: 'Travel for medical treatment',
                    },
                    {
                        code: 'S0305',
                        description: 'Travel for education (including fees, hostel expenses etc.)',
                    },
                    {
                        code: 'S0306',
                        description: `Other travel (including holiday trips and payments for settling
                            international credit cards transactions)`,
                    },
                ],
            },
        ],
    },
    {
        grno: '05',
        children: [
            {
                groupName: 'Construction Services',
                children: [
                    {
                        code: 'S0501',
                        description: `Construction of projects abroad by Indian companies including import of
                        goods at project site abroad`,
                    },
                    {
                        code: 'S0502',
                        description: `Cost of construction etc. of projects executed by foreign companies in
                        India.`,
                    },
                ],
            },
        ],
    },
    {
        grno: '06',
        children: [
            {
                groupName: 'Insurance and Pension Services',
                children: [
                    {
                        code: 'S0601',
                        description: 'Life Insurance premium except term insurance',
                    },
                    {
                        code: 'S0602',
                        description: 'Freight insurance – relating to import & export of goods',
                    },
                    {
                        code: 'S0603',
                        description: `Other general insurance premium including reinsurance premium; and
                        term life insurance premium`,
                    },
                    {
                        code: 'S0605',
                        description: 'Auxiliary services including commission on insurance',
                    },
                    {
                        code: 'S0607',
                        description: `Insurance claim Settlement of non-life insurance; and life insurance
                        (only term insurance)`,
                    },
                    {
                        code: 'S0608',
                        description: 'Life Insurance Claim Settlements',
                    },
                    {
                        code: 'S0609',
                        description: 'Standardised guarantee services',
                    },
                    {
                        code: 'S0610',
                        description: 'Premium for pension funds',
                    },
                    {
                        code: 'S0611',
                        description: `Periodic pension entitlements e.g. monthly quarterly or yearly payments
                        of pension amounts by Indian Pension Fund Companies.`,
                    },
                    {
                        code: 'S0602',
                        description: 'Invoking of standardised guarantees',
                    },
                ],
            },
        ],
    },
    {
        grno: '07',
        children: [
            {
                groupName: 'Financial Services',
                children: [
                    {
                        code: 'S0701',
                        description: `Financial intermediation, except investment banking - Bank charges,
                        collection charges, LC charges etc.`,
                    },
                    {
                        code: 'S0702',
                        description: 'Investment banking – brokerage, under writing commission etc.',
                    },
                    {
                        code: 'S0703',
                        description: `Auxiliary services – charges on operation & regulatory fees, custodial
                        services, depository services etc.`,
                    },
                ],
            },
        ],
    },
    {
        grno: '08',
        children: [
            {
                groupName: 'Telecommunication, Computer & Information Services',
                children: [
                    {
                        code: 'S0801',
                        description: 'Hardware consultancy/implementation',
                    },
                    {
                        code: 'S0802',
                        description: 'Software consultancy / implementation',
                    },
                    {
                        code: 'S0803',
                        description: 'Data base, data processing charges',
                    },
                    {
                        code: 'S0804',
                        description: 'Repair and maintenance of computer and software',
                    },
                    {
                        code: 'S0805',
                        description: 'News agency services',
                    },
                    {
                        code: 'S0806',
                        description: 'Other information services- Subscription to newspapers, periodicals',
                    },
                    {
                        code: 'S0807',
                        description: 'Off-site software imports',
                    },
                    {
                        code: 'S0808',
                        description: `Telecommunication services including electronic mail services and voice
                        mail services`,
                    },
                    {
                        code: 'S0809',
                        description: 'Satellite services including space shuttle and rockets etc.',
                    },
                ],
            },
        ],
    },
    {
        grno: '09',
        children: [
            {
                groupName: 'Charges for the use of intellectual property (not included elsewhere)',
                children: [
                    {
                        code: 'S0901',
                        description: 'Franchises services',
                    },
                    {
                        code: 'S0902',
                        description: `Payment for use, through licensing arrangements, of produced originals
                        or prototypes (such as manuscripts and films), patents, copyrights,
                        trademarks and industrial processes etc.`,
                    },
                ],
            },
        ],
    },
    {
        grno: '10',
        children: [
            {
                groupName: 'Other Business Services',
                children: [
                    {
                        code: 'S1002',
                        description: 'Trade related services – commission on exports / imports',
                    },
                    {
                        code: 'S1003',
                        description: `Operational leasing services (other than financial leasing) without
                        operating crew, including charter hire- Airlines companies`,
                    },
                    {
                        code: 'S1004',
                        description: 'Legal services',
                    },
                    {
                        code: 'S1005',
                        description: 'Accounting, auditing, book-keeping services',
                    },
                    {
                        code: 'S1006',
                        description: 'Business and management consultancy and public relations services',
                    },
                    {
                        code: 'S1007',
                        description: 'Advertising, trade fair service',
                    },
                    {
                        code: 'S1008',
                        description: 'Research & Development services',
                    },
                    {
                        code: 'S1009',
                        description: 'Architectural services',
                    },
                    {
                        code: 'S1010',
                        description: `Agricultural services like protection against insects & disease, increasing
                        of harvest yields, forestry services.`,
                    },
                    {
                        code: 'S1011',
                        description: 'Payments for maintenance of offices abroad',
                    },
                    {
                        code: 'S1013',
                        description: 'Environmental Services',
                    },
                    {
                        code: 'S1014',
                        description: 'Engineering Services',
                    },
                    {
                        code: 'S1015',
                        description: 'Tax consulting services',
                    },
                    {
                        code: 'S1016',
                        description: 'Market research and public opinion polling service',
                    },
                    {
                        code: 'S1017',
                        description: 'Publishing and printing services',
                    },
                    {
                        code: 'S1018',
                        description: 'Mining services like on–site processing services analysis of ores etc.',
                    },
                    {
                        code: 'S1020',
                        description: 'Commission agent services',
                    },
                    {
                        code: 'S1021',
                        description: 'Wholesale and retailing trade services.',
                    },
                    {
                        code: 'S1022',
                        description: `Operational leasing services (other than financial leasing) without
                        operating crew, including charter hire- Shipping companies`,
                    },
                    {
                        code: 'S1023',
                        description: 'Other Technical Services including scientific/space services.',
                    },
                    {
                        code: 'S1099',
                        description: 'Other services not included elsewhere',
                    },
                ],
            },
        ],
    },
    {
        grno: '11',
        children: [
            {
                groupName: 'Personal, Cultural & Recreational services',
                children: [
                    {
                        code: 'S1101',
                        description: `Audio-visual and related services like Motion picture and video tape
                        production, distribution and projection services.`,
                    },
                    {
                        code: 'S1103',
                        description: 'Radio and television production, distribution and transmission services',
                    },
                    {
                        code: 'S1104',
                        description: 'Entertainment services',
                    },
                    {
                        code: 'S1105',
                        description: 'Museums, library and archival services',
                    },
                    {
                        code: 'S1106',
                        description: 'Recreation and sporting activities services',
                    },
                    {
                        code: 'S1107',
                        description: 'Education (e.g. fees for correspondence courses abroad )',
                    },
                    {
                        code: 'S1108',
                        description: `Health Service (payment towards services received from hospitals,
                            doctors, nurses, paramedical and similar services etc. rendered
                            remotely or on-site)`,
                    },
                    {
                        code: 'S1109',
                        description: 'Other Personal, Cultural & Recreational services',
                    },
                ],
            },
        ],
    },
    {
        grno: '12',
        children: [
            {
                groupName: 'Govt. not included elsewhere',
                children: [
                    {
                        code: 'S1201',
                        description: 'Maintenance of Indian embassies abroad',
                    },
                    {
                        code: 'S1202',
                        description: 'Remittances by foreign embassies in India',
                    },
                ],
            },
        ],
    },
    {
        grno: '13',
        children: [
            {
                groupName: 'Secondary Income',
                children: [
                    {
                        code: 'S1301',
                        description: 'Remittance for family maintenance and savings',
                    },
                    {
                        code: 'S1302',
                        description: 'Remittance towards personal gifts and donations',
                    },
                    {
                        code: 'S1303',
                        description: `Remittance towards donations to religious and charitable institutions
                        abroad`,
                    },
                    {
                        code: 'S1304',
                        description: `Remittance towards grants and donations to other governments and
                        charitable institutions established by the governments.`,
                    },
                    {
                        code: 'S1305',
                        description: 'Contributions/donations by the Government to international institutions',
                    },
                    {
                        code: 'S1306',
                        description: 'Remittance towards payment / refund of taxes.',
                    },
                    {
                        code: 'S1307',
                        description: 'Outflows on account of migrant transfers including personal effects',
                    },
                ],
            },
        ],
    },
    {
        grno: '14',
        children: [
            {
                groupName: 'Primary Income',
                children: [
                    {
                        code: 'S1401',
                        description: 'Compensation of employees',
                    },
                    {
                        code: 'S1402',
                        description: `Remittance towards interest on Non-Resident deposits
                        (FCNR(B)/NR(E)RA, etc.)`,
                    },
                    {
                        code: 'S1403',
                        description: `Remittance towards interest on loans from Non-Residents (ST/MT/LT
                        loans) e.g. External Commercial Borrowings, Trade Credits, etc.`,
                    },
                    {
                        code: 'S1405',
                        description: `Remittance towards interest payment by ADs on their own account (to
                            VOSTRO a/c holders or the OD on NOSTRO a/c.)`,
                    },
                    {
                        code: 'S1408',
                        description: `Remittance of profit by FDI enterprises in India (by branches of foreign
                            companies including bank branches)`,
                    },
                    {
                        code: 'S1409',
                        description: `Remittance of dividends by FDI enterprises in India (other than
                            branches) on equity and investment fund shares`,
                    },
                    {
                        code: 'S1410',
                        description: `Payment of interest by FDI enterprises in India to their Parent company
                        abroad.`,
                    },
                    {
                        code: 'S1411',
                        description: 'Remittance of interest income on account of Portfolio Investment in India',
                    },
                    {
                        code: 'S1412',
                        description: `Remittance of dividends on account of Portfolio Investment in India on
                        equity and investment fund shares`,
                    },
                ],
            },
        ],
    },
    {
        grno: '15',
        children: [
            {
                groupName: 'Others',
                children: [
                    {
                        code: 'S1501',
                        description: 'Refunds / rebates / reduction in invoice value on account of exports',
                    },
                    {
                        code: 'S1502',
                        description: 'Reversal of wrong entries, refunds of amount remitted for non-exports',
                    },
                    {
                        code: 'S1503',
                        description: 'Payments by residents for international bidding',
                    },
                    {
                        code: 'S1504',
                        description: `Notional sales when export bills negotiated/ purchased/ discounted are
                        dishonored/ crystallised/ cancelled and reversed from suspense account`,
                    },
                    {
                        code: 'S1505',
                        description: `Deemed Imports (exports between SEZ, EPZs and Domestic tariff
                            areas)`,
                    },
                ],
            },
        ],
    },
    {
        grno: '16',
        children: [
            {
                groupName: 'Maintenance and repair services (not included elsewhere)',
                children: [
                    {
                        code: 'S1601',
                        description: `Payments on account of maintenance and repair services rendered for
                        Vessels, ships, boats, warships, etc.`,
                    },
                    {
                        code: 'S1602',
                        description: `Payments on account of maintenance and repair services rendered for
                        aircrafts, space shuttles, rockets, military aircrafts, helicopters, etc.`,
                    },
                ],
            },
        ],
    },
    {
        grno: '17',
        children: [
            {
                groupName: 'Manufacturing services (goods for processing)',
                children: [
                    {
                        code: 'S1701',
                        description: 'Payments for processing of goods',
                    },
                ],
            },
        ],
    },
];
