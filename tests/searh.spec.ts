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
        await homePage.clickButton(homePage.searchButton);
        await expect(page).toHaveURL(/.*search/);
    })
    
})
