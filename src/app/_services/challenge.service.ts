import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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


    create (challenge: Challenge){
        return this.http.post<Challenge>(environment.apiUrl + `/challenge`,challenge)
    }

    update(challenge: Challenge) {
        return this.http.put(environment.apiUrl + `/challenge/${challenge.id}`, challenge);
    }

    delete(id: number) {
        return this.http.delete(environment.apiUrl + `/challenge/${id}`);
    }

}