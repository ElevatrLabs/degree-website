import { readFile, writeFile, mkdir } from "node:fs/promises";
import { render } from "../.prerender/entry-server.js";
const base = await readFile("dist/index.html", "utf8");
const origin = process.env.SITE_URL?.replace(/\/$/, "");
if (origin && !/^https:\/\/[a-z0-9.-]+(?::[0-9]+)?$/i.test(origin))
  throw new Error("SITE_URL must be an HTTPS origin without a path");
const pages = [
  ["", "Degree — Perfect. Until you fold."],
  ["privacy", "Degree — Privacy policy"],
  ["support", "Degree — Support"],
];
for (const [route, title] of pages) {
  const path = route ? `/${route}/` : "/";
  const directory = route ? `dist/${route}` : "dist";
  await mkdir(directory, { recursive: true });
  let html = base
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace('<div id="root"></div>', `<div id="root">${render(path)}</div>`);
  if (origin)
    html = html.replace(
      "</head>",
      `<link rel="canonical" href="${origin}${path}"/><meta property="og:url" content="${origin}${path}"/></head>`,
    );
  await writeFile(`${directory}/index.html`, html);
}
await writeFile(
  "dist/robots.txt",
  `User-agent: *\nAllow: /\n${origin ? `Sitemap: ${origin}/sitemap.xml\n` : ""}`,
);
if (origin)
  await writeFile(
    "dist/sitemap.xml",
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map(([route]) => `<url><loc>${origin}/${route ? `${route}/` : ""}</loc></url>`).join("")}</urlset>`,
  );
const ads = await readFile("dist/app-ads.txt", "utf8");
if (ads !== "google.com, pub-3168949254831390, DIRECT, f08c47fec0942fa0\n")
  throw new Error("Wrong AdMob publisher entry");
console.log(
  "Pre-rendered three static pages; verified app-ads.txt. Canonical URLs:",
  origin ?? "pending domain",
);
