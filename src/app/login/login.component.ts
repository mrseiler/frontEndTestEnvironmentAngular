import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(public form: FormBuilder, public auth: AuthService) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.loginForm = this.form.group({
      email: new FormControl,
      password: new FormControl
    });
  }

  onSubmit() {
    this.auth.login(this.loginForm.value);
  }

}
