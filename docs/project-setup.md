Initialization of the test environment

1. Add the following packages to the application:
   npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/jest

npm i --save-dev jest-environment-jsdom
npm i --save-dev identity-obj-proxy
npm i --save-dev ts-jest

2. Setup the Jest Configuration:
   create jest.config.js
   Add the following:
   module.exports = {
   testEnvironment: "jsdom",
   moduleNameMapper: {
   "\\.(css|scss)$": "identity-obj-proxy", // Mock CSS imports
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Transform TypeScript files
   },
   };

3. Create the "**tests**" folder.

4. Add the test script to the package.json file:
   "scripts": {
   "test": "jest"
   }

5. Write a test file (ex. OcasBreadcrumb.test.tsx)
