import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  firstClick() {
    return console.log('clicked');
  }

  getUsers() {
    return this.http.get('https://reqres.in/api/users')
  }

  login(){
    return this.http.post('http://localhost:3333/auth',{email : 'paul.johnson@billyhill.co.uk', password: 'mypassword'}, httpOptions)
  }

  loginup(username, password){
    return this.http.post('http://localhost:3333/auth',{email : username, password: password}, httpOptions)
  }


}
