# Playwright E-Commerce Automation Framework

A production-style **Playwright + TypeScript automation framework** for web UI and REST API testing of an e-commerce application.

The framework demonstrates scalable test automation practices including **Page Object Model, custom fixtures, externalized test data, API abstraction, environment configuration, smoke/regression tagging, multi-browser execution, failure diagnostics, and CI/CD with GitHub Actions**.

---

## Tech Stack

* **Language:** TypeScript
* **Automation:** Playwright
* **API Testing:** Playwright APIRequestContext
* **Test Runner:** Playwright Test
* **Browsers:** Chromium, Firefox, WebKit
* **Build / Package Manager:** npm
* **CI/CD:** GitHub Actions
* **Environment Management:** dotenv
* **Test Architecture:** Page Object Model + Custom Fixtures
* **Reporting:** Playwright HTML Report
* **Version Control:** Git / GitHub

---

## Framework Features

* UI automation using Playwright
* REST API automation
* Page Object Model (POM)
* Reusable custom fixtures
* API client abstraction
* API CRUD and PATCH operations
* Externalized test data
* Environment-specific configuration
* Smoke and regression test tagging
* Chromium, Firefox and WebKit execution
* TypeScript static type checking
* Screenshot capture on failure
* Video capture on failure
* Trace collection on first retry
* HTML test reporting
* GitHub Actions CI pipeline
* Playwright report artifact upload

---

## Project Structure

```text
playwright-ecommerce-automation/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── config/
│   ├── .env.example
│   └── .env.qa
│
├── playwright/
│   └── .auth/
│       └── user.json
│
├── src/
│   ├── api/
│   │   ├── ApiClient.ts
│   │   └── ProductsApi.ts
│   │
│   ├── fixtures/
│   │   └── testFixtures.ts
│   │
│   ├── pages/
│   │   ├── BasePage.ts
│   │   ├── CartPage.ts
│   │   ├── CheckoutPage.ts
│   │   ├── LoginPage.ts
│   │   └── ProductsPage.ts
│   │
│   ├── types/
│   │   ├── apiTypes.ts
│   │   └── testTypes.ts
│   │
│   └── utils/
│       ├── apiTestData.ts
│       ├── checkoutData.ts
│       └── testData.ts
│
├── test-data/
│   ├── api-products.json
│   ├── checkout.json
│   └── users.json
│
├── tests/
│   ├── api/
│   │   └── products.api.spec.ts
│   │
│   ├── auth/
│   │   └── auth.setup.ts
│   │
│   ├── regression/
│   │   └── ecommerce-flow.spec.ts
│   │
│   └── ui/
│       └── login.spec.ts
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
├── README.md
└── tsconfig.json
```

---

## Architecture

The framework follows a layered automation architecture:

```text
                 ┌─────────────────────────┐
                 │       Test Cases        │
                 │  UI / API / Regression  │
                 └────────────┬────────────┘
                              │
                 ┌────────────▼────────────┐
                 │    Custom Fixtures      │
                 │  Reusable Test Setup    │
                 └────────────┬────────────┘
                              │
             ┌────────────────┴────────────────┐
             │                                 │
     ┌───────▼────────┐               ┌────────▼────────┐
     │   Page Objects │               │    API Layer    │
     │                │               │                 │
     │ LoginPage      │               │ ApiClient       │
     │ ProductsPage   │               │ ProductsApi     │
     │ CartPage       │               │                 │
     │ CheckoutPage   │               │                 │
     └───────┬────────┘               └────────┬────────┘
             │                                 │
             └────────────────┬────────────────┘
                              │
                   ┌──────────▼──────────┐
                   │ Test Data / Config  │
                   │ JSON / Environment  │
                   └─────────────────────┘
```

### Design Principles

* Keep test cases focused on business behavior.
* Keep UI interaction logic inside Page Objects.
* Keep API communication inside API service classes.
* Reuse common setup through fixtures.
* Keep test data separate from test implementation.
* Use environment configuration rather than hard-coded environment URLs.
* Use tags to separate smoke and regression execution.

---

