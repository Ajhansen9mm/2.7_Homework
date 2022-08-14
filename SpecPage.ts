import {By, WebDriver, until} from "selenium-webdriver";

// need to pull url
// need chromedriver
// need navigate async
// 


export class SpecPage {
    url = "http://www.google.com"
    driver:WebDriver;

    searchBar = By.name("q")
    results = By.id("rso")

    constructor(driver: WebDriver){
       this.driver = driver;
    }

    async getResults() {
       return this.getText(this.results)
        
    }

    async sendKeys(elementBy : By, keys ) {
        await this.driver.wait(until.elementLocated(elementBy))
        return this.driver.findElement(elementBy).sendKeys(keys)
    }

    async getText(elementBy : By){
        await this.driver.wait(until.elementLocated(elementBy))
        return this.driver.findElement(elementBy).getText()
    }
    async navigate(){
       await this.driver.navigate().to(this.url)
       await this.driver.wait(until.elementLocated(this.searchBar))
    }

    async doSearch(text: string) {
        return this.sendKeys(this.searchBar, `${text}\n`)

    }

    
}