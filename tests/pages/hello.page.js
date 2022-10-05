const Page = require('./page');

class HelloPage extends Page {
    get button () {
        return $('#toggle');
    }
    get input () {
        return $('#search');
    }
    get title () {
        return $('#hello');
    }

    async toggleTitleWithInput (text) {
        await this.input.setValue(text);
        await this.button.click();
    }

    open () {
        return super.open('hello');
    }
}

module.exports = new HelloPage();
