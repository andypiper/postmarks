import express from 'express';
import xml2js from 'xml2js';

const router = express.Router();

router.get('/', async (req, res) => {
  const domain = req.app.get('domain');
  const searchUrl = `https://${domain}/search`;

  const obj = {
    OpenSearchDescription: {
      $: {
        xmlns: 'http://a9.com/-/spec/opensearch/1.1/',
        'xmlns:moz': 'http://www.mozilla.org/2006/browser/search/',
      },
      ShortName: 'Postmarks',
      LongName: 'Postmarks, a single-user bookmarking website designed to live on the Fediverse',
      Description: 'Search your Postmarks',
      Image: {
        $: {
          type: 'image/png',
        },
        _: 'https://cdn.glitch.global/8eaf209c-2fa9-4353-9b99-e8d8f3a5f8d4/postmarks-favicon.ico?v=1693611323474',
      },
      Tags: {
        _: "bookmarks postmarks"
      },
      InputEncoding: 'UTF-8',
      Url: {
        $: {
          type: 'text/html',
          method: 'get',
          template: `${searchUrl}?query={searchTerms}&ref=opensearch`,
        },
      },
      'moz:SearchForm': {
        _: `${searchUrl}`,
      },
      Query: {
        $: {
          role: 'example',
          searchTerms: 'postmarks',
        },
      },
    },
  };

  const builder = new xml2js.Builder({ headless: true });
  const xml = builder.buildObject(obj);

  res.header('Content-Type', 'application/opensearchdescription+xml');
  res.status(200).send(xml);
});

export default router;
