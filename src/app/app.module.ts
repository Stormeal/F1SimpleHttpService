import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { SimpleHttpServiceComponent } from './simple-http-service/simple-http-service.component';
import { BetterHttpServiceComponentComponent } from './better-http-service-component/better-http-service-component.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpServiceComponent,
    BetterHttpServiceComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
