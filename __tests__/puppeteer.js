const { ExpansionPanelActions } = require("@material-ui/core");
const puppeteer = require("puppeteer");

const APP = `http://localhost:${process.env.PORT || 8080}/`;

// (async() => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto(APP);
//     await page.screenshot({ path: 'screen.png'});

//     await browser.close();
// }) ();

describe("Front-End Features Testing", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(() => {
    browser.close();
  });

  describe("Initial display", () => {
    it("loads successfully", async () => {
      await page.goto(APP);
      await page.waitForSelector("#test-header");
      const header = await page.$eval("#test-header", (el) => el.innerHTML);
      expect(header).toBe("Interview stage");
    });
  });
});
