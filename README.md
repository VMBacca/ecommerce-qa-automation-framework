# E-commerce QA Automation Framework

## Overview
This project is a scalable test automation framework designed to validate critical user flows in an e-commerce application.
It focuses on end-to-end testing, API validation, and maintainable test architecture, simulating real-world QA scenarios in modern web applications.

---

## Project Goal
To demonstrate real-world test automation practices applied to e-commerce systems, focusing on reliability, maintainability, and scalability.

---

## Tech Stack
- Cypress (UI & API Testing)
- JavaScript
- Node.js
- GitHub Actions (CI/CD)

---

## Features
- End-to-end test coverage for core user flows:
  - User login
  - Product selection
  - Cart operations
  - Checkout process
- Custom npm scripts for standardized test execution
- API validation integrated with UI tests
- Page Object Model (POM) for scalability and maintainability
- Reusable test components and commands
- Automated test execution with CI/CD pipeline

---

## Architecture
The framework follows best practices for test automation:

- **Page Object Model (POM)** to separate test logic from UI interactions
- **Reusable commands** to reduce duplication
- **Modular structure** for easy scalability
- Clear separation of concerns between test cases and support logic

---

## How to Run

### 1. Clone the repository
```bash
git clone https://github.com/VMBacca/ecommerce-qa-automation-framework.git
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run tests

Run in interactive mode:
```bash
npm run cy:open
```

Run in headless mode:

```bash
npm test
```

---

## CI/CD Integration
This project uses GitHub Actions to execute automated tests on every push, ensuring continuous validation of the application.

---

## Why this project?
This project simulates real-world QA challenges in e-commerce systems, focusing on:
- Reliability of critical business flows
- Maintainability of test suites
- Scalability of automation frameworks
- Integration between UI and API validation
- Demonstrates practical application of QA engineering principles in real-world scenarios
 
---

## Future Improvements
- Add test data management strategies
- Implement mocks and stubs for isolated testing
- Expand API test coverage
- Integrate reporting tools (Allure, Mochawesome)
 
---

## Author
Vinícius Marcondes Bacca
- LinkedIn: https://linkedin.com/in/viniciusmarcondesbacca
- GitHub: https://github.com/VMBacca
