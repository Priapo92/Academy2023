import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  constructor(
    private servizio: CommonService) { }

}
