import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  const domain = req.app.get('domain');

  const searchUrl = `https://${domain}/search?query={searchTerms}`;

  let data = '<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/" xmlns:moz="http://www.mozilla.org/2006/browser/search/">';

  data += '<ShortName>Postmarks</ShortName>';
  data += '<Description>Search your Postmarks</Description>';
  data += '<InputEncoding>UTF-8</InputEncoding>';

  data +=
    '<Image width="16" height="16" type="image/png">https://cdn.glitch.global/8eaf209c-2fa9-4353-9b99-e8d8f3a5f8d4/postmarks-favicon.ico?v=1693611323474</Image>';
  data += `<Url type="text/html" method="get" template="${searchUrl}&amp;ref=opensearch"/>`;
  data += `<moz:SearchForm>https://${domain}/search</moz:SearchForm>`;
  data += '<Query role="example" searchTerms="postmarks" />';

  data += '</OpenSearchDescription>';

  res.header('Content-Type', 'application/opensearchdescription+xml');
  res.status(200).send(data);
});

export default router;
