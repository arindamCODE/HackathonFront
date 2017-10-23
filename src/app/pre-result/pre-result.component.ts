import { ResultsComponent } from './../results/results.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-result',
  templateUrl: './pre-result.component.html',
  styleUrls: ['./pre-result.component.css']
})
export class PreResultComponent implements OnInit {

  constructor() { }

  result : ResultsComponent;

  ngOnInit() {
  }

}
