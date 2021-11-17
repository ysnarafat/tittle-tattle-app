import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {environment} from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';

import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ChatAppComponent} from './private/components/chat-app/chat-app.component';
import {SidebarComponent} from './private/components/chat-app/sidebar/sidebar.component';
import {SidebarContentComponent} from './private/components/chat-app/sidebar/sidebar-content/sidebar-content.component';
import {ChatAreaComponent} from './private/components/chat-app/chat-area/chat-area.component';
import {ChatDefaultPageComponent} from './private/components/chat-app/chat-area/chat-default-page/chat-default-page.component';
import {ChatRoomComponent} from './private/components/chat-app/chat-area/chat-room/chat-room.component';

import {AngularFireModule} from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    ChatAppComponent,
    SidebarComponent,
    SidebarContentComponent,
    ChatAreaComponent,
    ChatDefaultPageComponent,
    ChatRoomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    RouterModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
