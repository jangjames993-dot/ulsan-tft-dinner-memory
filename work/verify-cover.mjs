import { createRequire } from "node:module";
import path from "node:path";

const require = createRequire("C:/Users/wkddu/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/package.json");
const { chromium } = require("playwright");

const pagePath = path.resolve("outputs/index.html").replaceAll("\\", "/");
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1366, height: 768 } });
await page.goto(`file:///${pagePath}`);
await page.waitForLoadState("networkidle");

const result = await page.evaluate(() => {
  const actions = [...document.querySelectorAll(".cover-actions a")].map((link) => ({
    text: link.textContent.trim(),
    href: link.getAttribute("href"),
  }));
  const heroStyle = getComputedStyle(document.querySelector(".hero"), "::before").backgroundImage;
  const title = document.querySelector(".hero h2")?.textContent.trim();
  return { actions, hasCoverImage: heroStyle.includes("genesis-cover.png"), title };
});

await page.screenshot({ path: "work/cover-screenshot.png", fullPage: false });
await browser.close();

console.log(JSON.stringify(result, null, 2));
