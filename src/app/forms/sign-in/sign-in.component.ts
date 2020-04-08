import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
signIn: FormGroup;
  constructor() { }

  ngOnInit() {
this.signIn = new FormGroup({
  userDetails : new FormGroup({
    firstname : new FormControl('Arshi' , [
    Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.pattern(/^[0-9a-zA-Z]+$/)
  ]),
  lastname : new FormControl('', [Validators.required,
    Validators.minLength(6),
    Validators.maxLength(20),
    Validators.pattern(/^[0-9a-zA-Z]+$/)
  ]),
  contactnum : new FormControl('', [Validators.required,
  Validators.minLength(10),
   Validators.maxLength(10),
   Validators.pattern(/^[0-9]/)
]),
 }),
  emailid : new FormControl('' , [Validators.required,
    Validators.email ]),
    password : new FormControl('' , [Validators.required,
    Validators.pattern(/^[0-9a-zA-Z]+$/),
    Validators.minLength(6)
    ]),
skills : new FormArray([
  new FormControl('', Validators.required)
])
 });
console.log(this.signIn);
  }
  onSubmit() {
    console.log(this.signIn);
  }
  onAddskills() {
    const addfields = new FormControl('', Validators.required);
    ((this.signIn.get('skills')) as FormArray).push(addfields);
    console.log(addfields.value);
  }
  get firstName() {
    return this.signIn.get('userDetails.firstname');
  }

}
