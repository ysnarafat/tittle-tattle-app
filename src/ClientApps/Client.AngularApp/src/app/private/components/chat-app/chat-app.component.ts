import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'chat-app-container',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.scss']
})
export class ChatAppComponent implements OnInit {
  seedValue: string;

  constructor() {
    this.seedValue = '';
  }

  ngOnInit(): void {
  }

  seedData(ev: string): void {
    this.seedValue = ev;
  }
}
