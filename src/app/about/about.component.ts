import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User , Challenge} from '../_models';
import { UserService, ChallengeService, AuthenticationService } from '../_services';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];
  challenges: Challenge[] = [];
  selectedChallenge: Challenge;

  constructor(
      private authenticationService: AuthenticationService,
      private userService: UserService,
      private challengeService: ChallengeService
  ) {
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
          this.currentUser = user;
      });
  }

  ngOnInit() {
    this.loadAllUsers();
    this.loadAllChallenges();
}

ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
}

deleteUser(id: number) {
    this.userService.delete(id).pipe(first()).subscribe(() => {
        this.loadAllUsers()
    });
}

onSelectChallenge(challenge: Challenge): void {
    if(this.selectedChallenge === challenge){
        this.selectedChallenge = null;
        return;
    }
  this.selectedChallenge = challenge;
}

private loadAllUsers() {
    this.userService.getAll().pipe(first()).subscribe(users => {
        this.users = users;
    });
}

private loadAllChallenges(){
  this.challengeService.getAll().pipe(first()).subscribe(challenges => {
    this.challenges = challenges;
  })
}
}