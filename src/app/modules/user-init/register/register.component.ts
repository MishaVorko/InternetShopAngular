import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formValid = false;
  viewFormValid = false;
  tsFormValid = false;

  inputValid = {
    name: false,
    surname: false,
    email: false,
    address: false,
    password: false,
    nameMessage: '',
    surnameMessage: '',
    emailMessage: '',
    addressMessage: '',
    passwordMessage: ''
  };

  InitFormObj = {
    name: '',
    surname: '',
    email: '',
    address: '',
    password: ''
  };

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  registerUser(form: NgForm): void {
    console.log(form);
    this.router.navigate(['/']);
  }


  validateName(form: NgForm): void {
    if (this.InitFormObj.name.match(/[^а-яА-Яa-zA-Zа-яА-Я]/)) {
      this.inputValid.name = false;
      this.inputValid.nameMessage = `Ім'я може складатись із латинських букв та кирилиці`;
    } else if (this.InitFormObj.name === '') {
      this.inputValid.name = false;
      this.inputValid.nameMessage = `Заповніть поле імені`;
    } else {
      this.inputValid.name = true;
    }
    this.setFormValid(form);
  }

  validateSurname(form: NgForm): void {
    if (this.InitFormObj.surname.match(/[^а-яА-Яa-zA-Zа-яА-Я]/)) {
      this.inputValid.surname = false;
      this.inputValid.surnameMessage = `Фамфлія може складатись із латинських букв та кирилиці`;
    } else if (this.InitFormObj.surname === '') {
      this.inputValid.surname = false;
      this.inputValid.surnameMessage = `Заповніть поле фамілії`;
    } else {
      this.inputValid.surname = true;
    }
    this.setFormValid(form);
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

  validateAddress(form: NgForm): void {
    if (this.InitFormObj.address.match(/[^\.\,\:а-яА-Яa-zA-Zа-яА-Я0-9]/)) {
      this.inputValid.address = false;
      this.inputValid.addressMessage = 'Пошта може складатись із букв, цифр, та знаків: (.), (,), (:)';
    } else {
      this.inputValid.address = true;
    }
    this.setFormValid(form);
  }

  validatePassword(form: NgForm): void {
    if (this.InitFormObj.password.match(/[^\.\_a-zA-Z0-9]/) || this.InitFormObj.password.includes(' ')
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
