import { Injectable } from '@angular/core';
import { Product } from '../interfaces/products';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // dichiaro il BehaviorSubject che mi memorizzerà i prodotti nel carello
  carrello: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor() { }

  /**
   * Metodo per aggiungere prodotti al carrello
   * @param product prodotto aggiunto con quantità 1
   */
  addToCart(product: Product, quantita = 1) {
    const nuovoCarrello = this.carrello.value;
    const item = {
      ...product,
      quantita: quantita
    };
    nuovoCarrello.push(item);
    this.carrello.next(nuovoCarrello);
  }

  removeToCart(ordine: any) {
    const nuovoCarrello = this.carrello.value;
    const posizione = nuovoCarrello.indexOf(ordine);
    if (posizione > -1) {
      // Utilizzo il metodo splice per rimuovere l'elemento ordine dal carrello
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
      nuovoCarrello.splice(posizione, 1)
      this.carrello.next(nuovoCarrello);
    }
  }

  getItems() {
    return this.carrello.value;
  }

  clearCart() {
    this.carrello.next([])
    return [];
  }
}

