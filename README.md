#SauceDemo Playwright Automation Framework

Test automation framework built using **Playwright (JavaScript)** with:

- Page Object Model (POM)
- Allure Reporting
- Retry-aware execution
- Automated Bug Creation (JSON-based defect simulation)
- Structured test tagging
- Screenshot & Trace evidence capture

# Project Overview
This project automates authentication scenarios for:

https://www.saucedemo.com

It demonstrates:

- Login Functional Positive & Negative testing
- Clean modular architecture
- Allure step reporting
- Retry handling for flaky tests
- Automatic structured bug generation on failure

# Architecture
```text
pi-saucedemo-playwright-js/
├── src/
│   ├── core/
│   │   ├── base/
│   │   │   └── BasePage.js
│   │   ├── utils/
│   │   │   ├── testData.js
│   │   │   └── bugReporter.js
│   ├── fixtures/
│   │   └── webFixtures.js
│   ├── modules/
│   │   └── web/
│   │       └── login/
│   │           ├── LoginPage.js
│   │           └── login.spec.js
├── auto-bugs/          # Generated bug reports
├── test-results/       # Playwright failure artifacts
├── allure-results/     # Raw Allure data
├── allure-report/      # Generated Allure HTML report
├── playwright.config.js
├── package.json
├── .env
├── .gitignore
└── README.md
```
auto-bugs/ (Generated bug reports)
playwright.config.js

# Design Pattern Used

Page Object Model (POM)
Modular feature-based structure
Retry-aware failure handling
Separation of test logic and reporting logic
CI-ready artifact management

#Installation

Check:
node -v

If not installed → download LTS from
Install Node.js (if not installed) - https://nodejs.org
git clone <repo-url>
cd project
npm install

# Running Tests
```
Run all tests:
npx playwright test
Run specific test:
npx playwright test login.spec.js
Run in headed mode:
npx playwright test --headed
Run in debug mode:
npx playwright test --headed --debug
```
# Generate Allure Report
npx allure generate ./allure-results --clean
npx allure open

# Failure Debugging Features

Framework automatically captures:
Screenshot on failure
Execution logs
Trace files
Structured error data
Artifacts are stored in:
test-results/

# Automated Bug Reporting Concept
Framework supports generating structured bug reports from failed tests:
Includes:
Title
Steps
Expected vs Actual
Logs
Evidence
Severity
Output directory:
auto-bugs/



