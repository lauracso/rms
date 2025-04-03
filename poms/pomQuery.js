import { test, expect } from '@playwright/test';

exports.QueryPom = class QueryPom {

    constructor (page) {
        this.page=page;
        this.boxCSOIdentifier = page.locator('#enterpriseNumber');
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
        this.slctrAssignTo = page.getByLabel('Assign To:');
        
        this.rangeDateRng = page.locator('#slider-range div');
    }

    async goto() {
        await this.page.goto('https://uat-webserver.cso.ie/RMS/client/');
    }
    async getStarted() {
        await expect(this.boxCSOIdentifier).toBeVisible();

    }    
    async pageObjectModel() {
        await this.getStarted();
        await this.boxCSOIdentifier.click();
    }
}