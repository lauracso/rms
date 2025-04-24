import { defineConfig, test, expect } from '@playwright/test';
import { QueryPom } from '../poms/pomQuery'; 

test('retrieve aer lingus', async({page}) => { 
   
    const qp =  new QueryPom(page);
    const aerLingus = 'EN00000004';
    await qp.goto();
    await qp.getStarted();
    await qp.pageObjectModel();
    
});

