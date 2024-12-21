import{Page, Locator} from '@playwright/test'

class HomePage{
page: Page;

constructor(page: Page){
    this.page = page;
}
}