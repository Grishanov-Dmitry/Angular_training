import { Injectable } from '@angular/core';

@Injectable()
export class GeneralService  {
  
  private userData = {
    firstName: '',
    lastName: '',
  };

  public fullUserName = '';

  saveNewUser(data) {
    this.userData = Object.assign({}, data);
    this.setFullName();
  }

  setFullName() {
    this.fullUserName = this.userData.firstName + ' ' + this.userData.lastName;
  }

  getFullName() {
    return this.fullUserName;
  }
}
