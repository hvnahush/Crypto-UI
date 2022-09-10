import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import {ChartConfiguration, ChartType} from 'chart.js';
import {BaseChartDirective} from 'ng2-charts'

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.scss']
})
export class CoinDetailComponent implements OnInit {
  coindata : any;
  coinId !:string;
  days :number =1;
  currency :string ="INR";

  constructor(private activatedroute : ActivatedRoute , private api : ApiService) { }
  
  ngOnInit(): void {
    this.activatedroute.params.subscribe(val=>{
     this.coinId=val['id']
    })
    this.getcoindata();
  }
  getcoindata(){
    this.api.getcurrencybyId(this.coinId).subscribe(res=>{
      this.coindata=res;
      console.log(this.coindata)
    })
  }

}
