import EmbroiderRouter from '@embroider/router';
import config from 'embroider-example/config/environment';

export default class Router extends EmbroiderRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('menu');
});
