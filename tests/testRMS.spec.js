// @ts-check
import { test, expect } from '@playwright/test';

test('rms for dms', async({page}) => { 
    await page.goto('https://uat-webserver.cso.ie/RMS/client/');
    await page.getByRole('textbox', {name:'Enter a CSO Identifier..'}).click();
})
