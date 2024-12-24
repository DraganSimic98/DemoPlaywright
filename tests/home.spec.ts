import{test,expect} from '@playwright/test'
import HomePage from '../pages/homePage.page'

test.describe('Verify the URL and the logo', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigation();
    })
    
    test('Url and Logo check', async ({ page }) => {
        
        await expect(homePage.logo).toBeVisible();
        expect(page.url()).toContain('cricket');
        expect(page).toHaveURL(/cricket/);
    })
    
    test('Verification of Menu Tabs text', async ({ page }) => {
        const navItems = homePage.navItems;
        const expectedNames = [
            "Matches",
            "Rankings",
            "News",
            "Videos",
            "Teams",
            "Awards",
            "Travel",
            "Shop"
        ];

        for(const element of await navItems.elementHandles()){
            console.log(await element.textContent());
        }

        expect(await homePage.getNavText()).toEqual(expectedNames);  
    })

    test('Verify new tab and assert title', async ({ page }) => {
       
        //Click on the link and wait for the new tab to get triggered
        const [newPage] = await Promise.all([
            page.waitForEvent('load'),
            page.getByRole('link', {name: 'Matches'}).click()
        ]);
        
        await newPage.waitForLoadState();

        await expect(newPage).toHaveTitle('Cricket Fixtures and Results | ICC');
        await newPage.close();
    })
    
})
