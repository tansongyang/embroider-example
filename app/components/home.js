import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Home extends Component {
  @tracked isCartOpen = false;

  CartComponent;

  @action
  async openCart() {
    const cartModule = await import('./cart');

    this.CartComponent = cartModule.default;
    this.isCartOpen = true;
  }

  @action
  closeCart() {
    this.isCartOpen = false;
  }
}
