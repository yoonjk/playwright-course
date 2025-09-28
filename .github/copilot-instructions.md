# Copilot Instructions for AI Coding Agents

## Project Overview
This is a Playwright-based end-to-end testing project using TypeScript. The main focus is on browser automation and UI testing for web applications. The workspace is organized for hands-on learning and experimentation with Playwright.

## Key Directories & Files
- `01-handson/`: Main project folder.
  - `playwright.config.ts`: Playwright configuration (test settings, browser options).
  - `package.json`: Project dependencies and scripts.
  - `tests/`: Core test specs (e.g., `example.spec.ts`).
  - `tests-examples/`: Additional demo test specs.
  - `playwright-report/`: Test run reports (HTML, results).

## Developer Workflows
- **Install dependencies:**
  ```sh
  npm install
  ```
- **Run all tests:**
  ```sh
  npx playwright test
  ```
- **Run a specific test file:**
  ```sh
  npx playwright test tests/example.spec.ts
  ```
- **View test reports:**
  After running tests, open `playwright-report/index.html` in a browser.
- **Debug tests:**
  Use Playwright's built-in debug mode:
  ```sh
  npx playwright test --debug
  ```

## Project-Specific Patterns
- Tests use Playwright's `test` and `expect` APIs, with page object selectors and role-based queries (see `example.spec.ts`).
- Test files are organized by topic or demo, not by application feature.
- No custom test runner or framework extensions; stick to Playwright conventions.
- Reports and results are auto-generated in `playwright-report/` and `test-results/`.

## Integration Points
- No backend or service integration; tests target public web URLs.
- External dependencies managed via `package.json` (Playwright, TypeScript).

## Conventions
- Use TypeScript for all test specs.
- Place new tests in `tests/` or `tests-examples/` as appropriate.
- Keep Playwright configuration in `playwright.config.ts`.
- Do not modify files in `playwright-report/` or `test-results/` manually.

## Example Test Pattern
```typescript
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
```

---

**If any section is unclear or missing important details, please provide feedback so this guide can be improved.**
