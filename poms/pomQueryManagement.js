import { defaultConfig, test, expect} from '@playwright/test'

exports.QueryManPom = class QueryManPom {
    //this is the pom for what appears when you are logged in and you click on the query management button

    constructor(page) {

        this.page = page;
        this.btnQueryManagement = page.locator('#nav-link-query-management');
        this.btnQueryManagementText = "Query Management";
        this.dropdownEntriesPerPage = page.getByLabel('entries per page');
        this.lblLoggedQueries = page.getByText('Queries Logged by me');
        this.chkBoxLoggedQueries = page.getByRole('checkbox', { name: 'Queries Logged by me' });
        this.lblAssignedQueries = page.getByText('Queries Assign to me'));
        this.chkBoxAssignedQueries = page.getByRole('checkbox', { name: 'Queries Assign to me' });
        this.lblSurvery = page.getByText('Survey:');
        this.lblStatus = page.getByText('Status:');
        this.lblDateRange = page.getByText('Date range:')
        this.sliderDaterange = page.locator('#slider-range div');
        this.lblQueriesLoggedByMe = page.getByText('Queries Logged by me Queries');
        this.lblUnitType = page.getByText('Unit Type:');
        this.unitType = page.locator('#unit_type');
        this.lblLoggedBy = page.getByText('Logged By:');
        this.dropdownLoggedBy = page.getByLabel('Logged By:', { exact: true });
        this.lblAssignTo = page.getByText('Assign To:');
        this.dropdownAssignTo = page.getByLabel('AssignTo');
        this.filterSurvey = page.locator(page.locator('#show-filter'));
        this.mainQueryManagementHeadre = page.locator('#body').getByText('Query Management');
        this.counterEntriesPerPage = page.getByText('entries per page');
        this.lblEntriesPerPage = page.locator('#query-namagement-table_wrapper');
        this.dropdownMonthlySurveys = page.getByLabel('Survey:', { exact: true });
        this.optionsSurvey = page.getByLabel('Survey:', { exact: true }).selectOption('Monthly Services Inquiry');
        this.breadcrumbEntriesPerPage = page.getByText('entries per page');

}

async goto() {
    await this.page.goto('https://uat-webserver.cso.ie/RMS/client/');
}
async getStarted() {

    //find all the elements you would expect in the query management page  after the query management button is clicked.

    await expect(this.boxCSOIdentifier).toBeVisible();
    await expect(this.btnQueryManagement).toBeVisible();
    await expect(this.btnQueryManagement).toContainText(btnQueryManagementText);
    await expect(this.dropdownEntriesPerPage.toBeVisible());
    
    await expect(this.lblLoggedQueries.toBeVisible());
    await expect(this.lblAssignedQueries.toBeVisible());
    await expect(this.chkBoxAssignedQueries.toBeVisible());

    expect(this.lblEntriesPerPage.toContainText('entries per page'));

    await expect(page.getByLabel('Survey:', { exact: true })).toContainText('All Monthly Services Inquiry');
    await page.getByLabel('Survey:', { exact: true }).selectOption('Monthly Services Inquiry');
    await expect(page.locator('#query-management-table_wrapper')).toContainText('entries per page');
    await expect(page.getByText('entries per page')).toBeVisible();
    await expect(page.getByLabel('entries per page')).toContainText('102550100');
    await expect(page.locator('div').filter({ hasText: /^Search:$/ }).first()).toBeVisible();
    await expect(page.getByText('Search:')).toBeVisible();
    await expect(page.locator('#query-management-table_wrapper')).toContainText('Search:');
    await expect(page.locator('#query-management-table_wrapper')).toMatchAriaSnapshot(`- text: "Search:"`);
    await expect(page.getByRole('searchbox', { name: 'Search:' })).toBeVisible();
    await expect(page.getByText('Logged By:')).toBeVisible();
    await expect(page.getByLabel('Logged By:', { exact: true })).toBeVisible();
    await expect(page.getByText('Assign To:')).toBeVisible();
    await expect(page.getByLabel('Assign To:')).toBeVisible();
    await expect(page.locator('#show-filter')).toContainText('Survey:');
    await expect(this.page.dropdownMonthlySurveys('Survey:', { exact: true })).toContainText('All Monthly Services Inquiry');
    await expect(this.page.breadcrumbEntriesPerPage.toContainText('102550100'));
    await expect(this.page.dropdownMonthlySurveys('Survey:', { exact: true })).toContainText('All Monthly Services Inquiry');
    await expect(this.page.lblEntriesPerPage.toContainText('entries per page'));
  
    await expect(page.getByText('entries per page')).toBeVisible();
    await expect(this.breadcrumbEntriesPerPage.toContainText('102550100'));
    await expect(page.locator('div').filter({ hasText: /^Search:$/ }).first()).toBeVisible();
    await expect(page.getByText('Search:')).toBeVisible();
    await expect(page.locator('#query-management-table_wrapper')).toContainText('Search:');
    await expect(page.locator('#query-management-table_wrapper')).toMatchAriaSnapshot(`- text: "Search:"`);
    await expect(page.getByRole('searchbox', { name: 'Search:' })).toBeVisible();
    await expect(page.getByText('Logged By:')).toBeVisible();
    await expect(page.getByLabel('Logged By:', { exact: true })).toBeVisible();
    await expect(page.getByText('Assign To:')).toBeVisible();
    await expect(page.getByLabel('Assign To:')).toBeVisible();
    await expect(page.locator('#show-filter')).toContainText('Survey:');

}    
async pageObjectModel() {
    await this.getStarted();
    await this.boxCSOIdentifier.click();
}
}