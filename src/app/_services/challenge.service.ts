import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Challenge } from '../_models';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ChallengeService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Challenge[]>(environment.apiUrl + `/challenge`);
    }

    getById(id: number) {
        return this.http.get(environment.apiUrl + `/challenge/${id}`);
    }

    // register(user: User) {
    //     return this.http.post(`http://localhost:3333/users/register`, user);
    // }

    update(challenge: Challenge) {
        return this.http.put(environment.apiUrl + `/challenge/${challenge.id}`, challenge);
    }

    delete(id: number) {
        return this.http.delete(environment.apiUrl + `/challenge/${id}`);
    }
}