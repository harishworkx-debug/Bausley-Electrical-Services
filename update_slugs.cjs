const fs = require('fs');

let content = fs.readFileSync('src/data/serviceAreas.ts', 'utf8');

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
  const regex = new RegExp(`slug: '${area}'`, 'g');
  content = content.replace(regex, `slug: 'electrician-${area}'`);
});

fs.writeFileSync('src/data/serviceAreas.ts', content, 'utf8');
console.log('Updated serviceAreas.ts');
