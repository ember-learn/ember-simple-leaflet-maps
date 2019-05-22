'use strict';

module.exports = {
  name: require('./package').name,

  // isDevelopingAddon() {
  //   return true;
  // },

  contentFor(type, config) {
    let scriptMarkup = '';
    if (type === 'head-footer') {
      let cssUrl = `${config[this.name].url}/leaflet@${config[this.name].version}/dist/leaflet.css`;
      let jsUrl = `${config[this.name].url}/leaflet@${config[this.name].version}/dist/leaflet.js`;
      scriptMarkup = `<link rel=\"stylesheet\" href=\"${cssUrl}\" integrity=\"sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA==\" crossorigin=\"\"/>
<script src=\"${jsUrl}\" integrity="sha512-nMMmRyTVoLYqjP9hrbed9S+FzjZHW5gY1TWCHA5ckwXZBadntCNs8kEqAWdrb9O7rxbCaA4lKTIWjDXZxflOcA==" crossorigin=\"\"></script>
`;
    }
    return scriptMarkup;
  }
};
