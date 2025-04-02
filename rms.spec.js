// @ts-check
import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path'

// Read from ".env" file.
dotenv.config({ path: path.resolve(__dirname, '.env') });

test('rms for dms', async({page}) => { 
    await page.goto('https://uat-webserver.cso.ie/RMS/client/');
    await page.getByRole('textbox', {name:'Enter a CSO Identifier..'}).click();
})
