# Degree website

The public website for **Degree: Fold & Flick**, built with React, TypeScript and Vite.

- Website: https://degree.elevatr.app
- App Store: https://apps.apple.com/us/app/degree-fold-flick/id6820294808
- Support: aadi@elevatr.app

## Development

Use Node.js 24 or later.

```sh
npm ci
npm run dev
```

## Production build

```sh
SITE_URL=https://degree.elevatr.app npm run build
npm run preview
```

The build pre-renders `/`, `/privacy/` and `/support/` as full HTML, then hydrates the interactive preview. Only `dist/` is deployed. No server runtime, secrets, analytics or web advertising scripts are required.

## GitHub Pages

The Pages workflow builds and deploys `main` on GitHub's standard public-repository runner. It can also be run manually. Configure the repository's Pages source as **GitHub Actions**, set the custom domain to `degree.elevatr.app`, and enable HTTPS after the certificate is issued.

At GoDaddy, the `degree` CNAME points to `elevatrlabs.github.io`. Existing apex and email records are separate. The hostname is recorded in `public/CNAME`; canonical URLs and the sitemap use `SITE_URL`.

After deployment, verify `/`, `/privacy/`, `/support/`, `/app-ads.txt`, `/robots.txt` and `/sitemap.xml` over HTTPS.

## AdMob verification

`public/app-ads.txt` is copied verbatim to the hostname root:

```text
google.com, pub-3168949254831390, DIRECT, f08c47fec0942fa0
```

Use `https://degree.elevatr.app` as the App Store Marketing URL so the public listing exposes Developer Website. AdMob verification depends on that listing and Google's crawl; hosting the file alone does not complete verification. No AdSense web tag is needed.

## Content

- The ring logo is a placeholder pending the final app icon choice.
- The illustration and angle game are interactive web demonstrations, not live hardware readings.
- The public app privacy text matches the released Degree 1.0 policy. An advertising update is in development and requires updated disclosures before release.
- GitHub Pages logs visitor IP addresses for security, as explained on the privacy page.
- This repository contains the website only. The native iOS application, private account records and local QA evidence are excluded.
