import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() input: FormControl = new FormControl();
  @Input() label: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  get showErrors()
  {
    const {dirty, touched, errors} = this.input;
    return dirty && touched && errors;
  }

}
