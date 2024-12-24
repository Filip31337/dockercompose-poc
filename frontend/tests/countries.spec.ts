import { test, expect } from '@playwright/test';

test.describe("landing page", () => {
  test.beforeEach(async ({page}) => {
    await page.goto("http://localhost:5173/");
  })

  test("should have correct metadata and elements", async ({page}) => {
    //await page.goto("http://localhost:5173/");
    await expect(page).toHaveTitle("Vite + React + TS");
    await expect(
      page.getByRole("heading", {
        name: "Welcome to Docker Compose POC!",
      })
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Countries"})).toBeVisible();
  });

  test("should redirect to countries list page on navigation click", async ({page})=> {
    await page.getByRole("link", {name: "Countries"}).click();

    await expect(page).toHaveTitle("Vite + React + TS");
  });
});

test.describe("countries page", () => {
  test.beforeEach(async ({page}) => {
    await page.goto("http://localhost:5173/countries");
  });

  test("should data table have 11 items after routing to countries list", async ({page}) => {
    const dataTableElement = page.getByTestId("countries-table");
    const tableRows = dataTableElement.locator('tbody tr');

    await expect(dataTableElement).toBeVisible();
    await expect(tableRows).toHaveCount(11);
  })
})
