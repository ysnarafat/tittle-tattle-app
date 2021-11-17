import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ChatAppComponent} from './private/components/chat-app/chat-app.component';
import {SidebarComponent} from './private/components/chat-app/sidebar/sidebar.component';
import {SidebarContentComponent} from './private/components/chat-app/sidebar/sidebar-content/sidebar-content.component';
import {ChatAreaComponent} from './private/components/chat-app/chat-area/chat-area.component';
import {ChatDefaultPageComponent} from './private/components/chat-app/chat-area/chat-default-page/chat-default-page.component';
import {ChatRoomComponent} from './private/components/chat-app/chat-area/chat-room/chat-room.component';

const routes: Routes = [
  {
    path: '',
    component: ChatAppComponent,
    children: [
      {
        path: 'room/:id',
        component: ChatRoomComponent
      },
      {
        path: '',
        component: ChatDefaultPageComponent
      }
    ]
    //canActivate: [ChatGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
