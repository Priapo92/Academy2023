import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Regions } from 'src/app/interfaces/regions';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  regions: Regions[] = [];

  aree = [
    { snc: 'N', titolo: 'Nord' },
    { snc: 'C', titolo: 'Centro' },
    { snc: 'S', titolo: 'Sud' }
  ];

  getRegioniSNC(snc: string) {
    return this.regions.filter(regione => {
      const check = regione.SNC == snc;
      console.log("CON LA REGIONE " + regione.name + " HO UN SNC: " + regione.SNC + " espressione " + check, snc);
      return check;
    });
  }

  constructor(
    private commonService: CommonService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.getAllRegionsFromCommonService();

  }

  goToPage(page: string) {
    this.router.navigateByUrl(page)
  }

  private getAllRegionsFromCommonService() {
    this.commonService.getAllRegions().subscribe(regions => {
      this.regions = regions;
      console.log('ARRIVATA LA RESP.', regions);


    });

  }

}

