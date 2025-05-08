import { defineConfig, test, expect } from '@playwright/test';

test('survey maintenance - create new survey', async ({ page }) => {
    await page.goto('https://uat-webserver.cso.ie/RMS/client/');
    await page.getByRole('link', { name: 'Survey Maintenance' }).click();
    await page.getByRole('button', { name: ' Add Survey to RMS' }).click();
    await page.getByRole('combobox', { name: 'Start typing...' }).click();
    await page.getByRole('option', { name: 'Admin (Revenue) CT Survey' }).click();
    await page.locator('#survey-comment').click();
    await page.locator('#survey-comment').fill('playwright added this');
    await page.getByRole('button', { name: ' Add', exact: true }).click();
    await page.getByRole('button', { name: ' Confirm' }).click();
    await page.getByRole('button', { name: 'Ok' }).click();
});

test('survey maintenance - cancel out of creating a new survey',  async ({page}) =>  {
    await page.goto('https://uat-webserver.cso.ie/RMS/client/');
    await page.getByRole('link', { name: 'Survey Maintenance' }).click();
    await page.getByRole('button', { name: ' Add Survey to RMS' }).click();
    await page.getByRole('button', { name: ' Cancel' }).click();

});
  /*
  await expect(page.locator('#add-new-survey-modal-create')).toContainText('Admin (Revenue) CT Survey');
  await expect(page.locator('#survey-comment')).toBeVisible();
  await expect(page.getByRole('button', { name: ' Cancel' })).toBeVisible();
  await expect(page.getByRole('button', { name: ' Add', exact: true })).toBeVisible();
  await page.locator('#survey-comment').click();
  await page.locator('#survey-comment').fill('test survery added by playwright');
  await page.locator('#add-new-survey-modal-create div').filter({ hasText: 'Search Veterinary Surgeons' }).nth(2).click();
  await page.getByRole('button', { name: ' Add', exact: true }).click();
  await expect(page.locator('#modal-confirm div').filter({ hasText: 'Add Survey to RMS Are you' }).nth(2)).toBeVisible();
  await expect(page.locator('#modal-confirm i').first()).toBeVisible();
  await expect(page.locator('#modal-confirm').getByText('Add Survey to RMS')).toBeVisible();
  await expect(page.getByText('Are you sure you want to add')).toBeVisible();
  await expect(page.locator('#modal-confirm')).toContainText('Are you sure you want to add Admin (Revenue) CT Survey survey to RMS?');
  await expect(page.locator('button[name="confirm"]')).toContainText('Confirm');
  await expect(page.getByRole('button', { name: ' Confirm' })).toBeVisible();
  await expect(page.getByRole('button', { name: ' Cancel' })).toBeVisible();
  await expect(page.locator('button[name="cancel-confirm"]')).toContainText('Cancel');
  await expect(page.locator('#modal-confirm')).toContainText('Add Survey to RMS Are you sure you want to add Admin (Revenue) CT Survey survey to RMS? Cancel Confirm');
  await page.getByRole('button', { name: ' Confirm' }).click();
  await expect(page.locator('#modal-success div').filter({ hasText: 'Success New RMS Survey added' }).nth(2)).toBeVisible();
  await expect(page.getByText('Success', { exact: true })).toBeVisible();
  await expect(page.getByText('New RMS Survey added')).toBeVisible();
  await expect(page.locator('#modal-success')).toContainText('New RMS Survey added successfully');
  await expect(page.locator('#modal-success')).toContainText('Success');
  await expect(page.getByRole('button', { name: 'Ok' })).toBeVisible();
  await page.getByRole('button', { name: 'Ok' }).click();
  await page.getByRole('row', { name: '6149 Admin (Revenue) CT' }).locator('#view-survey-maintenance-details').click();
  await expect(page.locator('#add-new-user-survey')).toContainText('Add User');
  await expect(page.getByRole('button', { name: ' Add User' })).toBeVisible();
  await expect(page.locator('#add-new-user-survey')).toContainText('Add User');
  await page.getByRole('button', { name: ' Add User' }).click();
  await page.locator('#user-select-survey-create-type').selectOption('1');
  await page.getByRole('combobox', { name: 'Start typing...' }).click();
  await page.getByRole('option', { name: 'Laura Egar' }).click();
  await page.locator('#user-comment-survey').click();
  await page.locator('#user-comment-survey').fill('added by playwright');
  await expect(page.locator('#user-survey-modal-create div').filter({ hasText: 'Search' }).nth(4)).toBeVisible();
  await expect(page.locator('#user-survey-modal-create').getByText('Username')).toBeVisible();
  await expect(page.locator('#user-survey-modal-create').getByText('Name', { exact: true })).toBeVisible();
  await expect(page.locator('#user-survey-modal-create div').filter({ hasText: 'Email' }).nth(4)).toBeVisible();
  await expect(page.locator('#user-survey-modal-create').getByText('Role', { exact: true })).toBeVisible();
  await expect(page.locator('#user-survey-modal-create').getByText('Comment')).toBeVisible();
  await page.getByRole('button', { name: ' Add', exact: true }).click();
  await expect(page.locator('#modal-confirm i').first()).toBeVisible();
  await expect(page.getByText('Add User to Survey')).toBeVisible();
  await expect(page.getByText('Admin (Revenue) CT SurveyAdmin (Revenue) CT Survey')).toBeVisible();
  await expect(page.locator('#modal-confirm')).toContainText('Admin (Revenue) CT SurveyAdmin (Revenue) CT Survey');
  await expect(page.locator('button[name="confirm"]')).toContainText('Confirm');
  await expect(page.locator('button[name="cancel-confirm"]')).toContainText('Cancel');
  await page.getByRole('button', { name: ' Confirm' }).click();
  await expect(page.locator('#modal-success div').filter({ hasText: 'Success New User added to the' }).nth(2)).toBeVisible();
  await page.getByRole('button', { name: 'Ok' }).click();
*/

