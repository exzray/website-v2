import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {environment} from '../environments/environment';

import {AppComponent} from './app.component';
import {HomeComponent} from './home.component';
import {ChatbotComponent} from './chatbot.component';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { ChatbotItemComponent } from './chatbot-item.component';
import {DialogFlowService} from './shared/services/dialog-flow.service';
import {FormsModule} from '@angular/forms';
import { AutoScrollDirective } from './shared/directives/auto-scroll.directive';
import { ChatbotFloaterComponent } from './chatbot-floater.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatbotComponent,
    ChatbotItemComponent,
    ChatbotFloaterComponent,
    AutoScrollDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [DialogFlowService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
