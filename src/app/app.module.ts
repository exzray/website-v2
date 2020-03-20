import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {environment} from '../environments/environment';

import {AppComponent} from './app.component';
import {HomeComponent} from './home.component';
import {ChatbotComponent} from './chatbot.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatbotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
