import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Challenge } from '../_models';

@Injectable({ providedIn: 'root' })
export class ChallengeService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Challenge[]>(`http://localhost:3333/challenge`);
    }

    getById(id: number) {
        return this.http.get(`http://localhost:3333/challenge/${id}`);
    }

    // register(user: User) {
    //     return this.http.post(`http://localhost:3333/users/register`, user);
    // }

    update(challenge: Challenge) {
        return this.http.put(`http://localhost:3333/challenge/${challenge.id}`, challenge);
    }

    delete(id: number) {
        return this.http.delete(`http://localhost:3333/challenge/${id}`);
    }
}