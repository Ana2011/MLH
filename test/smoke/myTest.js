const sel = require ('../../data/selectors.json');
const data = require ('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4');
const inputValues4andClick = require('../../helpers/inputValuea4andClick');
const inputValues4uploadAndClick = require('../../helpers/inputValues4uploadAndClick');
const exp = require('../../data/expected.json');
const path = require('path');


describe('Checking the main functionality', function () {

    describe('Happy path', function () {

        /*it('TC-030 Create button is clickable after 1-4 are filled in', function () {
            browser.url('');
            const inputName = $(sel.name).setValue(data.name);
            const inputGender = $$(sel.gender)[data.gender.she].click();
            const inputAge = $(sel.age).setValue(data.age);
            const click = $(sel.story).click();
            const inputStory = $$(sel.storyType)[data.storyType.Comedy].click();
            const create = $(sel.create).isEnabled();
            browser.pause(3000);
            expect(create).toEqual(true);
        });


         */

        it('TC-088 Content of the Story include correct input He with Image', function () {
            browser.url('');
            inputValues4uploadAndClick(data.name2G, data.gender.he, data.age2G, data.storyType.Rebirth,data.imgPath);
            browser.pause(8000)
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
            const pic = $(sel.pictureStoryPage).getAttribute('src');
            const result = (pic.length > 50);
            expect(result).toEqual(true);
            //const btn = $(sel.tryAgain).isDisplayed();
            const text = $(sel.cardTextG).getText();
            const he_2 = text.includes(exp.textHeG);
            expect(he_2).toEqual(true);
        });
    });

  /*  describe('TC-093 Content of the Story', function () {

        it('TC-093/1 Content of the Story include correct input He', function () {
            browser.url('');
            inputValues4andClick(data.nameG, data.gender.he, data.ageG, data.storyType.Comedy);
            const btn = $(sel.tryAgain).isDisplayed();
            const text = $(sel.cardTextG).getText();
            const he_2 = text.includes(exp.textHeG);
            expect(he_2).toEqual(true);
        });

        it('TC-093/2 Content of the Story include correct input His', function () {
            browser.url('');
            inputValues4andClick(data.nameG, data.gender.he, data.ageG, data.storyType.Comedy);
            const btn = $(sel.tryAgain).isDisplayed();
            const text = $(sel.cardTextG).getText();
            const his_1 = text.includes(exp.textHisG)
            expect(his_1).toEqual(true);
        });
    });

    describe('TC-125 Content of the Story', function () {

        it('TC-125/1 Content of the Story include correct input It', function () {
            browser.url('');
            inputValues4andClick(data.name1G, data.gender.it, data.age1G, data.storyType["Journey and Return"]);
            const btn = $(sel.tryAgain).isDisplayed();
            const text = $(sel.cardTextG).getText();
            const it_1 = text.includes(exp.textItG)
            expect(it_1).toEqual(true);
        });

        it('TC-125/2 Content of the Story include correct input It\s', function () {
            browser.url('');
            inputValues4andClick(data.name1G, data.gender.it, data.age1G, data.storyType["Journey and Return"]);
            const btn = $(sel.tryAgain).isDisplayed();
            const text = $(sel.cardTextG).getText();
            const it_1 = text.includes(exp.textItsG)
            expect(it_1).toEqual(true);
        });
    });

    /*describe('Other path', function () {

        it('TC-103 gender he is working', function () {
            browser.url('');
            inputValues4andClick(data.name, data.gender.he, data.age, data.storyType.Comedy);
            const btn = $(sel.tryAgain).isDisplayed()
            expect(btn).toEqual(true);
        });
    });

     */
})