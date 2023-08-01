import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/products';
import { CartService } from 'src/app/services/cart.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-info-prd',
  templateUrl: './info-prd.component.html',
  styleUrls: ['./info-prd.component.scss']
})
export class InfoPrdComponent {
  prodotto: Product = {} as Product;

  // per costruire questo componente mi serve che Angular
  // passi questi valori
  constructor(
    private route: ActivatedRoute,
    private servizio: CommonService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    // mettiamo in osservazione sui parametri del routing per ricavare l'id del prodotto
    this.route.params.subscribe((parametri: any) => {
      console.log("HO UN REFRESH DELLA PAGINA: ", parametri);
      // aggiorno i dati del prodotto ricavandomi l'id da parametro
      this.getProdotto(parametri.id);
    });
  }

  private getProdotto(id: string) {
    // richiamo dal servizio i dati del prodotto con l'id fornito
    this.servizio.getProdotto(id).subscribe((risultatoDalServizio) => {
      this.prodotto = risultatoDalServizio;
    })
  }

  aggiungiAlCarrello() {
    this.cartService.addToCart(this.prodotto);
  }
}

