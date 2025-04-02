
import { test, expect } from '@playwright/test';
import  { RMSDMSPage } from './rmsdmsPom';

test('RMS for DMS page should contain certain elements', async ({ page }) => {
  const pomPage = new RMSDMSPage(page);
  await pomPage.goto();
  await pomPage.getStarted();
  await expect(pomPage.navHomeLink).toContainText('Home');
  });

test('should show logged in user', async ({ page }) => {
  const playwrightRmsDmsPom = new RMSDMSPage(page);
  await playwrightRmsDmsPom.goto();
  await playwrightRmsDmsPom.pageObjectModel();
  await expect(page.locator('#logged_in_user')).toContainText('Laura Egar');
});
