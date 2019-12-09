import { Component } from '@angular/core';

import { GeneralService } from './general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private generalService: GeneralService) {}

  onActivate(componentReference) {
    if(componentReference.saveNewUser) { // It's a bad solution, but i don't know how to do better
      componentReference.saveNewUser.subscribe((data) => {
        this.saveNewUser(data);
      })
    }
  }
  
  saveNewUser(data) {
    this.generalService.saveNewUser(data);
  }
}
