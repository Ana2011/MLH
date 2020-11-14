const sel = require ('../data/selectors.json');
const path = require('path');

function inputValues4uploadAndClick (name, gender, age, storyType, imgPath){

    $(sel.name).setValue(name);
    $$(sel.gender)[gender].click();
    $(sel.age).setValue(age);
    $(sel.story).click();
    $$(sel.storyType)[storyType].click();

    const filePath = path.join(__dirname, imgPath);
    const remoteFilePath = browser.uploadFile(filePath); // use browser.uploadFile to upload the test file
    browser.execute(function () {
        document.getElementsByTagName('input')[6].style.display = "block";
    });
    $(sel.upload).setValue(remoteFilePath);

    const create = $(sel.create);
    create.waitForClickable();
    create.click();
}

module.exports = inputValues4uploadAndClick;