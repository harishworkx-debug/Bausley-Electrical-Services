const fs = require('fs');
const path = require('path');

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

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.ts') || file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  serviceSlugs.forEach(slug => {
    const regex1 = new RegExp(`'${slug}'`, 'g');
    content = content.replace(regex1, `'${slug}-valley-al'`);
    
    const regex2 = new RegExp(`"/${slug}"`, 'g');
    content = content.replace(regex2, `"/${slug}-valley-al"`);
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
