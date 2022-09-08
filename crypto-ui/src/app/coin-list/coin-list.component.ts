import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {
  bannerdata : any = [];
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['symbol', 'current_price', 'price_change_percentage_24h', 'market_cap'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.getbannerdata();
    this.gettrendingdata();
  }
  getbannerdata(){
    this.api.getcurrency("INR").subscribe(res=>{
      console.log(res);
      this.bannerdata=res;
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    })
  }
  gettrendingdata(){
    this.api.gettrendingcurrency("INR").subscribe(res=>{
      console.log(res);
     
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

