import { defineConfig, test, expect } from '@playwright/test';
import { QueryPom } from '../poms/pomQuery'; 
import { QueryManPom } from '../poms/pomQueryManagement';

test('retrieve aer lingus', async({page}) => { 
   
    const qp =  new QueryPom(page);
    const aerLingus = 'EN00000004';
    await qp.goto();
    await qp.getStarted();
    await qp.pageObjectModel();
    
});

test('test query management pom' , async ({page }) => {

    const qmp = new QueryManPom(page);
    await qmp.goto();
    await qmp.getStarted();
    await qmp.pageObjectModel();
});
