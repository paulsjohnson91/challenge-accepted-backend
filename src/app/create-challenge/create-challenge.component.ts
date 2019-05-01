import { Component, OnInit } from '@angular/core';
import { Challenge, ChallengeItems } from '../_models/challenge';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ChallengeService } from '../_services';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-create-challenge',
  templateUrl: './create-challenge.component.html',
  styleUrls: ['./create-challenge.component.scss']
})
export class CreateChallengeComponent implements OnInit {
  challenge = new Challenge();
    post: any = '';
    formGroup = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      challengeitems: new FormArray([
        new FormControl(''),
      ])
    });

  challengeID : number
  get challengeitems() {
    return this.formGroup.get('challengeitems') as FormArray;
  }
  addChallengeItem() {
    this.challengeitems.push(this.fb.control(''));
    return
  }


  constructor(private fb: FormBuilder, private challengeService: ChallengeService) { }

  ngOnInit() {
    // this.createForm();
  }

  createForm() {
    // this.formGroup = this.fb.group(this.challenge);
  }

  onSubmit(challengesubmitted){
    // console.log(challengesubmitted)
    this.challenge.name = challengesubmitted.name
    this.challenge.description = challengesubmitted.description
    this.challenge.challengeitems = [new ChallengeItems()]
    for (var i=0; i<challengesubmitted.challengeitems.length; i++) {
      var c =new ChallengeItems()
      c.item = challengesubmitted.challengeitems[i]
      c.index = i
      if(i === 0){
        this.challenge.challengeitems[0] = c
      }
      else{
      this.challenge.challengeitems.push(c)
      } 
    }
    this.challenge.challengetype = "BASIC"
    this.challengeService.create(this.challenge).pipe(first()).subscribe(
      (val) => {
          console.log("POST call successful value returned in body", 
                      val);
          this.challengeID = val.id
      },
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      });
  }

}
