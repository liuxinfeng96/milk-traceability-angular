import { Component, OnInit } from '@angular/core';
import { MilkInfo } from '../milkInfo'
import { MilkInfos } from '../milkInfos'
import { AppService } from '../app.service'
@Component({
  selector: 'app-product-query',
  templateUrl: './product-query.component.html',
  styleUrls: ['./product-query.component.css']
})
export class ProductQueryComponent implements OnInit {

  milkInfos: MilkInfos[];
  searchMilkInfo: MilkInfo
  searchId: string;
  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.getMilks();
  }
  getMilks(): void {
    this.appService.queryMilks().subscribe(milkInfos=>this.milkInfos = milkInfos);
  }
  queryMilk(){
    console.log(this.searchId);
    this.appService.queryMilk(this.searchId).subscribe(milkInfo=>this.searchMilkInfo = milkInfo);
  }

}
