import{test,expect} from '@playwright/test'
import HomePage from '../pages/homePage.page'

test.describe('Verify the URL and the logo', () => {
    let homePage: HomePage;
    test('Url check', async ({ page }) => {
        expect(page).toHaveURL(/.*cricketworldcup/);
    })
    
})
