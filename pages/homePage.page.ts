import{Page, Locator} from '@playwright/test'

class HomePage{
    page: Page;
    logo: Locator;
    searchButton: Locator;

constructor(page: Page){
    this.page = page;
    this.logo = page.locator('//img[@alt = "Header Logo"]');
    this.searchButton = page.locator('//div/a[@text = "Search"]');
    }

    async navigation(){
        await this.page.goto('/index');
    }

    async clickButton(anyBtn: Locator){
        await anyBtn.click();
    }
}

export default HomePage;