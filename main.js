const colors = require("colors");
const puppeteer = require("puppeteer");

if (process.argv.length < 4) {
    console.log("Please specify the url and the element selector".red);
    console.log("etrack".green, "<url> <css selector>".cyan);
    return;
}

const argURL = process.argv[2];
const argSelector = process.argv[3];

(async () => {
    console.log("> Launching the browser ...".yellow);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    console.log("> Visiting the page ...".yellow);
    await page.goto(argURL);
    try {
        console.log(
            `> Waiting the element "${argSelector.blue}" to be visible on the page ...`
                .yellow
        );
        let elementStartTime = Date.now();
        await page.waitForSelector(argSelector);
        let elementElapsedTime = Math.abs(Date.now() - elementStartTime);
        console.log(
            `< The element "${argSelector.blue}" took ~ ${
                (elementElapsedTime.toString() + " ms").blue
            } to load`.green
        );
    } catch (e) {
        console.log(e.message.red);
    }

    await browser.close();
})();
