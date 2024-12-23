import { Page, Locator } from "@playwright/test";


class SearchPage {
page: Page;

    constructor(page: Page){
        this.page = page;
    }
}

export default SearchPage;