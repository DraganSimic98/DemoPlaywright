import{Page, Locator} from '@playwright/test'

class HomePage{
    page: Page;
    logo: Locator;

constructor(page: Page){
    this.page = page;
    this.logo = page.locator('//img[@alt = "Header Logo"]');
    }

    async navigation(){
        await this.page.goto('/');
    }
}

export default HomePage;