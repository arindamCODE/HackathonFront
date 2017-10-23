import { Http } from '@angular/http';
import { Hero } from './../Hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public hero: Hero[];
  url: string = 'http://localhost:5000/api/score';

  constructor(private http: Http) {

    http.get(this.url).subscribe(result => {
      this.hero = result.json() as Hero[];
    }, error => console.error(error)); 
   }

  ngOnInit() {
  }

}
