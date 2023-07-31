import { Component } from '@angular/core';
import { Regions } from 'src/app/interfaces/regions';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  regions: Regions[] = [];

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.getAllRegionsFromCommonService();

  }

  private getAllRegionsFromCommonService() {
    this.commonService.getAllRegions().subscribe(regions => {
      this.regions = regions;
      console.log('ARRIVATA LA RESP.', regions);
    });

  }
}
