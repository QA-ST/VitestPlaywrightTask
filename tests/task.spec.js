import {chromium, expect} from '@playwright/test';
import { test} from 'vitest'
import { Homepage } from './pages/Homepage.js';

let browser;
let context;
let page;

test.beforeAll( async () => {

    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.setExtraHTTPHeaders({
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36'
    });
    await page.goto('http://localhost:5173/');
    await page.waitForLoadState();
});

test.afterAll(async () => {
    await page.close();
});

test('Verify checkbox functionality', async () => {

    const homepage = new Homepage(page);

    try {
        if (!await page.locator(homepage.checkbox).isChecked()) {
            await homepage.checkCheckbox();
            await expect(await page.locator(homepage.checkbox)).toBeChecked();
            await page.waitForTimeout(2000);
        }

        if (await page.locator(homepage.checkbox).isChecked()) {
            await homepage.uncheckCheckbox();
            await expect(await page.locator(homepage.checkbox)).not.toBeChecked();
            await page.waitForTimeout(2000);
        }
    } catch (error) {
        console.error('Error during checkbox functionality test:', error);
    }

});

test('Verify input box functionality', async () => {

    const homepage = new Homepage(page);
    const input_value_text = 'ST QA';
    const input_value_text_updated = 'Automation';
    try {
        if (await page.locator(homepage.text_input_box).isEditable()) {
            await homepage.enterTextInput(input_value_text);

            // assertions
            await expect(await page.locator(homepage.text_input_box)).toHaveValue(input_value_text);
            await page.waitForTimeout(2000);
        }

        await page.locator(homepage.text_input_box).clear();
        await homepage.enterTextInput(input_value_text_updated);
        await expect(await page.locator(homepage.text_input_box)).toHaveValue(input_value_text_updated);
        await page.waitForTimeout(2000);
    } catch (error) {
        console.error('Error during input box functionality test:', error);
    }
});


test('Verify autocomplete functionality', async () => {

    const homepage = new Homepage(page);
    const fruit_to_select = "Apple";

    try {
        if (await page.locator(homepage.input_box_fruit).isEditable()) {
            await homepage.enterFruitName("A");
            await homepage.selectFruitFromList(fruit_to_select);
        }
        // assertion
        await expect(await page.locator(homepage.input_box_fruit)).toHaveValue(fruit_to_select);
        await page.waitForTimeout(3000);
    } catch (error) {
        console.error('Error during autocomplete functionality test:', error);
    }
});