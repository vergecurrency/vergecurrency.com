const express = require('express');
const path = require('path');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();

// const { createServer } = require('http');
const i18nextMiddleware = require('i18next-express-middleware');
const Backend = require('i18next-node-fs-backend');
const i18n = require('./i18n');
// const compression = require('compression');

// init i18next with serverside settings
// using i18next-express-middleware
i18n
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    preload: ['en', 'de', 'nl', 'jp'],

    // need to preload all the namespaces
    // add more namespaces as pages are created
    ns: ['common', 'header', 'footer', 'home', 'presskit', 'pressreleases'],
    backend: {
      loadPath: `${__dirname}/locales/{{lng}}/{{ns}}.json`,
      addPath: `${__dirname}/locales/{{lng}}/{{ns}}.missing.json`,
      reloadInterval: 10000,
    },
  }, () => {
    // loaded translations we can bootstrap our routes
    app.prepare()
      .then(() => {
        const e = express();

        // compression middleware - Everything below will be compressed
        // e.use(compression());

        // enable middleware for i18next
        e.use(i18nextMiddleware.handle(i18n));

        // serve locales for client
        e.use('/locales', express.static(`${__dirname}/locales`));

        // missing keys
        e.post('/locales/add/:lng/:ns', i18nextMiddleware.missingKeyHandler(i18n));

        // use next.js
        e.get('*', (req, res) => handle(req, res));

        e.listen(3000, (err) => {
          if (err) throw err;
          console.log('> Ready on http://localhost:3000');
        });

        // const s = createServer((req, res) => {
        //   if (req.url === '/sw.js') {
        //     app.serveStatic(req, res, path.resolve('./static/sw.js'));
        //   } else {
        //     handle(req, res);
        //   }
        // });

        // s.listen(3000, (err) => {
        //   if (err) throw err;
        //   console.log('> Ready on http://localhost:3000');
        // });
      });
  });
