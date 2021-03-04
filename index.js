require('dotenv').config();

const express = require('express');
const cors = require('cors');
const tradesRouter = require('./routes/trades');
const pingRouter = require('./routes/ping');
const generalRouter = require('./routes/general');
const PORT = process.env.PORT || 8080;

const init = async () => {
  // initializing web server
  const app = express();
  app.use(express.json({ limit: '500mb' }));
  app.use(cors());
  app.use('/trades', tradesRouter);
  app.use('/ping', pingRouter);
  app.use('/general', generalRouter);
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
  });
};

init();
