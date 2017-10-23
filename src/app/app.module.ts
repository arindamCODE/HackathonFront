import { HttpModule, ConnectionBackend } from '@angular/http';
import { FormService } from './form.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { ModalComponent } from './modal/modal.component';
import { ResultsComponent } from './results/results.component';
import { PreResultComponent } from './pre-result/pre-result.component';


const routes: Routes = [
  { path: '', redirectTo: '/timer', pathMatch: 'full' },
  { path: 'timer', component: TimerComponent },
  { path: 'result', component: ResultsComponent },
  { path: 'pre', component: PreResultComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    ModalComponent,
    ResultsComponent,
    PreResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
