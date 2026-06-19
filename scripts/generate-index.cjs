const fs = require('fs').promises;
const path = require('path');
const pkg = require('../package.json');

(async () => {
  try {
    const assetsDir = path.join(process.cwd(), 'dist', 'client', 'assets');
    const outDir = path.join(process.cwd(), 'dist');
    const files = await fs.readdir(assetsDir);

    const cssFile = files.find((f) => f.endsWith('.css')) || '';
    const jsFiles = files.filter((f) => f.endsWith('.js'));

    let jsFile = jsFiles.find((f) => f.startsWith('index-')) || null;
    if (!jsFile && jsFiles.length) {
      // pick the largest JS file as a fallback
      let largest = { name: jsFiles[0], size: 0 };
      for (const f of jsFiles) {
        const stat = await fs.stat(path.join(assetsDir, f));
        if (stat.size > largest.size) largest = { name: f, size: stat.size };
      }
      jsFile = largest.name;
    }

    if (!jsFile) throw new Error('No JS bundle found in ' + assetsDir);

    // derive base href from package.json homepage
    let baseHref = '/';
    if (pkg && pkg.homepage) {
      try {
        const url = new URL(pkg.homepage);
        baseHref = url.pathname;
        if (!baseHref.endsWith('/')) baseHref += '/';
      } catch (e) {
        baseHref = pkg.homepage;
        if (!baseHref.endsWith('/')) baseHref += '/';
      }
    }

    const html = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <base href="${baseHref}">
    ${cssFile ? `<link rel="stylesheet" href="client/assets/${cssFile}">` : ''}
    <title>${pkg.name || 'App'}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="client/assets/${jsFile}"></script>
  </body>
</html>
`;

    await fs.mkdir(outDir, { recursive: true });
    await fs.writeFile(path.join(outDir, 'index.html'), html, 'utf8');
    console.log('Generated', path.join('dist', 'index.html'));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
