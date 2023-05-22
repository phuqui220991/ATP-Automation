# ATP-Automation
**ATP-Automation** is a demo project that demonstrates how to integrate **Cypress** with **Cucumber** and **XRay** in Jira for efficient test management and execution.

## Overview
The project showcases the usage of **Cypress**, a popular JavaScript end-to-end testing framework, along with **Cucumber**, a behavior-driven development (BDD) tool, to write and execute automated tests. It integrates with **XRay**, a test management tool within Jira, to manage test cases, track test execution, and generate reports.
![Screenshot](https://docs.getxray.app/download/attachments/68412028/image2020-11-9_14-21-59.png?version=10&modificationDate=1682619221185&api=v2)

## Prerequisites
Before getting started, ensure that you have the following prerequisites installed on your system:
- Node.js: https://nodejs.org
- Cypress: https://www.cypress.io
- Jira account with XRay installed: https://www.atlassian.com/software/jira
- Create [XRay API Key](https://docs.getxray.app/display/XRAYCLOUD/Global+Settings%3A+API+Keys)

## Installation
1. Clone the repository: ```
git clone https://github.com/phuqui220991/ATP-Automation.git```
2. Navigate to the project directory: ```
cd ATP-Automation```
3. Install the dependencies: ```
npm install```

## Configuration
1. Open the `cloud_auth.json` file.
2. Update the Jira and XRay configuration:
    ```json
    {
      "client_id": "your-xray-client-id",
      "client_secret": "your-xray-client-secret"
    }
    ```
    Replace the placeholders with your Jira and XRay information.

## Usage
1. Open the specific User Story in Jira. (e.g., ATP-23)
2. Create Cucumber tests.
3. Implement the step definitions in the `cypress/e2e/step_definitions/frontend` directory to define the test steps.
4. Open `.github/workflows/main.yml`
5. Change the value of KEYS to the User Story ID (e.g., KEYS="ATP-13")
6. Commit the changes to the source code versioning system.

> Note: In the future, we will create a file and store all the User Story IDs that will be used for automation testing

## Reporting
After test execution, XRay in Jira will automatically capture the test results. You can view the test execution status, coverage, and generate reports within Jira.

## License
This project is licensed under the MIT License.
