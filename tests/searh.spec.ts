import { test, expect } from "@playwright/test";
import HomePage from "../pages/homePage.page";
import SearchPage from "../pages/searchPage.page";

test.describe('Serach for country', () => {
let homePage: HomePage;
let searchPage: SearchPage;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    searchPage = new SearchPage(page);
    await homePage.navigation();
})
    test('Search', async ({ page }) => {
        await homePage.searchButton.click();
        await expect(page).toHaveURL(/.*search/);
        const searchInput = page.getByPlaceholder('what are you looking for?');

        await searchInput.fill('Serbia');
        await searchInput.press('Enter');
       
        expect(page.url()).toContain('search?q=Serbia')
       
    })

})
