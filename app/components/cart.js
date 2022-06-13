import Component from '@glimmer/component';
import { items } from 'embroider-example/lib/cart';

export default class Cart extends Component {
  items = items;
}
