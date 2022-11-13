// Consts
const puppeteer = require('puppeteer');
const fs = require('fs');

// Vars
let RoomPath; let DBPath;

// Init
async function Init(){
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();

    let DB = require(DBPath); DB(page);

    // await page.exposeFunction("myLog", myLog);

    page.on('console', async (msg) => {
        const msgArgs = msg.args();
        for (let i = 0; i < msgArgs.length; ++i) console.log(await msgArgs[i].jsonValue());
    });

    try { await page.goto('https://www.haxball.com/headless', {waitUntil: 'networkidle2'}); }
    catch (e) { throw new Error('Unable to connect to the haxball headless page. Check your internet connection.'); }

    await page.addScriptTag({path: RoomPath});

    // We need to wait the iframe update in order to check if the room was open sucessfully
    await page.waitForTimeout(2000);

    const elementHandle = await page.$('iframe');
    const frame = await elementHandle.contentFrame();
    const recaptcha = await frame.$eval('#recaptcha', e => e.innerHTML);

    // If we see the recaptcha, then token (https://www.haxball.com/headlesstoken) must be either invalid or expired
    if (recaptcha) {
        throw new Error('The token is either invalid or expired.');
    }

    return await frame.$eval('#roomlink a', e => {
        return e.getAttribute('href');
    });
};

const args = process.argv.slice(2);

if (args.length >= 1) {
    RoomPath = `${args[0]}room.js`; DBPath = `${args[0]}DB.js`;

    Init().then((roomLink) => {
        console.log('\x1b[32m%s\x1b[0m', 'Successfully opened the room at ' + roomLink);
    }).catch((e) => {
        console.error('\x1b[31m%s\x1b[0m', e)
        process.exit(1);
    });
} else {
    console.error('Wrong use: node initRoom <roomFolderPath>');
    process.exit(1);
}




