import { test, expect } from '@playwright/test';

exports.QueryPom = class QueryPom {

    constructor (page) {
        this.page=page;
        this.fieldCSOIdentifier = .page.getByRole('textbox', { name: 'Enter a CSO Identifier..' });
        this.btnEnterpriseSearch = page.getByRole('button', { name: 'Search' });
        this.btnOK = page.getByRole('button', { name: 'Ok' });
        this.btnQueryManagement = page.getByRole('link', { name: 'Query Management' });

        this.chkbxQueriesLoggedByMe = page.getByRole('checkbox', {name: 'Queries Logged by me'});
        this.chkbxQuerisAssignedToMe = page.getByRole('checkbos', { name: 'Queries Assign to me'});

        this.lblQueriesLoggedByMe = page.getByText('Queries Logged by me');
        this.lblQueriesAssignedToMe = page.getByText('Queries Assign to me');
        this.lblSurvey = page.getByText('Survey:');
        this.lblStatus = page.getByText('Status');
        this.lblDateRange = page.getByText('Date range:');
        this.lblUnitType = page.getByText('Unit Type:');
        this.lblLoggedBy = page.getByText('Logged By:');
        this.lblAssignTo = page.getByText('Assign To:');

        this.slctrSurvey = page.getByLabel('Survey:', { exact: true });
        this.slctrStatus = page.locator('#status');

        this.slctrUnitType = page.locator('#unit_type');
        this.slctrLoggedBy = page.getByLabel('Logged By:', { exact: true });
        this slctrAssignTo = page.getByLabel('Assign To:');
        
        this.rangeDateRng = page.locator('#slider-range div')
    }

    async getStarted() {
        await expect(this.navLoggedInUser).toBeVisible();
        await expect(this.navHomeLink).toBeVisible();
   }
 async pageObjectModel() {
     await this.navLoggedInUser.click();
 }
}

