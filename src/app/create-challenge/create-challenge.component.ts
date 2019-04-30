import { Component, OnInit } from '@angular/core';
import { Challenge } from '../_models/challenge';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-challenge',
  templateUrl: './create-challenge.component.html',
  styleUrls: ['./create-challenge.component.scss']
})
export class CreateChallengeComponent implements OnInit {
  challenge = new Challenge();
    post: any = '';
    formGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm(this.challenge);
  }

  createForm(challenge: Challenge) {
    this.formGroup = this.fb.group(challenge);
  }

  onSubmit(){
    console.log(this.challenge)
  }

}
