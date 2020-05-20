import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MilkInfo } from '../milkInfo';
import { AppService } from '../app.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  milkInfo: MilkInfo;
  constructor(
    private route: ActivatedRoute,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.getProductInfo();
  }
  getProductInfo(){
    const id: string = this.route.snapshot.params.id;
    console.log(id)
    this.appService.queryMilk(id).subscribe(milkInfo=>this.milkInfo = milkInfo);
  }

}
