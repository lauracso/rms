


import { defineConfig, test, expect } from '@playwright/test';

test('query interaction add comment', async ({ page }) => {
  await page.goto('https://uat-webserver.cso.ie/RMS/client');
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

  test('ensure error message if ten chars not entered for an org id', async ({page}) =>{
    await page.goto('https://uat-webserver.cso.ie/RMS/client/');
    await page.getByRole('textbox', { name: 'Enter a CSO Identifier..' }).fill('*');
    await page.getByRole('textbox', { name: 'Enter a CSO Identifier..' }).press('Enter');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('textbox', { name: 'Please enter at least 10' }).click();
    await page.getByRole('textbox', { name: 'Please enter at least 10' }).fill('**********');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('textbox', { name: 'CSO Identifier must contain' }).click();
    await page.locator('#enterpriseNumber-search-form i').click();
    await page.getByText('CSO Identifier must contain').click();
    await expect(page.getByText('CSO Identifier must contain')).toBeVisible();
    await expect(page.locator('#enterpriseNumber-error')).toContainText('CSO Identifier must contain only letters, numbers, or dashes.');
    
  });

  test('retrieve an org to create a query.', async ({ page }) => {
    await page.goto('https://uat-webserver.cso.ie/RMS/client/');
    await page.getByRole('textbox', { name: 'Enter a CSO Identifier..' }).fill('EN00000004');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('button', { name: ' View Queries' }).click({
      button: 'right'
    });
    await expect(page.getByRole('button', { name: ' View Queries' })).toBeVisible();
    await expect(page.getByRole('button', { name: ' Comments' })).toBeVisible();
    await expect(page.locator('#entcomments')).toContainText('Comments');
    await expect(page.getByRole('button', { name: ' View Queries' })).toBeVisible();

    await expect(page.locator('#viewQueries')).toContainText('View Queries');
    await page.getByRole('button', { name: ' Comments' }).click();
    await page.getByRole('link', { name: ' Unit Details' }).click();
    await page.getByRole('button', { name: ' View Queries' }).click();
    await page.getByRole('row', { name: ' Monthly Services Inquiry' }).locator('i').click();
    await page.getByRole('link', { name: 'Query Management' }).click();
    await page.getByText('Queries Logged by me').click();
    await page.getByRole('link', { name: 'Home' }).click();
    
    await page.goto('https://uat-webserver.cso.ie/RMS/client/');
    await page.getByRole('textbox', { name: 'Enter a CSO Identifier..' }).fill('EN00000004');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('cell', { name: ' Monthly Services Inquiry' }).click();

    await page.getByRole('row', { name: 'Monthly Services Inquiry EN00000004 2025M02 28/02/2025 - action buttons  View' }).locator('#view-survey-instance-details').click();
    await expect(page.getByRole('button', { name: ' Create Query' })).toBeVisible();
    await expect(page.locator('#create-query')).toContainText('Create Query');
    await expect(page.getByRole('button', { name: ' Close' })).toBeVisible();
    await expect(page.locator('#survey-instance-modal')).toContainText('Close');
    await page.getByRole('button', { name: ' Create Query' }).click();
    await page.locator('#select2-user-select-create-query-search-container').click();
    await page.getByRole('option', { name: 'Laura Egar' }).click();
    await page.getByRole('textbox', { name: 'Query:' }).click();
    await page.getByRole('textbox', { name: 'Query:' }).fill('automated query generation');
    await expect(page.getByRole('textbox', { name: 'Laura Egar' })).toBeVisible();
    
    await expect(page.locator('#select2-user-select-create-query-search-container')).toContainText('×Laura Egar');
    await expect(page.locator('#survey-instance-modal').getByText('EN00000004', { exact: true })).toBeVisible();
    await expect(page.locator('#survey-instance-modal')).toContainText('EN00000004');
    await expect(page.locator('#survey-instance-modal')).toContainText('EN00000004 - AER LINGUS LTD (TEO)');
    await expect(page.locator('#submit-query')).toContainText('Submit Query');
    
    await expect(page.locator('#survey-instance-modal')).toContainText('Close');
    await page.getByRole('button', { name: ' Submit Query' }).click();
    await expect(page.locator('#modal-confirm div').filter({ hasText: 'Assign New Query Are you sure' }).nth(2)).toBeVisible();
    await expect(page.getByText('Assign New Query', { exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: ' Cancel' })).toBeVisible();
    await expect(page.getByRole('button', { name: ' Confirm' })).toBeVisible();
    await expect(page.locator('#modal-confirm')).toContainText('Assign New Query');
    await expect(page.locator('#modal-confirm')).toContainText('Are you sure you want to assign new query to Laura Egar?');
    await expect(page.locator('button[name="cancel-confirm"]')).toContainText('Cancel');
    await expect(page.locator('button[name="confirm"]')).toContainText('Confirm');
    await page.getByRole('button', { name: ' Confirm' }).click();
    await page.getByRole('button', { name: 'Ok' }).click();
  });

  //to finish
  test('check the checkboxes are not selected' , async ({page}) => {
    await page.goto('https://uat-webserver.cso.ie/RMS/client');

  });

 