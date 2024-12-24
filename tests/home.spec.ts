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
    })

    
    test('Verification of Menu Tabs text & Links', async ({ page }) => {
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

        const navItems = homePage.navItems;
       
        console.log(navItems);
        
        for(const element of await navItems.elementHandles()){
            console.log(await element.textContent());
        }

        expect(await homePage.getNavText()).toEqual(expectedNames);
        
    })
    
})
