import Service, { inject as service } from '@ember/service';
import { getOwner } from '@ember/application';

export default Service.extend({
  ajax: service(),

  async fetchCoordinates(query) {
    let encodedQuery = encodeURIComponent(query);
    let accessToken = getOwner(this).resolveRegistration('config:environment')['ember-simple-leaflet-maps'].apiKey;
    let response = await this.ajax.request(`/geocoding/v5/mapbox.places/${encodedQuery}.json?access_token=${accessToken}`);
    if (response.features.length > 0) {
      let feature = response.features[0];
      return feature;
    }
    return [];
  }
});