## Test Coverage

### UI Tests

The UI suite covers:

* Valid user login
* Locked user login validation
* Product availability
* Add product to cart
* Cart validation
* Checkout flow
* Order completion
* Order confirmation

### API Tests

The API suite covers:

* Retrieve products
* Create product
* Update product
* Delete product
* Partially update product

The API tests use a reusable API client and service-layer abstraction.

---

## Browser Coverage

The UI suite runs against:

* Chromium
* Firefox
* WebKit

API tests run separately through the Playwright API test project.

---

## Test Tags

Tests are categorized using Playwright tags.

### Smoke

Run smoke tests:

```bash
npm run test:smoke
```

### Regression

Run regression tests:

```bash
npm run test:regression
```

---

## Installation

### Prerequisites

Install:

* Node.js
* npm
* Git

### Clone the repository

```bash
git clone https://github.com/satyajitkulkarni/playwright-ecommerce-automation.git
cd playwright-ecommerce-automation
```

### Install dependencies

```bash
npm ci
```

### Install Playwright browsers

```bash
npx playwright install
```

---

## Environment Configuration

The framework uses environment-specific configuration.

Example:

```text
config/.env.example
```

Expected variables:

```text
BASE_URL=https://www.saucedemo.com
API_BASE_URL=https://jsonplaceholder.typicode.com
ENVIRONMENT=qa
```

Local environment files are excluded from Git through `.gitignore`.

---

## Running Tests

### Run complete test suite

```bash
npm test
```

### Run UI tests

```bash
npm run test:ui
```

### Run API tests

```bash
npm run test:api
```

### Run smoke tests

```bash
npm run test:smoke
```

### Run regression tests

```bash
npm run test:regression
```

### Run Chromium tests

```bash
npm run test:chromium
```

### Run Firefox tests

```bash
npm run test:firefox
```

### Run WebKit tests

```bash
npm run test:webkit
```

### Run tests in headed mode

```bash
npm run test:headed
```

### Run tests in debug mode

```bash
npm run test:debug
```

### Run TypeScript type checking

```bash
npm run typecheck
```

---

## Reporting

The framework uses the Playwright HTML reporter.

After execution, open the report with:

```bash
npm run report
```

Failure diagnostics are configured as follows:

* Screenshot: captured on failure
* Video: retained on failure
* Trace: collected on first retry

These artifacts help investigate failed UI automation without reproducing the failure locally.

---

## CI/CD

The project includes a GitHub Actions workflow:

```text
.github/workflows/playwright.yml
```

The CI pipeline performs:

1. Repository checkout
2. Node.js setup
3. Dependency installation using `npm ci`
4. TypeScript type checking
5. Playwright browser installation
6. Full Playwright test execution
7. Playwright HTML report artifact upload

The pipeline is triggered for pushes and pull requests targeting the configured branches.

---

## Example Commands

Run the complete validation locally:

```bash
npm run typecheck
npm test
```

Run only API tests:

```bash
npm run typecheck
npm run test:api
```

Run smoke tests:

```bash
npm run test:smoke
```

---

## Framework Scalability

The framework is structured so that additional functionality can be added without modifying existing test architecture.

Examples of future extensions include:

* Additional Page Objects
* Additional API service classes
* More environment configurations
* Additional test-data modules
* Authentication strategies
* Parallel execution optimization
* Additional CI pipeline stages
* Advanced reporting integrations

---

## Quality Checks

The current framework has been validated with:

```text
TypeScript type check       PASS
Full Playwright suite       15 tests passed
API test suite              5 tests passed
Smoke suite                 8 tests passed
Regression suite             6 tests passed
Multi-browser execution     Chromium / Firefox / WebKit
CI/CD                       GitHub Actions
```

---

## Author

**Satyajit Kulkarni**

SDET / Automation Engineer

Core focus:

* Playwright
* TypeScript
* Selenium
* Java
* API Automation
* REST Assured
* CI/CD
* Jenkins
* Agile Testing

---

## Disclaimer

This repository is created as a demonstration automation framework for learning, portfolio, and interview purposes.
