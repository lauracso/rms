import { defineConfig, test, expect } from '@playwright/test';
import { QueryManPom } from '../poms/pomQueryManagement';

test('query interaction add comment', async ({ page }) => {
  await page.goto('https://uat-webserver.cso.ie/RMS/client/');
  await page.getByRole('link', { name: 'Query Management' }).click();
  await page.getByRole('checkbox', { name: 'Queries Logged by me' }).check();

  await page.getByLabel('Survey:', { exact: true }).selectOption('Monthly Services Inquiry');
  await expect(page.locator('tbody')).toContainText('Laura Egar');
  await expect(page.getByRole('row', { name: 'Monthly Services Inquiry EN00000004 2025M03 Laura.egar@cso.ie Laura Egar Key 03' }).locator('#view-query-management')).toBeVisible();
  await expect(page.locator('tbody')).toContainText('View');
  await expect(page.getByRole('row', { name: 'Monthly Services Inquiry EN00000004 2025M01 Laura.egar@cso.ie Laura Egar Key 04' }).locator('#view-query-management')).toBeVisible();
  await expect(page.getByRole('row', { name: 'Monthly Services Inquiry EN00000004 2025M03 Laura.egar@cso.ie Laura Egar Key 03' }).locator('span')).toBeVisible();
  await expect(page.locator('tbody')).toContainText('Closed');
});

test('query view and add some text ', async ({ page }) => { 
  
    await page.goto('https://uat-webserver.cso.ie/RMS/client/');
    await page.getByRole('link', { name: 'Query Management' }).click();
    await page.getByRole('checkbox', { name: 'Queries Logged by me' }).check();

    await page.getByRole('row', { name: 'Monthly Services Inquiry EN00000004 2025M01 Laura.egar@cso.ie Laura Egar Key 04' }).locator('span').click();
    await page.getByRole('row', { name: 'Monthly Services Inquiry EN00000004 2025M01 Laura.egar@cso.ie Laura Egar Key 04' }).locator('#view-query-management').click();
    await page.getByRole('textbox', { name: 'Please enter a query or reply' }).fill('interaction');
    await page.getByRole('button', { name: 'Submit ' }).click();
    await page.getByText('Query Interaction / Reply').click();
    await expect(page.locator('#body')).toContainText('Query Interaction / Reply inserted successfully');
    await expect(page.getByText('Query Interaction / Reply')).toBeVisible();
    await expect(page.getByRole('alert').filter({ hasText: 'Query Interaction / Reply' }).locator('div')).toBeVisible();
  });

  test('check query reassign behaviour', async({page}) => {
    await page.goto('https://uat-webserver.cso.ie/RMS/client/');
    await page.getByRole('link', { name: 'Query Management' }).click();
    await page.getByRole('checkbox', { name: 'Queries Logged by me' }).check();
  
    await page.getByText('Queries Logged by me').click();
    await page.getByRole('row', { name: 'Monthly Services Inquiry EN00000004 2025M01 Laura.egar@cso.ie Laura Egar Key 04' }).locator('#view-query-management').click();
    await page.getByRole('button', { name: 'Re Assign Query ' }).click();
    await page.getByRole('combobox', { name: 'Start typing...' }).click();
    await page.getByRole('option', { name: 'Laura Egar' }).click();
    await page.locator('#query-update-action-comment-assignTo').click();
    await page.locator('#query-update-action-comment-assignTo').fill('test');
    await page.getByRole('button', { name: 'Submit', exact: true }).click();
    await expect(page.locator('#modal-confirm > .modal-dialog > .modal-content > .container-fluid > .row > div').first()).toBeVisible();
    await expect(page.locator('#modal-confirm div').filter({ hasText: 'Reassign Query Are you sure' }).nth(2)).toBeVisible();
    await expect(page.locator('#modal-confirm')).toContainText('Reassign Query');
    await expect(page.locator('#modal-confirm')).toContainText('Are you sure you want to reassign query to Laura Egar?');
    await expect(page.locator('#modal-confirm')).toContainText('Laura Egar');
    await expect(page.getByRole('button', { name: ' Confirm' })).toBeVisible();
    await expect(page.locator('button[name="confirm"]')).toContainText('Confirm');
    await expect(page.locator('button[name="cancel-confirm"]')).toContainText('Cancel');
    await page.getByRole('button', { name: ' Confirm' }).click();
    await expect(page.locator('#modal-success div').filter({ hasText: 'Success Query re assigned to' }).nth(2)).toBeVisible();
    await expect(page.locator('#modal-success i')).toBeVisible();
    await expect(page.locator('#modal-success')).toContainText('Success');
    await expect(page.locator('#modal-success')).toContainText('Query re assigned to the User successfully');
    await expect(page.getByRole('button', { name: 'Ok' })).toBeVisible();
    await expect(page.locator('button[name="success"]')).toContainText('Ok');
    await page.getByRole('button', { name: 'Ok' }).click();
  });