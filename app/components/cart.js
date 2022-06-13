import Component from '@glimmer/component';
import { items } from 'embroider-example/lib/cart';

import reverse from 'lodash/reverse';

export default class Cart extends Component {
  items = reverse(reverse(items));
}
