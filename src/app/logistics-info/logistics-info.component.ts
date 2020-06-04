import { Component, OnInit } from '@angular/core';
import { LogInfo }from '../logInfo'
import { Location } from '@angular/common';
import { AppService } from '../app.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
@Component({
  selector: 'app-logistics-info',
  templateUrl: './logistics-info.component.html',
  styleUrls: ['./logistics-info.component.css']
})
export class LogisticsInfoComponent implements OnInit {
  logInfo = new LogInfo();
  constructor(
    private appService: AppService,
    private message: NzMessageService,
    private location: Location
  ) {
    this.logInfo.id='';
    this.logInfo.logCopName='';
    this.logInfo.logDepartureTm='';
    this.logInfo.logArrivalTm='';
    this.logInfo.logDeparturePl='';
    this.logInfo.logDest='';
    this.logInfo.logMOT='';
    this.logInfo.tempAvg='';
   }

  ngOnInit(): void {
  }
  add():void{
    if(this.logInfo.id==''){
      this.message.error('ID不能为空',{nzDuration:2000})
    }else{
      let loading = this.message.loading('数据提交中',{ nzDuration: 0}).messageId
      this.appService.addLogInfo(this.logInfo).subscribe(
        (data)=>{
        if(data.status == '1'){
          this.message.remove(loading);
          this.message.success('上链成功',{nzDuration:1000}).onClose.subscribe(()=>this.location.back());
        }else{
          this.message.error(JSON.stringify(data.message),{nzDuration: 1000})
        }
      },
      (error: Error) => {this.message.error(JSON.stringify(error),{nzDuration: 3000})}
      );
    }
  }
  cancel(){
    this.location.back();
  }
}
