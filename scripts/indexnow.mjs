// Tells IndexNow search engines (Bing, Yandex, Seznam, Naver; Bing powers ChatGPT search and Copilot) that the
// site's pages changed, so they recrawl now instead of on their own schedule. Runs after each production deploy
// (.github/workflows/indexnow.yml). The key is public by design: it only proves we own the site, via
// public/<key>.txt.
const SITE = process.env.SITE_URL ?? "https://mtxdigitaltechnologies.com";
const KEY = "943849489b25a64fbd81766e4ada0a85";

const sitemap = await (await fetch(`${SITE}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]).filter((url) => !url.includes("/images/"));
if (urlList.length === 0) throw new Error("No URLs found in the sitemap");

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs, response ${response.status}`);
if (!response.ok && response.status !== 202) process.exit(1);
