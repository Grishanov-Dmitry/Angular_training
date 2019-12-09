import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  @Output() saveNewUser = new EventEmitter<any>();

  isValidInput = {
    firstName: false,
    lastName: false,
  }

  profileForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    lastName: new FormControl(''),
  });

  checkValidation(inputName) {
    if(this.isValidInput[inputName]) {
      return false;
    }

    return true;
  }

  onSubmit() {
    // this.checkValidation();

    this.saveNewUser.emit({
      firstName: this.profileForm.controls['firstName'].value,
      lastName: this.profileForm.controls['lastName'].value,
    });
  }

}
