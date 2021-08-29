import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  statuses = ['single', 'married'];

  constructor(private fb: FormBuilder) {}

  myForm = this.fb.group({
    'username': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', Validators.required],
    'confirmPassword': ['', Validators.required],
    'Status': [''], 
    'address': this.fb.group({
      'street': ['', Validators.required],
      'city': ['', Validators.required],
      'zipCode': ['', Validators.required]
    })

  })

  onSubmit() {
    console.log(this.myForm);
    this.myForm.reset();
  }


}

