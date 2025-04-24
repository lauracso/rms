
import { test, expect } from '@playwright/test';
import  { RMSDMSPage } from '../../poms/pomRmsDms';

test('RMS for DMS page should contain certain navigation elements', async ({ page }) => {
  const pomPage = new RMSDMSPage(page);
  await pomPage.goto();
  await pomPage.getStarted();
  await expect(pomPage.navHomeLink).toContainText('Home');
  await expect(pomPage.navSurveyLink).toContainText('Survey');
  await expect(pomPage.navUsersLink).toContainText('Users');
  await expect(pomPage.navSystemLink).toContainText('System');
  await expect(pomPage.infoLoggedInRole).toBeVisible();
  await expect(pomPage.infoRoleIcon).toBeVisible();
  await expect(pomPage.boxCSOIdentifier).toBeVisible('Enter a CSO Identifier..');
  await expect(pomPage.buttonSearch).toContainText('Search');
  });

test('should show logged in user', async ({ page }) => {
  const rmsDmsPom = new RMSDMSPage(page);
  await rmsDmsPom.goto();
  await rmsDmsPom.pageObjectModel();
  await expect(page.locator('#logged_in_user')).toContainText('Laura Egar');
  await expect(rmsDmsPom.navLoggedInUser).toContainText('Laura Egar');
});
