import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from "@angular/forms";
import { DateFormControl } from "../date-form-control"

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  cardForm = new FormGroup(
    {
      name: new DateFormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      cardNumber: new DateFormControl("", [Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16)
      ]),
      expiration: new DateFormControl("", [
        Validators.required,
        Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
      ]),
      securityCode: new DateFormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3)
      ]),
    }
  );

  constructor() { }

  ngOnInit(): void {
  }

  getControl(input:string):DateFormControl
  {
    return this.cardForm.controls[input] as DateFormControl;
  }

  onSubmit()
  {

  }

}
