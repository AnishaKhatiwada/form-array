import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ArrayService, Response } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signUpForm: FormGroup;
  response: Response
  constructor(
    // private appService: ArrayService
  ) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null),
        'email': new FormControl(null)
      }),
      'hobbies': new FormArray([])
    })
  }
  get hobbyControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }
  onSubmit() {
    console.log("Value of submitted form", this.signUpForm);
    // this.appService.setHobbies(this.signUpForm.value).subscribe((data) => {
    //   this.response= data;
    //   console.log(this.response);
    // });
  }

  onAddHobby() {
    const control = new FormControl(null);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }
}