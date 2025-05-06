import { TEAM_URL } from '../../constants/AssetConstants';

type EmployeeDataType = {
    fallBackImageUrl?: string;
    profileUrl?: string;
    name: string;
    position: string;
    description: string;
    previousInfo: string;
    loadingType?: 'lazy' | 'eager',
};

const ALL_EMPLOYEE_DATA: Array<EmployeeDataType> = [
    {
        fallBackImageUrl: `${TEAM_URL}team-2.jpg`,
        profileUrl: `${TEAM_URL}team-2.webp`,
        name: 'Sujith Narayanan',
        position: 'Founding Team',
        description: 'Cocktail Maestro',
        previousInfo: 'Ex-Google',
        loadingType: 'eager',
    },
    {
        fallBackImageUrl: `${TEAM_URL}team-1.jpg`,
        profileUrl: `${TEAM_URL}team-1.webp`,
        name: 'Sumit Gwalani',
        position: 'Founding Team',
        description: 'Chess Whiz',
        previousInfo: 'Ex-Google',
        loadingType: 'eager',
    },
    {
        fallBackImageUrl: `${TEAM_URL}team-7.jpg`,
        profileUrl: `${TEAM_URL}team-7.webp`,
        name: 'Arvind TP',
        position: 'Founding Team',
        description: 'Fitness Maniac',
        previousInfo: 'Ex-Google',
    },
    {
        fallBackImageUrl: `${TEAM_URL}team-9.jpg`,
        profileUrl: `${TEAM_URL}team-9.webp`,
        name: 'Neeraj Bhope',
        position: 'Founding Team',
        description: 'Life of the Party',
        previousInfo: 'Ex-Google',
    },
    {
        fallBackImageUrl: `${TEAM_URL}team-4.jpg`,
        profileUrl: `${TEAM_URL}team-4.webp`,
        name: 'Prasanna R',
        position: 'Founding Team',
        description: 'Weekend Cricketer',
        previousInfo: 'Ex-Netflix & Flipkart',
    },
];

const EMPLOYEE_DATA: Array<EmployeeDataType> = [
    ALL_EMPLOYEE_DATA[0], // Sujith
    ALL_EMPLOYEE_DATA[1], // Sumit
    ALL_EMPLOYEE_DATA[2], // Arvind TP
    ALL_EMPLOYEE_DATA[3], // Neeraj
    ALL_EMPLOYEE_DATA[4], // Prasanna
];

export { EMPLOYEE_DATA, ALL_EMPLOYEE_DATA };
