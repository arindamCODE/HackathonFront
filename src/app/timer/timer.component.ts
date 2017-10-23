import { BrowserModule } from '@angular/platform-browser';
import { FormService } from './../form.service';
import { ModalComponent } from './../modal/modal.component';
import { Hero } from './../Hero';
import { Component, OnInit, NgModule } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FormsModule } from '@angular/forms';

 
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  id: number;
  name: string;
  emailid: string;

  public ticks = 0;

  public finish: Boolean = false;
  public continue: Boolean = true;

  timeOutFlag: boolean = false;
  timeOutStarted: boolean = false;
  rand: number = 1;
  public score: number = 0;

  val: number = 1;
  idbox: string = 'box1';

  constructor(private form: FormService) {
    let shuffle = Observable.timer(500, 500); 
    shuffle.subscribe(time => {
      this.changeColour(this.val, this.idbox);
    });
   }

  StartTimeout() {
    setTimeout(() => {
      this.timeOutFlag = true;
    }, 10000);
  }


  GenerateRandomBox() {
    this.rand = (Math.floor((Math.random() * 10) + 1) % 4) + 1;
  }

  
  changeColour(boxValue: number, id: string) {
    if (this.continue) {
      document.getElementById(id).style.background = "#000";
      this.GenerateRandomBox();
      let boxId = this.rand.toString();
      boxId = "box" + boxId;
      document.getElementById(boxId).style.background = "#fff";
      this.val = this.rand;
      this.idbox = boxId;
    }
  }

  
  BoxClick(boxValue: number, id: string) {
    if (this.timeOutStarted === false) {
      this.StartTimeout(); 
      this.timeOutStarted = true;
      
    }
    if (this.timeOutFlag === false) {
      if (boxValue == this.rand) {
        this.score++;
        console.log("score" + this.score);
        this.changeColour(boxValue, id);
      }
      else {
        console.log("Oops!! Keep trying...")
      }
    }

    else {
      this.continue = false;
      console.log(this.finish);
      this.finish = true;
    }

  }

  saveDetails(ID: number, Name: string, EmailID: string) {

    this.id = ID;
    this.name = Name;
    this.emailid = EmailID;
    this.form.postUser(this.id, this.name, this.emailid, this.score);
  }

  ngOnInit() {
  }

}
