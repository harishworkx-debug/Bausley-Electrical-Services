const fs = require('fs');

let content = fs.readFileSync('public/sitemap.xml', 'utf8');

const areas = [
  'valley-al',
  'lanett-al',
  'west-point-ga',
  'la-fayette-al',
  'opelika-al',
  'auburn-al',
  'phenix-city-al',
  'salem-al',
  'cusseta-al',
  'chambers-county-al'
];

areas.forEach(area => {
  const regex = new RegExp(`>https://www.bausleyelectricalservices.com/${area}<`, 'g');
  content = content.replace(regex, `>https://www.bausleyelectricalservices.com/electrician-${area}<`);
});

fs.writeFileSync('public/sitemap.xml', content, 'utf8');
console.log('Updated sitemap.xml');
