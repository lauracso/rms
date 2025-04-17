import { test, expect } from '@playwright/test';

exports.QueryListingPom = class QueryListingPom {

    constructor(page) {
        this.page = page;
        this.cellSurvey = page.getByRole('cell', { name: 'Survey Name: Activate to' });
        this.btnDMSUnit = page.getByRole('button', { name: 'DMS Unit ID' });
        this.btnSurveyPeriod =  page.getByRole('button', { name: 'Survey Period' });
        this.btnIssueDate = page.getByRole('button', { name: 'Issue Date' });
        this.btnReceivedDate = page.getByRole('button', { name: 'Received Date' });
        this.nameOfSurvey = page.getByRole('row', { name: ' Monthly Services Inquiry' }).locator('i');
        this.bcFirst = page.getByRole('listitem').filter({ hasText: '«' });
        this.bcPrevious = page.getByRole('listitem').filter({ hasText: '‹' });
        this.paginatorPg1 = page.getByRole('link', { name: '1' });
        this.bcNext = page.getByRole('listitem').filter({ hasText: '›' });
        this.bcLast =  page.getByRole('listitem').filter({ hasText: '»' });
        this.btnSurveyName =  page.getByRole('button', { name: 'Survey Name' });
        this.btnDMSUnitId = page.getByRole('button', { name: 'DMS Unit ID' });
        this.btnSurveyPeriod = page.getByRole('button', { name: 'Survey Period' });
        this.btnIssueDate = page.getByRole('button', { name: 'Issue Date' });
        this.btnReceivedDate = page.getByRole('button', { name: 'Received Date' });
        this.sorterSurveyName = page.getByRole('cell', { name: 'Survey Name: Activate to' }).locator('span').nth(1);
        this.sorterDMSUnitID = page.getByRole('cell', { name: 'DMS Unit ID: Activate to sort' }).locator('span').nth(1);
        this.sorterSurveyPeriod = page.getByRole('cell', { name: 'Survey Period: Activate to' }).locator('span').nth(1);
        this.sorterIssueDate = page.getByRole('cell', { name: 'Issue Date: Activate to sort' }).locator('span').nth(1);
        this.sorterReceivedDate =  page.getByRole('cell', { name: 'Received Date: Activate to' }).locator('span').nth(1);
    }

    async goto() {
        await this.page.goto('https://uat-webserver.cso.ie/RMS/client/');
    }

    async getStarted() {    
        await this.page.goto('https://uat-webserver.cso.ie/RMS/client/');
        await this.page.getByRole('textbox', { name: 'Enter a CSO Identifier..' }).fill('EN00000004');
        await this.page.getByRole('button', { name: 'Search' }).click();
    }

    async pageObjectModel() {
        await this.getStarted();
    }
}
