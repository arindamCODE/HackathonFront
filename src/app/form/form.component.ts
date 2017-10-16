import { TimerComponent } from './../timer/timer.component';
import { FormService } from './../form.service';
import { Hero } from './../Hero';
import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  
  id: number;
  name: string;
  emailid: string;
  score: number;

  constructor( private form: FormService) { }

  ngOnInit() {
  }

  saveDetails(ID: number, Name: string, EmailID: string) {

    this.id = ID;
    this.name = Name;
    this.emailid = EmailID;
    this.form.postUser(this.id, this.name ,this.emailid, this.score);
  }

}
