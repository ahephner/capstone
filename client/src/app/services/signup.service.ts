import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class SignupService {
    constructor(private http: Http){ }

    getTest(){
        return this.http.get('localhost:3000/testservice').map((response: Response) =>{
            return response.json().payload;
        });
    }
}
