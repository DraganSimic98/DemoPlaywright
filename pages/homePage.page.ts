import{Page, Locator} from '@playwright/test'

class HomePage{
    page: Page;
    logo: Locator;
    searchButton: Locator;
    navItems: Locator;

constructor(page: Page){
    this.page = page;
    this.logo = page.locator('//img[@alt = "Header Logo"]');
    this.searchButton = page.locator('//div/a[@text = "Search"]');
    this.navItems = page.locator('//div[@class="grow"]//div[contains(@class, "nav-item-wrapper") and not(contains(@class, "lg:hidden"))]/a')
    }

    async navigation(){
        await this.page.goto('/index');
    }
    getNavText(){
        return this.navItems.allTextContents();
    }
}

export default HomePage;