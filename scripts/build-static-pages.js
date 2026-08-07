const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const docs = path.join(root, 'docs');
const staticPages = path.join(root, 'static-pages');

function copyDirectory(source, destination) {
  fs.cpSync(source, destination, {
    recursive: true,
  });
}

function writeFile(filePath, contents) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, contents);
}

writeFile(path.join(docs, 'CNAME'), 'vergecurrency.com\n');
writeFile(path.join(docs, '.nojekyll'), '\n');

copyDirectory(path.join(staticPages, 'paper-wallet'), path.join(docs, 'paper-wallet'));
copyDirectory(path.join(staticPages, 'paper-wallet'), path.join(docs, 'wallets', 'paper-wallet'));
copyDirectory(path.join(staticPages, 'seedphrase'), path.join(docs, 'seedphrase'));

fs.copyFileSync(path.join(docs, 'wallets.html'), path.join(docs, 'wallets', 'index.html'));
