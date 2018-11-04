import Service, { inject as service } from '@ember/service';

export default Service.extend({
  ajax: service(),

  async fetchCoordinates(query) {
    let encodedQuery = encodeURIComponent(query);
    let response = await this.ajax.request(`/geocoding/v5/mapbox.places/${encodedQuery}.json?access_token=pk.eyJ1IjoidG9kZGpvcmRhbiIsImEiOiJjam52OTBvYnEwNnFqM2xrZ2czZGlobnFtIn0.HSwTfbDCkrRozU5vD0wBzw`);
    if (response.features.length > 0) {
      let feature = response.features[0];
      return feature;
    }
    return [];
  }
});
