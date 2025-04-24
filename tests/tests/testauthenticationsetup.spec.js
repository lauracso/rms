
// @ts-check
import { test, expect } from '@playwright/test';

test('authentication from an auth file test', async ({ page }) => {
  // page is authenticated
  page.goto('https://uat-webserver.cso.ie/RMS/client');
  await expect(page.getByRole('button', {name: 'Search'})).toBeVisible();
});