/*eslint-env node*/
'use strict';

module.exports = function(/* environment, appConfig */) {
  let env = {};
  env['ember-simple-leaflet-maps'] = {
    url: process.env.LEAFLET_MAPS_URL || 'https://unpkg.com',
    version: process.env.LEAFLET_MAPS_VERSION || '1.3.4',
    apiKey: process.env.LEAFLET_MAPS_API_KEY || ''
  }
  return env;
};
