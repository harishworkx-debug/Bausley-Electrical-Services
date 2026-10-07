const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(path.join(dir, f));
    }
  });
}

function processFile(filePath) {
  if (!filePath.match(/\.(ts|tsx|xml|js|jsx)$/)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace /services/something with /something
  // Need to be careful not to match just /services, we want /services/something
  // Let's use regex: /services/([a-zA-Z0-9-\$]+) -> /$1
  // Wait, in strings like `/services/${service.slug}` we want `/${service.slug}`
  // Let's replace `/services/` with `/` IF it's followed by a word character or `${`
  // Actually, we can just replace `/services/` with `/` because `/services` without trailing slash is the services page.
  content = content.replace(/\/services\//g, '/');
  
  // Replace /service-areas/ with /
  content = content.replace(/\/service-areas\//g, '/');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

walkDir(path.join(__dirname, 'src'), processFile);
processFile(path.join(__dirname, 'public', 'sitemap.xml'));

console.log("Done");
