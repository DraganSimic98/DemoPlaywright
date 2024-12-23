import { Page, Locator } from "@playwright/test";


class SearchPage {
page: Page;
searchInput: Locator;

    constructor(page: Page){
        this.page = page;
        this.searchInput = page.locator('//input[@placeholder = "what are you looking for?"]');
    }
}

export default SearchPage;