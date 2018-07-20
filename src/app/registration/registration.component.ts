import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private _registerForm: FormGroup;

  constructor(private _form: FormBuilder, public auth: AuthService) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() { 
    this._registerForm = this._form.group({
      email: new FormControl,
      password: new FormControl,
      first_name: new FormControl,
      last_name: new FormControl
    });
  }
  onSubmit() {
    console.log(this._registerForm.value);
    this.auth.register(this._registerForm.value).subscribe( () => this.auth.login(this._registerForm.value));
  }
  
}

