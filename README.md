# E-commerce QA Automation Framework

This project is an end-to-end (E2E) test automation framework built using **Cypress** to validate core e-commerce user flows.

## Objective

The goal of this project is to demonstrate:

- Automation architecture best practices
- Scalable test structure
- Clean code principles
- CI/CD readiness
- Real-world testing scenarios

## Test Coverage

The framework covers typical e-commerce workflows such as:

- User login
- Product search
- Add to cart
- Checkout validation
- UI validation scenarios
- Negative test cases

## Architecture

- Cypress
- Page Object Model (POM)
- Modular structure
- Custom commands
- Environment-based configuration

## Project Structure

```bash
ecommerce-qa-automation-framework/
│
├── cypress/
│   ├── e2e/
│   ├── support/
│   └── fixtures/
│
├── .github/
│   └── workflows/
│
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

## How to Run

Install dependencies:
npm install

Run tests in headless mode:
npx cypress run

Open interactive mode:
npx cypress open

## CI Integration

This project is structured to support CI pipelines (GitHub Actions ready).

---

## Author

Vinicius Marcondes Bacca  
QA Automation Engineer
