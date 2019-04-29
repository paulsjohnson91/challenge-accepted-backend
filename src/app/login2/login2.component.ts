import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;
  loginRes: Object;


  constructor(private formBuilder: FormBuilder,private data: DataService) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      name: ['paul.johnson@billyhill.co.uk', Validators.required],
      password: ['mypassword', Validators.required]
    });
  }

  login(un,pw) {
    this.data.loginup(un,pw).subscribe(data => {
      this.loginRes = data
      console.log(this.loginRes)
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
        return;
    }
    this.login(this.messageForm.controls.name.value,this.messageForm.controls.password.value)
    this.success = true;
}

}
