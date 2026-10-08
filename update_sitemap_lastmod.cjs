const fs = require('fs');
let xml = fs.readFileSync('public/sitemap.xml', 'utf8');
xml = xml.replace(/\s*<changefreq>.*?<\/changefreq>/g, '');
xml = xml.replace(/\s*<priority>.*?<\/priority>/g, '');
xml = xml.replace(/(<loc>.*?<\/loc>)/g, '$1\n    <lastmod>2026-10-08</lastmod>');
fs.writeFileSync('public/sitemap.xml', xml);
console.log('Done replacing sitemap tags.');
