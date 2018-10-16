import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login/login.component.html',
  styleUrls: ['./login/login.component.css']
})
export class AppComponent implements OnInit{
  title = 'esp4a';
  ngOnInit():void {

  }
  prender() {
    alert('Puto el que lo lea')
  }
  
}





