const HelloPage = require("../pages/hello.page");

describe('My hello world page', () => {
    it('should toggle', async () => {
        await HelloPage.open();

        await HelloPage.toggleTitleWithInput('hello');
        await expect(HelloPage.title).toBeExisting();
        await HelloPage.button.click();
        await expect(HelloPage.title).not.toBeExisting();
    });

    it('should not toggle', async () => {
        await HelloPage.toggleTitleWithInput('hello world');
        await HelloPage.button.click();
        await expect(HelloPage.title).not.toBeExisting();
    })
});
