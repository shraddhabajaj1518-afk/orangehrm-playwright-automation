# OrangeHRM Automation using Playwright

## Project Overview
This project automates key Admin module functionalities of the OrangeHRM demo application using Playwright.
The automation is designed based on the assignment requirements and follows Playwright best practices.

## Application Under Test
URL: https://opensource-demo.orangehrmlive.com/

## Tech Stack
- Playwright
- JavaScript (Node.js)

## Playwright Version
@playwright/test ^1.42.0

## Project Structure
orangehrm-playwright-automation/
├── tests/
│   └── admin.spec.js
├── pages/
│   └── Page Object files (if extended)
└── README.md

## Automated Test Scenarios
1. Navigate to Admin Module
2. Add a New User
3. Search the Newly Created User
4. Edit User Details
5. Validate Updated Details
6. Delete the User

## Test Design Approach
- Each scenario is written in a separate Playwright test block
- Meaningful selectors based on visible text are used
- Proper waits are applied using Playwright's auto-waiting mechanism
- Page Object Model is followed (recommended structure)

## How to Run the Tests
1. Install Node.js (LTS version)
2. Clone the repository
3. Install dependencies:
   npm install
4. Run tests:
   npx playwright test

## Notes
- This project focuses on automation design and structure.
- The OrangeHRM demo site contains dynamic test data, so some steps are demonstrated logically.
- Tests are ready to run in any Playwright-supported environment.
