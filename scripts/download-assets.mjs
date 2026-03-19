import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const BASE = 'C:/Users/Ilya/Desktop/projects/test-junior-frontend/src/assets/images'

const ICONS = {
  'burger-desktop.png':    'https://www.figma.com/api/mcp/asset/c73d1bb1-9a6e-43f2-a001-56a4d5687224',
  'burger-mobile.png':     'https://www.figma.com/api/mcp/asset/34240c5f-9bd9-4515-bdc1-dc3d90e876a4',
  'search-desktop.png':    'https://www.figma.com/api/mcp/asset/1d2d4181-6ddb-46cb-bf7f-257688bae29f',
  'search-mobile.png':     'https://www.figma.com/api/mcp/asset/d47c5299-6a8d-4b84-b8c2-981464a9581a',
  'user-desktop.png':      'https://www.figma.com/api/mcp/asset/b0729d55-79e2-446e-a16a-32915953a2a9',
  'user-mobile.png':       'https://www.figma.com/api/mcp/asset/930d71e1-029f-44f3-9ef5-cf174e8a0309',
  'mail-desktop.png':      'https://www.figma.com/api/mcp/asset/7453bab1-c62b-4854-ad21-f525a50c70a2',
  'mail-mobile.png':       'https://www.figma.com/api/mcp/asset/f65aa930-3d2a-4aa3-a37d-152f8249ea93',
  'bracket-left.png':      'https://www.figma.com/api/mcp/asset/888b35b9-9f1f-405b-87c1-62dae4ef34e5',
  'bracket-right.png':     'https://www.figma.com/api/mcp/asset/59f55d55-5610-4f9d-b5a2-0662c6b575b9',
  'nav-chevron-down.png':  'https://www.figma.com/api/mcp/asset/762d05a6-7ee6-4fc7-ae0e-c92a81e8eb9f',
  'ticker-alert.png':      'https://www.figma.com/api/mcp/asset/bc8c8dfa-9536-4b9e-a09c-7a140230caaa',
  'ticker-info.png':       'https://www.figma.com/api/mcp/asset/f66d96c9-9fa8-47e8-ab93-ea0e507c8568',
  'arrow-right.png':       'https://www.figma.com/api/mcp/asset/17232ae1-5e91-4b44-ae15-25a243014d56',
  'arrow-right-mobile.png':'https://www.figma.com/api/mcp/asset/2a0bcc8d-ad96-45d4-b18c-3dff79ae8366',
  'comment.png':           'https://www.figma.com/api/mcp/asset/86c1df3b-10ab-4761-96b0-ef158d27211b',
  'rate-up.png':           'https://www.figma.com/api/mcp/asset/fb5edaa6-bc39-4c88-9473-c686f9d3c7bb',
  'rate-down.png':         'https://www.figma.com/api/mcp/asset/405581c5-2a41-4705-8159-19a5491f69fc',
  'weather-cloud-rain.png':'https://www.figma.com/api/mcp/asset/d384d371-478f-4180-8c6c-bc7c3217bb17',
  'location-pin.png':      'https://www.figma.com/api/mcp/asset/3fc3ee0b-a8b4-4e5f-b002-5e1665b11230',
  'sun.png':               'https://www.figma.com/api/mcp/asset/eb2d6606-8582-4237-9597-435351d7d885',
  'sun-small.png':         'https://www.figma.com/api/mcp/asset/ec8d367b-f4d1-4378-ae00-b1103ceffd3c',
  'toggle-on.png':         'https://www.figma.com/api/mcp/asset/2be990f6-fdb0-4965-9f21-7aa9b5f0e44a',
}

const LOGOS = {
  'meta-drawer.png':  'https://www.figma.com/api/mcp/asset/d9181701-6873-4f79-8f3d-2b5d6fa794db',
}

const PHOTOS = {
  'featured-article.png':  'https://www.figma.com/api/mcp/asset/4544be21-37c7-4036-ae91-90cf73a35d32',
  'sidebar-card-1.png':    'https://www.figma.com/api/mcp/asset/dae5b222-4bf2-4dec-9c02-9a1006357643',
  'sidebar-card-2.png':    'https://www.figma.com/api/mcp/asset/e5cac6b0-c247-4c8c-b310-fdbf8b60d45b',
  'discussed-1.png':       'https://www.figma.com/api/mcp/asset/b1a2444d-3534-474b-8873-bc861cd4393d',
  'discussed-2.png':       'https://www.figma.com/api/mcp/asset/5ffc1405-7f40-4971-84de-bc7c8f389e11',
  'discussed-3.png':       'https://www.figma.com/api/mcp/asset/624c7fbe-d8ea-4e0a-bad2-98622a39f471',
  'discussed-4.png':       'https://www.figma.com/api/mcp/asset/db0172c7-4e65-446c-96bd-b7a76f067eba',
  'medium-card-1.png':     'https://www.figma.com/api/mcp/asset/f61623b0-886a-4e97-b654-c4744e67f403',
  'medium-card-2.png':     'https://www.figma.com/api/mcp/asset/c5fcb605-e47f-4b73-9be4-a67898fd1f36',
  'news-thumb-1.png':      'https://www.figma.com/api/mcp/asset/6dbd86c9-3959-44d8-bfe9-dcc1863cf5ca',
  'news-thumb-2.png':      'https://www.figma.com/api/mcp/asset/e333f123-2137-479c-8b60-14c10f57c1b3',
  'news-thumb-3.png':      'https://www.figma.com/api/mcp/asset/f0bec011-8725-4237-bf9e-851f8ad9d666',
  'news-thumb-4.png':      'https://www.figma.com/api/mcp/asset/60cc144e-ac6a-4985-9d78-ef2d0467e4d5',
  'news-thumb-5.png':      'https://www.figma.com/api/mcp/asset/aa943dd8-d1f5-45f3-aa4c-088250f86d52',
}

async function download(url, dest) {
  const res = await fetch(url)
  if (!res.ok) { console.warn(`SKIP ${dest}: ${res.status}`); return }
  const buf = await res.arrayBuffer()
  writeFileSync(dest, Buffer.from(buf))
  console.log(`OK  ${dest.split('/').slice(-2).join('/')}`)
}

const all = [
  ...Object.entries(ICONS).map(([f, u]) => [join(BASE, 'icons', f), u]),
  ...Object.entries(LOGOS).map(([f, u]) => [join(BASE, 'logos', f), u]),
  ...Object.entries(PHOTOS).map(([f, u]) => [join(BASE, 'photos', f), u]),
]

for (const [dest, url] of all) await download(url, dest)
console.log('Done.')
