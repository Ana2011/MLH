const sel = require ('../../data/selectors.json');
const data = require ('../../data/testData.json');


describe('Create button disabled', function () {

    describe('TC-083 Create! button disabled after user filled Name input field', function () {

        it('TC-083 input Name, Create button disabled', function () {
            browser.url('');
            $(sel.nameField).setValue(data.name3G);
            const label = $(sel.create).isEnabled();
            expect(label).toEqual(false);
        });
    });

    describe('TC-084 Create! button disabled after user filled Name and Gender input field', function () {

        it('TC-084 input Name and Gender(he), Create button disabled', function () {
            browser.url('');
            $(sel.nameField).setValue(data.name3G);
            $$(sel.gender)[data.gender.he].click();
            const label = $(sel.create).isEnabled();
            expect(label).toEqual(false);
        });
    });

    describe('TC-085 Create! button disabled after user filled Name,Gender,Age input field', function () {

        it('TC-085 input Name,Gender(he),Age, Create button disabled', function () {
            browser.url('');
            $(sel.nameField).setValue(data.name3G);
            $$(sel.gender)[data.gender.he].click();
            $(sel.age).setValue(data.age3G);
            const label = $(sel.create).isEnabled();
            expect(label).toEqual(false);
        });
    });
});
