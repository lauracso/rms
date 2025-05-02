import { defineConfig, test, expect } from '@playwright/test';

test('query interaction add comment', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://uat-webserver.cso.ie/RMS/client/');
  await page.getByRole('link', { name: 'Query Management' }).click();
  await page.getByRole('checkbox', { name: 'Queries Logged by me' }).check();
  await page.getByText('Queries Logged by me').click();
  await page.getByLabel('Survey:', { exact: true }).selectOption('Monthly Services Inquiry');
  await page.getByText('Queries Logged by me').click();
  await page.getByRole('cell', { name: 'Laura Egar' }).first().click();
  await expect(page.locator('tbody')).toContainText('Laura Egar');
});

test('query view and add some text ', async ({ page }) => {
    await page.goto('https://uat-webserver.cso.ie/RMS/client/');
    await page.getByRole('link', { name: 'Query Management' }).click();
    await page.getByRole('row', { name: 'Monthly Services Inquiry EN00000004 2025M01 Laura.egar@cso.ie Laura Egar Key 04' }).locator('span').click();
    await page.getByRole('row', { name: 'Monthly Services Inquiry EN00000004 2025M01 Laura.egar@cso.ie Laura Egar Key 04' }).locator('#view-query-management').click();
    await page.getByRole('textbox', { name: 'Please enter a query or reply' }).fill('interaction');
    await page.getByRole('button', { name: 'Submit ' }).click();
    await page.getByText('Query Interaction / Reply').click();
    await expect(page.locator('#body')).toContainText('Query Interaction / Reply inserted successfully');
    await expect(page.getByText('Query Interaction / Reply')).toBeVisible();
    await expect(page.getByRole('alert').filter({ hasText: 'Query Interaction / Reply' }).locator('div')).toBeVisible();
  });