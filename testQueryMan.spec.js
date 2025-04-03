import { test, expect } from '@playwright/test';
import { QueryPom } from './poms/pomQuery'; 
//import { username, password } from '@myhelper/credentials';

test('retrieve aer lingus', async({page}) => { 
    const qp =  new QueryPom(page);
    const aerLingus = 'EN00000004';
    await qp.goto();
    await qp.getStarted();

    /* enter aer lingus identifier and click on search */
    await qp.pageObjectModel();
    
});