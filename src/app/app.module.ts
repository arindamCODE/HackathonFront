import { HttpModule, ConnectionBackend } from '@angular/http';
import { FormService } from './form.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TimerComponent } from './timer/timer.component';
import { ModalComponent } from './modal/modal.component';


const routes: Routes = [
  { path: '', redirectTo: '/timer', pathMatch: 'full' },
  { path: 'form', component: FormComponent },
  { path: 'timer', component: TimerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent,
    TimerComponent,
    ModalComponent
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
