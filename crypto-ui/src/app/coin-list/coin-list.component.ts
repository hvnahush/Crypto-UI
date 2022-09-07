import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {

  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.getbannerdata();
    this.gettrendingdata();
  }
  getbannerdata(){
    this.api.getcurrency("INR").subscribe(res=>{
      console.log(res);
    })
  }
  gettrendingdata(){
    this.api.gettrendingcurrency("INR").subscribe(res=>{
      console.log(res);
    })
  }
}

