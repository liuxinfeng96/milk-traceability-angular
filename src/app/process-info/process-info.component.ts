import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ProcessInfo } from '../processInfo'
import { Location } from '@angular/common';
@Component({
  selector: 'app-process-info',
  templateUrl: './process-info.component.html',
  styleUrls: ['./process-info.component.css']
})
export class ProcessInfoComponent implements OnInit {
  processInfo = new ProcessInfo();
  constructor(
    private appService: AppService,
    private location: Location,
    private message: NzMessageService
    ) {
      this.processInfo.id='';
      this.processInfo.proteinContent='';
      this.processInfo.sterilizeTime='';
      this.processInfo.storageTime='';
     }

  ngOnInit(): void {
  }

   add(): void {
    if(this.processInfo.id==''){
      this.message.error('ID不能为空',{nzDuration:2000})
    }else{
      let loading = this.message.loading('数据提交中',{ nzDuration: 0}).messageId
      this.appService.addProcessInfo(this.processInfo).subscribe(
        (data)=>{
        if(data.status == '1'){
          this.message.remove(loading)
          this.message.success('上链成功',{nzDuration:1000}).onClose.subscribe(()=>this.location.back());
        }else{
          this.message.error(JSON.stringify(data.message),{nzDuration: 1000})
        }
      },
      (error: Error) => {this.message.error(JSON.stringify(error),{nzDuration: 3000})}
      )
    }
  }
  cancel(){
    this.location.back();
  }
}
