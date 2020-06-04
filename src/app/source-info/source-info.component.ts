import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SourceInfo } from '../sourceInfo'
import { Location } from '@angular/common';
@Component({
  selector: 'app-source-info',
  templateUrl: './source-info.component.html',
  styleUrls: ['./source-info.component.css']
})
export class SourceInfoComponent implements OnInit{
  sourceInfo = new SourceInfo();
  constructor(
    private appService: AppService,
    private message: NzMessageService,
    private location: Location
    ) { 
      this.sourceInfo.id='';
      this.sourceInfo.grassState='';
      this.sourceInfo.cowState='';
      this.sourceInfo.milkState='';
    }
  ngOnInit(){
  }
  add(): void {
    if(this.sourceInfo.id==''){
      this.message.error('ID不能为空',{nzDuration:2500})
    }else{
      let loading = this.message.loading('数据提交中',{ nzDuration: 2500}).messageId
      
      this.appService.addSourceInfo(this.sourceInfo).subscribe(
        (data)=>{
        this.message.remove(loading)
        if(data.status == '1'){
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
