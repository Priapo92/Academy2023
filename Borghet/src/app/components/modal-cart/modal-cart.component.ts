import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/products';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-modal-cart',
  templateUrl: './modal-cart.component.html',
  styleUrls: ['./modal-cart.component.scss']
})
export class ModalCartComponent implements OnInit {

  ordini: any[] = [];

  numeroProdotti = 0;
  totaleOrdini = 0;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.carrello.subscribe((ordini) => {
      this.ordini = ordini;
      this.numeroProdotti = ordini.length;
      let t = 0;
      for (let i = 0; i < ordini.length; i++) {
        t += ordini[i].price;
      }
      this.totaleOrdini = t;
    })
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  eliminaOrdine(ordine: any) {
    this.cartService.removeToCart(ordine);
  }
}