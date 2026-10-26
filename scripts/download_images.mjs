import fs from 'fs';
import path from 'path';

const pages = [
  'https://www.oldgreenwichtennisacademy.com/',
  'https://www.oldgreenwichtennisacademy.com/juniorprograms',
  'https://www.oldgreenwichtennisacademy.com/fall-clinics',
  'https://www.oldgreenwichtennisacademy.com/winter-clinics',
  'https://www.oldgreenwichtennisacademy.com/cirriculum-structure',
  'https://www.oldgreenwichtennisacademy.com/adultprograms',
  'https://www.oldgreenwichtennisacademy.com/adult-clinics',
  'https://www.oldgreenwichtennisacademy.com/courtrentals',
  'https://www.oldgreenwichtennisacademy.com/about',
  'https://www.oldgreenwichtennisacademy.com/meet-the-staff',
  'https://www.oldgreenwichtennisacademy.com/pro-shop',
  'https://www.oldgreenwichtennisacademy.com/contact-us',
  'https://www.oldgreenwichtennisacademy.com/signup'
];

const outDir = path.resolve('public/images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function run() {
  const mediaKeys = new Set();
  
  for (const url of pages) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      const text = await res.text();
      
      // Match 1c365b_... or any wix media keys (e.g. 1c365b_4a2c0...~mv2.jpg or similar)
      const matches = text.match(/1c365b_[a-zA-Z0-9_]+(\.jpg|\.png|\.webp|~mv2\.jpg|~mv2\.png|~mv2\.webp)?/g) || [];
      for (const m of matches) {
        // clean up
        let key = m.replace(/["'\\]/g, '');
        if (!key.includes('.')) {
          key = key + '~mv2.jpg';
        }
        mediaKeys.add(key);
      }
    } catch (err) {
      console.error(`Error on ${url}:`, err.message);
    }
  }

  console.log(`Found ${mediaKeys.size} potential Wix media keys.`);
  
  let count = 0;
  for (const key of mediaKeys) {
    try {
      const imgUrl = `https://static.wixstatic.com/media/${key}`;
      const res = await fetch(imgUrl);
      if (res.ok && res.headers.get('content-type')?.includes('image')) {
        count++;
        const filename = `media_${count}.jpg`;
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(path.join(outDir, filename), Buffer.from(buffer));
        console.log(`Saved ${imgUrl} -> ${filename} (${buffer.byteLength} bytes)`);
      }
    } catch (e) {
      // ignore 404s
    }
  }

  console.log(`Total real images downloaded: ${count}`);
}

run();
