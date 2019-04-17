import {Component, Input, OnInit} from '@angular/core';
import {Form, NgForm, NgModel} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formValid = false;
  viewFormValid = false;
  tsFormValid = false;

  inputValid = {
    email: false,
    password: false,
    emailMessage: '',
    passwordMessage: ''
  };

  InitFormObj = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  loginUser(form: NgForm): void {
    console.log(form);

    this.router.navigate(['/']);
  }

  validateEmail(form: NgForm): void {
    if (this.InitFormObj.email.match(/[^\.\@\_a-zA-Z0-9]/)) {
      this.inputValid.email = false;
      this.inputValid.emailMessage = 'Пошта може складатись із латинських букв, цифр, та знаків: (_), (.), (@)';
    } else if (this.InitFormObj.email.match(/[a-zA-Z0-9]+\@[a-z]+\.[a-z]/)) {
      this.inputValid.email = true;
    } else {
      this.inputValid.email = false;
      this.inputValid.emailMessage = 'Пошта повинна відповідати шаблону email@email.com';
    }
    this.setFormValid(form);
  }

  validatePassword(form: NgForm): void {
    if (this.InitFormObj.password.match(/[^\.\_а-яА-Яa-zA-Zа-яА-Я0-9]/) || this.InitFormObj.password.includes(' ')
    ) {
      this.inputValid.password = false;
      this.inputValid.passwordMessage = 'Пароль може складатись із латинських букв, цифр, та знаків: (_), (.)';
    } else if (this.InitFormObj.password === '') {
      this.inputValid.password = false;
      this.inputValid.passwordMessage = 'Заповніть поле паролю';
    } else {
      this.inputValid.password = true;
    }
    this.setFormValid(form);
  }


  setFormValid(form: NgForm) {
    this.viewFormValid = form.valid;

    if (this.inputValid.email === true && this.inputValid.password === true) {
      this.tsFormValid = true;
    } else {
      this.tsFormValid = false;
    }

    if (this.tsFormValid === true && this.viewFormValid === true) {
      this.formValid = true;
    } else {
      this.formValid = false;
    }
  }
}
