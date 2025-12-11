export class Homepage { 
    constructor(page) {
        this.page = page;
    }

    checkbox = "//h4[text()='Material UI Examples']/following::input[1]";
    text_input_box = "//h4[text()='Material UI Examples']/following::input[2]";
    input_box_fruit = "//h4[text()='Material UI Examples']/following::input[3]";
    fruit_list = "//ul[@role='listbox']/li";

    async checkCheckbox() {
        await this.page.locator(this.checkbox).check();
    }

    async uncheckCheckbox() {
        await this.page.locator(this.checkbox).uncheck();
    }

    async enterTextInput(value) {
        await this.page.locator(this.text_input_box).fill(value);
    }

    async enterFruitName(value) {
        await this.page.locator(this.input_box_fruit).fill(value);
    }

    async selectFruitFromList(fruitName) {
    const fruitOptionList = this.page.locator(this.fruit_list);
    const optionCount = await fruitOptionList.count();
    console.log("Total Options: " + optionCount);
        for (let i = 0; i < optionCount; i++) {
            const option = fruitOptionList.nth(i);
            const optionText = await option.innerText();

            console.log("Option Text: " + optionText);

            if (optionText === fruitName) {
                await option.click();
                break;
            }
        }
    }
}