const {Builder, Capabilities, By } = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/week6/day3/automation/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})


describe("Checking functionality of movie cite", () => {

test ("I can add a movie", async () => {
    let searchBar = await driver.findElement(By.xpath('//input'));
    await searchBar.sendKeys('Happy Gilmore\n')
    await driver.sleep(2000)

})

test ("I can cross off a movie", async () => {
    let crossOff = await driver.findElement(By.xpath('//span'))
    await crossOff.click()
    await driver.sleep(2000)
    expect(await crossOff.getCssValue('text-decoration')).toContain('line-through') 
})

test ("I can delete a movie", async () => {
    let searchBar = await driver.findElement(By.xpath('//input'));
    await searchBar.sendKeys('Happy Gilmore\n')
    let deleteButton = await driver.findElement(By.id('HappyGilmore'))
    await deleteButton.click()
    let message = await driver.findElement(By.id('message'))
    expect(await message.getText()).toContain('deleted')
})





})