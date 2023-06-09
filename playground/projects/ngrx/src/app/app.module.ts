import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { RxjsInPracticeModule } from './rxjs-in-practice/rxjs-in-practice.module';
import { ObservablesModule } from './observables/observables.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ObservablesModule,
    RxjsInPracticeModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
