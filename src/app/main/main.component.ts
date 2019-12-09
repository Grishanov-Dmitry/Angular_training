import { Component, OnInit } from '@angular/core';

import { GeneralService } from '../general.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public fullUserName: string;

  constructor(private generalService: GeneralService) {
    this.fullUserName = this.generalService.getFullName();
  }
  ngOnInit() {
  }

}
