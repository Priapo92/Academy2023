import { Component, OnInit, } from '@angular/core';
import { Regions } from 'src/app/interfaces/regions';
import { CommonService } from 'src/app/services/common.service';


declare var bootstrap: any;

@Component({
  selector: 'app-map-italy',
  templateUrl: './map-italy.component.html',
  styleUrls: ['./map-italy.component.scss']

})
export class MapItalyComponent implements OnInit {
  regions: Regions[] = [];

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.getAllRegionsFromCommonService();

  }

  ngAfterViewInit() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    });
  }

  cliccaSullaMappa(id: any) {
    const regioneSel = this.regions.filter(r => r.name == id);
    if (regioneSel.length > 0) {
      alert("Hai cliccato su " + id + " " + regioneSel[0].description);

    }
  }

  private getAllRegionsFromCommonService() {
    this.commonService.getAllRegions().subscribe(regions => {
      this.regions = regions;
      console.log('ARRIVATA LA RESP.', regions);


    });

  }
}



