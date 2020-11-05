const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json');

describe('Inputs', function () {

    describe('Inputs are displayed', function () {

        it('TC-014 Name ', function () {
            browser.url('');
            const name = $(sel.name).isDisplayed()
                expect(name).toEqual(true);
        });

        it('TC-015 Gender (he)', function () {
            const gender = $$(sel.gender)[0].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-016 Gender (she)', function () {
            const gender = $$(sel.gender)[1].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-017 Gender (it)', function () {
            const gender = $$(sel.gender)[2].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-018 Age', function () {
            const label = $(sel.age).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-019 Story', function () {
            const label = $(sel.story).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-020 Image', function () {
            const label = $(sel.imageTitle).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-021 Create', function () {
            const label = $(sel.submitButton).isDisplayed();
            expect(label).toEqual(true);
        });
    });

    describe('Placeholders are correct', function () {

        it('TC-022 Placeholders for Name = Hero\'s name ', function () {
            const text = $(sel.name).getAttribute('placeholder');
            expect(text).toEqual(exp.labelPlaceholder);
        });

        /*it('TC-023 Gender He', function () {
            const gender = $$(sel.gander)[0].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-024 Gender She', function () {
            const gender = $$(sel.gander)[1].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-025 Gender It', function () {
            const gender = $$(sel.gander)[2].isDisplayed();
            expect(gender).toEqual(true);
        });*/

        it('TC-026 Age', function () {
            const text = $(sel.age).getAttribute('placeholder');
            expect(text).toEqual(exp.labelPlaceholderAge);
        });

        it('TC-027 Story', function () {
            const text = $(sel.placeholderStory).getText();
            expect(text).toEqual(exp.labelPlaceholderStory);
        });

        /*it('TC-028 Image', function () {
            const label = $(sel.imageTitle).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-029 Create', function () {
            const label = $(sel.submitButton).isDisplayed();
            expect(label).toEqual(true);
        });*/

    });
})