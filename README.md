ember-simple-leaflet-maps
==============================================================================

This addon was used for teaching older versions of Ember (before v3.14), and is deprecated. This means it will no longer accept PRs and updates, however you can still install this addon from npm if you are learning older versions of Ember.

To view the current supported official Ember tutorial, visit https://guides.emberjs.com/release/tutorial/part-1/.

This addon is used as part of the 
[Super Rentals Tutorial](https://guides.emberjs.com/release/tutorial/ember-cli/)
for Ember.js. You can find the sample app for the tutorial
[here](https://github.com/ember-learn/super-rentals).

Installation
------------------------------------------------------------------------------

```
ember install ember-simple-leaflet-maps
```


Usage
------------------------------------------------------------------------------

First, get a free [API token from Mapbox](https://www.mapbox.com/account/access-tokens/). Then:

```sh
LEAFLET_MAPS_API_KEY=<your key here> ember serve
```


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-simple-leaflet-maps`
* `npm install`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
