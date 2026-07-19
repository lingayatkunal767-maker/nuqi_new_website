import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const BASE = "https://in.nuqiwealth.com";

const ASSETS = [
  // logo / global
  { url: `${BASE}/white-in-logo-cropped.png`, dest: "public/images/white-in-logo-cropped.png" },
  { url: `${BASE}/india.jpg`, dest: "public/images/india.jpg" },
  { url: `${BASE}/favicon.png`, dest: "public/seo/favicon.png" },
  { url: "https://www.nuqiwealth.com/logo.png", dest: "public/seo/logo.png" },

  // universe modal
  { url: `${BASE}/wealth.png`, dest: "public/images/wealth.png" },
  { url: `${BASE}/universe-gold.png`, dest: "public/images/universe-gold.png" },
  { url: `${BASE}/NuqiGold-logo.png`, dest: "public/images/NuqiGold-logo.png" },
  { url: `${BASE}/sukuk.png`, dest: "public/images/sukuk.png" },
  { url: `${BASE}/sukuk-logo.png`, dest: "public/images/sukuk-logo.png" },

  // hero backgrounds
  {
    url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop",
    dest: "public/images/hero/mumbai-birds.jpg",
  },
  { url: `${BASE}/explore/india.jpeg`, dest: "public/images/hero/india.jpeg" },
  { url: `${BASE}/explore/Pen.png`, dest: "public/images/hero/pen.png" },
  { url: `${BASE}/explore/stone.png`, dest: "public/images/hero/stone.png" },

  // CEP carousel
  { url: `${BASE}/Future%20of%20Healthcare.png`, dest: "public/images/cep/future-of-healthcare.png" },
  { url: `${BASE}/Sustainable%20Future%20ESG.png`, dest: "public/images/cep/sustainable-future-esg.png" },
  { url: `${BASE}/Recession%20Proofers.png`, dest: "public/images/cep/recession-proofers.png" },
  { url: `${BASE}/Inflation%20beaters.png`, dest: "public/images/cep/inflation-beaters.png" },

  // Prive offerings (gifs)
  { url: `${BASE}/Arranging%20Custody.gif`, dest: "public/images/prive/arranging-custody.gif" },
  { url: `${BASE}/Arranging%20Deals%20in%20Investments.gif`, dest: "public/images/prive/arranging-deals.gif" },
  { url: `${BASE}/Managing%20assets1.gif`, dest: "public/images/prive/managing-assets.gif" },
  { url: `${BASE}/Arranging%20Credit%20&%20Advising%20on%20Credit.gif`, dest: "public/images/prive/arranging-credit.gif" },
  { url: `${BASE}/Legacy%20Planning%20&%20Family%20Office%20Management.gif`, dest: "public/images/prive/legacy-planning.gif" },
  { url: `${BASE}/Advising%20on%20financial%20products%201.gif`, dest: "public/images/prive/advising-financial-products.gif" },

  // ecosystem / tieup logos
  { url: `${BASE}/tieups/bsewhite.png`, dest: "public/images/tieups/bsewhite.png" },
  { url: `${BASE}/tieups/nsewhite.png`, dest: "public/images/tieups/nsewhite.png" },
  { url: `${BASE}/tieups/sebiwhite.png`, dest: "public/images/tieups/sebiwhite.png" },
  { url: `${BASE}/tieups/accordwhite.png`, dest: "public/images/tieups/accordwhite.png" },

  // news
  {
    url: "https://cdn.builder.io/api/v1/image/assets/TEMP/efc2cd1e18b64cb1917ba0d95e13dd7a6403861d6eeeac5ae5d902e064d56162?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104",
    dest: "public/images/news/dfsa-license-1.jpg",
  },
  {
    url: "https://cdn.builder.io/api/v1/image/assets/TEMP/f877d4fa14b9776bb91ba2e76410ead82ac4d8f5f0a22e6d8dab98d4a8ec5b9c?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104",
    dest: "public/images/news/discover-nuqi.jpg",
  },
  {
    url: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b367d6a828c05b3c006f81cd046ffeadd487811a9061ca0fc3f9d824f9615de?placeholderIfAbsent=true&apiKey=8031103fb59b4417b3d6df6558972104",
    dest: "public/images/news/dfsa-license-2.jpg",
  },
  { url: `${BASE}/khaleeji.png`, dest: "public/images/news/khaleeji.png" },

  // app store badges
  { url: `${BASE}/app%20store%20copy%20apple.png`, dest: "public/images/play-store.png" },
  { url: `${BASE}/app%20store%20copy.png`, dest: "public/images/app-store.png" },

  // Disclosures page UPI QR
  { url: `${BASE}/QR.png`, dest: "public/images/QR.png" },
];

// Ethosphere magazine cover images (editions 70-92)
for (let n = 70; n <= 92; n++) {
  ASSETS.push({ url: `${BASE}/etho/${n}.png`, dest: `public/images/etho/${n}.png` });
}

async function downloadOne({ url, dest }) {
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`FAILED ${url} -> ${res.status}`);
    return;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await mkdir(path.dirname(dest), { recursive: true });
  await writeFile(dest, buf);
  console.log(`OK ${dest} (${buf.length} bytes)`);
}

async function main() {
  const BATCH = 4;
  for (let i = 0; i < ASSETS.length; i += BATCH) {
    const batch = ASSETS.slice(i, i + BATCH);
    await Promise.all(batch.map(downloadOne));
  }
}

main();
