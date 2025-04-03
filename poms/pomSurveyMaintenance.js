/* a POM for what should appear when the survey maintenance of RMS for DMS is pressed */
import { test, expect } from '@playwright/test';

exports.SurveyMaintenance = class SurveyMaintenance {
    /*
        @param {import('@playwright/test').Page} page 
    */     
    constructor(page) {
        this.page = page;
        this.buttonAddSurvey = page.getByRole('button', { name:' Add Survey to RMS '});
        this.boxSearchBox = page.locator('#dt-search-0');
        this.drpdwnEntries = page.locator('#dt-length-0');\
        this.tblHdngDMSSurveyId = page.getByRole('button', {name: 'DMS Survey ID'});
        this.tblHdngSurveyText = page.getByRole('button', {name: 'Survey Text'} );
        this.tblHeadingSurveyDescription = page.getByRole('button' , {name: 'Survey Description'});
        this.tblSurveyCode = page.getByRole('button', {name: 'Survey Code'});
        this.tblSurveyStatus = page.getByRole('button', { name: 'Status'});
        this.buttonStatus = page.getByRole('badge')


    }
}