/**
 * Create Query  

As an administrator,   

I want to create a query,  

So that an open query is added to the RMS.  
 * import { test, expect } from '@playwright/test';

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    //aer lingus query
  await page.getByRole('textbox', { name: 'Enter a CSO Identifier..' }).fill('EN00000004');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByText('CBR Legal Name: Legal Test Company 17033927 CBR FTE: 5186 CBR Lifecycle:').click();
  await page.getByRole('row', { name: ' Monthly Services Inquiry' }).locator('i').click();
  await page.getByRole('row', { name: 'Monthly Services Inquiry EN00000004 2025M03 31/03/2025 - action buttons  View' }).locator('#view-survey-instance-details').click();
  await page.getByRole('button', { name: ' Create Query' }).click();
  await page.locator('#select2-user-select-create-query-search-container').click();
  await page.getByRole('option', { name: 'Laura Egar' }).click();
  await page.getByRole('textbox', { name: 'Query:' }).click();
  await page.getByRole('textbox', { name: 'Query:' }).fill('Test Query for EN00000004');
  await page.getByRole('button', { name: ' Submit Query' }).click();
  await page.getByRole('button', { name: ' Confirm' }).click();
  await page.getByRole('button', { name: 'Ok' }).click();
  await page.getByRole('link', { name: 'Query Management' }).click();
  await page.getByRole('cell', { name: 'Open' }).locator('span').click();
  await page.getByRole('row', { name: 'Monthly Services Inquiry EN00000004 2025M03 Laura.egar@cso.ie Laura Egar Key 03' }).locator('#view-query-management').click();
  await page.getByRole('button', { name: 'Re Assign Query ' }).click();
  await page.locator('#select2-assignToList-container').click();
  await page.getByRole('option', { name: 'Caroline Donegan' }).click();
  await page.locator('#query-update-action-comment-assignTo').click();
  await page.locator('#query-update-action-comment-assignTo').fill('testing');
  await page.getByRole('button', { name: 'Submit', exact: true }).click();
  await page.getByRole('button', { name: ' Cancel' }).click();
  await page.getByRole('button', { name: 'Re Assign Query ' }).click();
  await page.getByText('Start typing...').click();
  await page.getByRole('option', { name: 'Caroline Donegan' }).click();
  await page.locator('#query-update-action-comment-assignTo').click();
  await page.locator('#query-update-action-comment-assignTo').fill('test');
  await page.getByRole('button', { name: 'Submit', exact: true }).click();
  await page.getByRole('button', { name: ' Confirm' }).click();
  await page.getByRole('button', { name: 'Ok' }).click();
  await page.getByRole('row', { name: 'Monthly Services Inquiry EN00000004 2025M03 Caroline.Donegan@cso.ie Laura Egar' }).locator('#view-query-management').click();
  await page.getByRole('button', { name: 'Close Query ' }).click();
  await page.locator('#query-update-action-comment-closedCall').click();
  await page.locator('#query-update-action-comment-closedCall').fill('test');
  await page.getByRole('button', { name: ' Cancel' }).click();
  await page.locator('#body div').filter({ hasText: 'Re Assign Query Close Query' }).nth(2).click();
  await page.getByRole('button', { name: 'Close Query ' }).click();
  await page.locator('#query-update-action-comment-closedCall').click();
  await page.locator('#query-update-action-comment-closedCall').fill('test');
  await page.getByRole('button', { name: 'Submit', exact: true }).click();
  await page.getByRole('button', { name: ' Cancel' }).click();
  await page.getByRole('button', { name: 'Re Assign Query ' }).click();
  await page.getByRole('combobox', { name: 'Start typing...' }).click();
  await page.getByRole('option', { name: 'Laura Egar' }).click();
  await page.locator('#query-update-action-comment-assignTo').click();
  await page.locator('#query-update-action-comment-assignTo').fill('test reassign');
  await page.getByRole('button', { name: 'Submit', exact: true }).click();
  await page.getByRole('button', { name: ' Confirm' }).click();
  await page.locator('#modal-success i').click();
  await page.getByText('Success', { exact: true }).click();
  await page.getByText('Query re assigned to the User').click();
  await page.locator('#modal-success div').filter({ hasText: 'Success Query re assigned to' }).nth(2).click();
  await page.getByRole('button', { name: 'Ok' }).click();
  await expect(page.getByRole('cell', { name: 'Monthly Services Inquiry' }).nth(1)).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Open' }).locator('span')).toBeVisible();
  await expect(page.getByRole('row', { name: 'Monthly Services Inquiry EN00000004 2025M03 Laura.egar@cso.ie Laura Egar Key 03' }).locator('#view-query-management')).toBeVisible();
  await expect(page.locator('tbody')).toContainText('2025M03');
  await page.getByRole('cell', { name: 'Laura Egar' }).click();
  await expect(page.locator('#query-management-table_wrapper')).toMatchAriaSnapshot(`
    - table:
      - rowgroup:
        - 'row "Survey: Activate to invert sorting DMS Unit ID: Activate to sort Period: Activate to sort Assigne To: Activate to sort Logged By: Activate to sort Unit Type: Activate to sort Logged: Activate to sort Status : Activate to sort"':
          - 'cell "Survey: Activate to invert sorting"':
            - button "Survey"
          - 'cell "DMS Unit ID: Activate to sort"':
            - button "DMS Unit ID"
          - 'cell "Period: Activate to sort"':
            - button "Period"
          - 'cell "Assigne To: Activate to sort"':
            - button "Assigne To"
          - 'cell "Logged By: Activate to sort"':
            - button "Logged By"
          - 'cell "Unit Type: Activate to sort"':
            - button "Unit Type"
          - 'cell "Logged: Activate to sort"':
            - button "Logged"
          - cell "Status"
          - 'cell ": Activate to sort"':
            - button
      - rowgroup:
        - row /Monthly Services Inquiry EN00000004 2025M03 Mary\\.Griffin@cso\\.ie Brendan Browne Key \\d+\\/\\d+\\/\\d+ In Progress  View/:
          - cell "Monthly Services Inquiry"
          - cell "EN00000004"
          - cell "2025M03"
          - cell "Mary.Griffin@cso.ie"
          - cell "Brendan Browne"
          - cell "Key"
          - cell /\\d+\\/\\d+\\/\\d+/
          - cell "In Progress"
          - cell " View":
            - button " View"
        - row /Monthly Services Inquiry EN00000004 2025M03 Laura\\.egar@cso\\.ie Laura Egar Key \\d+\\/\\d+\\/\\d+ Open  View/:
          - cell "Monthly Services Inquiry"
          - cell "EN00000004"
          - cell "2025M03"
          - cell "Laura.egar@cso.ie"
          - cell "Laura Egar"
          - cell "Key"
          - cell /\\d+\\/\\d+\\/\\d+/
          - cell "Open"
          - cell " View":
            - button " View"
      - rowgroup
    `);
  await expect(page.getByRole('row', { name: 'Monthly Services Inquiry EN00000004 2025M03 Laura.egar@cso.ie Laura Egar Key 03' }).locator('#view-query-management')).toBeVisible();
  await page.getByText('RMS for DMS RMS for DMS').dblclick();
  await page.getByRole('cell', { name: 'In Progress' }).locator('span').click();
  await expect(page.getByRole('row', { name: 'Monthly Services Inquiry EN00000004 2025M03 Mary.Griffin@cso.ie Brendan Browne' }).locator('#view-query-management')).toBeVisible();
  await expect(page.getByRole('row', { name: 'Monthly Services Inquiry EN00000004 2025M03 Laura.egar@cso.ie Laura Egar Key 03' }).locator('#view-query-management')).toBeVisible();
});

  await page.goto('https://uat-webserver.cso.ie/RMS/Client/');
  await expect(page.getByRole('link', { name: 'Query Management' })).toBeVisible();
  await expect(page.locator('#nav-link-query-management')).toContainText('Query Management');
  await page.getByRole('link', { name: 'Query Management' }).click();
  await page.locator('#show-filter div').filter({ hasText: 'Queries Logged by me Queries' }).first().click();
  await page.getByRole('checkbox', { name: 'Queries Assign to me' }).check();
  await expect(page.getByText('Queries Assign to me')).toBeVisible();
  await expect(page.locator('#show-filter')).toContainText('Queries Assign to me');
  await expect(page.getByRole('cell', { name: 'Open' }).locator('span')).toBeVisible();
  await expect(page.getByRole('button', { name: ' View' })).toBeVisible();
  await page.getByRole('cell', { name: 'Open' }).locator('span').click();
  await page.getByRole('button', { name: ' View' }).click();
  await expect(page.getByRole('button', { name: 'Re Assign Query ' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Close Query ' })).toBeVisible();
  await expect(page.getByText('Assigned to: Laura.egar@cso.')).toBeVisible();
  await expect(page.getByText('Assigned to: Laura.egar@cso.')).toBeVisible();
  await expect(page.getByText('Query:')).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^Test Query for EN00000004$/ })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Query Interaction' })).toBeVisible();
  await expect(page.locator('#headingOne')).toContainText('Query Interaction');
  await expect(page.getByRole('textbox', { name: 'Please enter a query or reply' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Submit ' })).toBeVisible();
  await expect(page.getByLabel('Query Interaction').getByRole('button')).toContainText('Submit');
  await page.getByRole('button', { name: 'Notes' }).click();
  await page.locator('#body div').filter({ hasText: 'Home Unit Details View' }).nth(1).click();
  await page.getByRole('button', { name: 'Notes' }).click();
  await expect(page.getByRole('button', { name: 'Notes' })).toBeVisible();
  await page.getByRole('button', { name: 'Notes' }).click();
  await page.getByRole('button', { name: 'Notes' }).click();
  await page.getByRole('textbox', { name: 'Please enter a note' }).click();
  await expect(page.getByRole('textbox', { name: 'Please enter a note' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Submit ' })).toBeVisible();
  await expect(page.getByLabel('Notes').getByRole('button')).toContainText('Submit');
  await expect(page.getByRole('button', { name: 'History' })).toBeVisible();
  await expect(page.locator('#headingThree')).toContainText('History');
  await expect(page.getByRole('link', { name: '' })).toBeVisible();
  await expect(page.locator('#query-d')).toContainText('Query Management');
  await page.getByRole('link', { name: ' Query Management' }).click();
  await page.getByRole('row', { name: 'Monthly Services Inquiry EN00000004 2025M03 Laura.egar@cso.ie Laura Egar Key 03' }).locator('#view-query-management').click();
  await page.getByRole('link', { name: ' Query Management' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.goto('https://uat-webserver.cso.ie/RMS/Client/');
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('textbox', { name: 'Enter a CSO Identifier..' }).click();
  await page.getByRole('textbox', { name: 'Enter a CSO Identifier..' }).fill('EN00000004');
  await page.getByRole('textbox', { name: 'Enter a CSO Identifier..' }).press('Enter');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('row', { name: ' Monthly Services Inquiry' }).locator('i').click();
  await page.getByRole('listitem').filter({ hasText: '›' }).click();
  await page.getByRole('row', { name: 'Monthly Services Inquiry EN00000004 2025M01 30/01/2025 04/03/2025 action' }).locator('#view-survey-instance-details').click();
  await page.getByRole('button', { name: ' Create Query' }).click();
  await page.locator('#select2-user-select-create-query-search-container').click();
  await page.getByRole('option', { name: 'Laura Egar' }).click();
  await page.getByRole('textbox', { name: 'Query:' }).click();
  await page.getByRole('textbox', { name: 'Query:' }).fill('test test');
  await page.getByRole('button', { name: ' Submit Query' }).click();
  await page.getByRole('textbox', { name: 'Query: Please enter at least' }).fill('test test test');
  await expect(page.getByText('EN00000004 - AER LINGUS LTD (')).toBeVisible();
  await expect(page.locator('#survey-instance-modal').getByText('EN00000004', { exact: true })).toBeVisible();
  await expect(page.getByText('Key Unit')).toBeVisible();
  await expect(page.getByText('DMS Unit ID:')).toBeVisible();
  await expect(page.getByText('DMS Unit Type:')).toBeVisible();
  await expect(page.locator('#survey-instance-modal form div').filter({ hasText: 'Survey:' }).nth(3)).toBeVisible();
  await expect(page.getByText('Survey Name:')).toBeVisible();
  await expect(page.getByText('Survey Period:')).toBeVisible();
  await expect(page.locator('#survey-instance-modal').getByText('Monthly Services Inquiry')).toBeVisible();
  await expect(page.locator('#survey-instance-modal').getByText('2025M01')).toBeVisible();
  await expect(page.locator('#survey-instance-modal form div').filter({ hasText: 'Assign To:' }).nth(4)).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Laura Egar' })).toBeVisible();
  await page.getByRole('combobox', { name: '×Laura Egar' }).click();
  await expect(page.locator('#survey-instance-modal').getByRole('searchbox')).toBeVisible();
  await page.locator('#survey-instance-modal form div').filter({ hasText: 'Query:' }).nth(4).click();
  await expect(page.locator('#survey-instance-modal form div').filter({ hasText: 'Query:' }).nth(4)).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Query:' })).toBeVisible();
  await expect(page.getByRole('button', { name: ' Close' })).toBeVisible();
  await expect(page.getByRole('button', { name: ' Submit Query' })).toBeVisible();
});

 */