module.exports = {
    roots: ['<rootDir>/src'],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(t|j)sx?$': 'babel-jest',
        '^.+\\.(svg|jpg|jpeg|png|gif|webp|mp3|webm|mp4)$': '<rootDir>/src/testing/fileTransformer.js',
    },
    testMatch: ['<rootDir>/src/**/?(*.)test.{ts,tsx}'], // looks for your test
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '/public/'],
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
        '@testing-library/react',
        '<rootDir>/src/testing/setupTests.js',
    ], // sets ut test files
    moduleNameMapper: { '\\.(css|scss)$': '<rootDir>/src/testing/stylesMock.js' },
};
