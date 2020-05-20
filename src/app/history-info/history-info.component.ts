import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HistoryInfo } from '../historyInfo';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-history-info',
  templateUrl: './history-info.component.html',
  styleUrls: ['./history-info.component.css']
})
export class HistoryInfoComponent implements OnInit {
  historyInfos: HistoryInfo[];
  milkId: string
  constructor(
    private appService: AppService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getHistoryInfo()
  }
  getHistoryInfo(){
    const id: string = this.route.snapshot.params.id;
    this.milkId = id ;
    this.appService.getHistoryInfo(id).subscribe(data=>this.historyInfos = data);
  }
}
