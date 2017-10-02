import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SignupService {
    API_BASE: String = 'http://localhost:3000/';
    constructor(private http: Http) { }

    // this is the method that calls out to the server and post a new user.
    signUp(userCreds) {
        console.log(userCreds);
        return this.http.post(this.API_BASE + 'signup', userCreds).toPromise().then(data => data);
    }
}
