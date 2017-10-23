import { Hero } from './Hero';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class FormService {
    constructor(private http: Http) {

    }

    private url: string = 'http://localhost:5000/api/score';

    hero: Hero;

    postUser(ID: number, Name: string, EmailID: string, Score: number) {

        console.log(ID);
        console.log(Name);
        console.log(EmailID);
        console.log(Score);

        this.hero = new Hero(ID, Name, EmailID, Score);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.post(this.url, this.hero, options).map(response => response.json())
            .subscribe(
            () => { console.log('Success') }
            );
    }
}