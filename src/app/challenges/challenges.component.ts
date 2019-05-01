import { Component, OnInit } from '@angular/core';
import { User, Challenge} from '../_models';
import { ChallengeService, AuthenticationService } from '../_services';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {
  challenges: Challenge[] = [];
  selectedChallenge: Challenge;
  currentUserSubscription: Subscription;
  currentUser: User;

  constructor(
    private authenticationService: AuthenticationService,
    private challengeService: ChallengeService,
    private router: Router
) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
        this.currentUser = user;
    });
}

  ngOnInit() {
    this.loadAllChallenges();
  }

  onSelectChallenge(challenge: Challenge): void {
    if(this.selectedChallenge === challenge){
        this.selectedChallenge = null;
        return;
    }
  this.selectedChallenge = challenge;
}

private loadAllChallenges(){
  console.log("here")
  this.challengeService.getAll().pipe(first()).subscribe(challenges => {
    this.challenges = challenges;
  })
  console.log(this.challenges)
}

createChallenge() {
  this.authenticationService.logout();
  this.router.navigate(['/createchallenge']);
}

deleteChallenge(id: number) {
  this.challengeService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllChallenges()
  });
}

}
