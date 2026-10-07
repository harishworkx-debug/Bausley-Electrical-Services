const fs = require('fs');

const serviceSlugs = [
  'electrical-installation',
  'electrical-repair-troubleshooting',
  'electrical-panel-repair-upgrades',
  'circuit-breaker-services',
  'wiring-rewiring',
  'outlet-switch-installation',
  'lighting-installation',
  'ceiling-fan-installation',
  'electrical-grounding-safety',
  'electrical-power-restoration-diagnostics'
];

let content = fs.readFileSync('public/sitemap.xml', 'utf8');

serviceSlugs.forEach(slug => {
  const regex = new RegExp(`>https://www.bausleyelectricalservices.com/${slug}<`, 'g');
  content = content.replace(regex, `>https://www.bausleyelectricalservices.com/${slug}-valley-al<`);
});

fs.writeFileSync('public/sitemap.xml', content, 'utf8');
console.log('Updated sitemap.xml');
