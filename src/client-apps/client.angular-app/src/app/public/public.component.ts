import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
  title = 'client';
  username: string = '';
  password: string = '';
  
  constructor() { }

    ngOnInit() {
    }
  
    login() : void {
      if(this.username == 'admin' && this.password == 'admin'){
       console.log(this.username);
      }else {
        alert("Invalid credentials");
      }
    }

}
