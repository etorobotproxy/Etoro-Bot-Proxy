const router = require('express').Router();
const axios = require('axios');

router.get('/', async (req, res) => {
  try {
    const { data } = await axios.get(req.query.url, {
      headers: {
        ...(req.headers['cookie'] && { cookie: req.headers['cookie'] }),
      },
    });
    res.status(200).json(data);
    console.log(`proxied for url ${req.query.url}`);
  } catch (e) {
    res.status(500).json({ error: e });
    console.log(`error with url ${req.query.url}`, e);
  }
});

module.exports = router;
