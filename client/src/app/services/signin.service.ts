import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SigninService {
    API_BASE: String = 'http://localhost:3000/';
    constructor(private http: Http) { }

     signIn(email:string, password: string, name: string) {
        
        return this.http.post(this.API_BASE + 'signin', JSON.stringify({email: email, password: password, name: name}))
            .map((response: Response) => {
                let user = response.json();
                if (user && user.token){
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            });
    }
    logout(){
        localStorage.removeItem('currentUser');
    }
}