import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  regione: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService) { }

  ngOnInit() {
    const regId = this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe((valori: any) => {
      console.log("HO UN REFRESH DELLA PAGINA: ", valori);
      this.getRegione(valori.id);
    });
    this.getRegione(regId);
  }


  private getRegione(idRegione: any) {
    this.commonService.getAllRegions().subscribe(regions => {
      this.regione = regions.filter(r => r.regioneId == idRegione)[0];
      console.log('ARRIVATA LA REGIONE.', this.regione);
    });

  }
}

