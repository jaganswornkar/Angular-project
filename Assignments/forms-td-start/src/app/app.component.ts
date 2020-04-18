import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;

  defaultQues = "teacher";
  genders = ['male', 'felmale'];
  answer = '';
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  // onSubmit(form: NgForm){
  //   console.log('submitted',form);
  // }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username
    this.user.email = this.signupForm.value.userData.email
    this.user.gender = this.signupForm.value.gender
    this.user.answer = this.signupForm.value.answer
    this.user.secretQuestion = this.signupForm.value.secretQuestion
    this.signupForm.reset();
  }
}
