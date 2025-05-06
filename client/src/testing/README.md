Mock File is not available for "typescript-plugin-styled-components" and the test case failed without mocking the "typescript-plugin-styled-components".

Comment out "typescript-plugin-styled-components" from babel.config.json file to run test cases.

Steps to run test cases-

1. If you want to run all test cases together then use the command - yarn test

2. If you want to run a test case for the specific page like if you want to run a test case for the about page, in that case, use following command - 
    yarn test path_upto_testfile

eg-> for the about page test if you are in web folder -
    yarn test client/src/containers/About/tests/snapshot/About.test.tsx

3. If you want to update the snapshot, in that case, delete the previous snapshot and run the yarn test command again.
