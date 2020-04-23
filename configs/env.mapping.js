/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
require('dotenv').config({
  path: path.join(__dirname, `../.env/${process.env.NODE_ENV}.env`),
});
const { dependencies } = require('../package-lock.json');

// env mapping for exposure to client
module.exports = {
  TEST_CLIENT: process.env.test,
  TEST_PAGE_VAR: process.env.TEST_PAGE_VAR,
  ENV: process.env.NODE_ENV,
  FOLDER: process.env.FOLDER || '',
  LINK_PREFIX: `/${process.env.FOLDER}` || '',
  THEME_COLOR: process.env.THEME_COLOR || '',
  MANIEFST_PATH: process.env.MANIEFST_PATH || '',
  ICON_192_PATH: process.env.ICON_192_PATH || '',
  ICON_512_PATH: process.env.ICON_512_PATH || '',
  FAV_ICON_PATH: process.env.FAV_ICON_PATH || '',
  SQL_JS_VERSION: dependencies['sql.js'].version || '',
};
