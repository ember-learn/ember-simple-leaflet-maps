import Service from '@ember/service';
import { schedule } from '@ember/runloop';
import { getOwner } from '@ember/application';

export default Service.extend({

  createMap(element, geocodedLocation) {
    let point = new L.latLng(geocodedLocation.center[1], geocodedLocation.center[0]);
    let map = L.map(element, {
      center: point,
      zoom: 13
    });
    L.marker(point).addTo(map);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: getOwner(this).resolveRegistration('config:environment')['ember-simple-leaflet-maps'].apiKey
    }).addTo(map);
    schedule('afterRender', () => map.invalidateSize());
    return map;
  }

});
