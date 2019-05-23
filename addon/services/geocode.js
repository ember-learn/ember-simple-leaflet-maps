import Service from '@ember/service';
import { getOwner } from '@ember/application';
import { isPresent } from '@ember/utils';
import { computed } from '@ember/object';

export default Service.extend({
  host: 'https://api.mapbox.com',

  apiKey: computed(function() {
    let envConfig = getOwner(this).resolveRegistration('config:environment');

    return envConfig['ember-simple-leaflet-maps'].apiKey;
  }).readOnly(),

  _request(url) {
    return new Promise(function requestPromise(resolve, reject) {
      var request = new XMLHttpRequest();
      request.open('GET', url, true);

      request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
          resolve(JSON.parse(this.responseText));
        }
      };

      request.onerror = reject;

      request.send();
    });
  },

  async fetchCoordinates(query) {
    let encodedQuery = encodeURIComponent(query);

    let response = await this._request(
      `${this.host}/geocoding/v5/mapbox.places/${encodedQuery}.json?access_token=${this.apiKey}`
    );

    return isPresent(response.features) ? response.features[0] : [];
  }
});
