import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crypto-ui';
  selectedCurrency : string = "INR";
  constructor(){

  }
  sendcurrency(event:string){
  alert(event);
  }
}
