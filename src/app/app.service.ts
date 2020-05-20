import { Injectable } from '@angular/core';
import { SourceInfo } from './sourceInfo'
import { ProcessInfo } from './processInfo'
import { LogInfo } from './logInfo'
import { MilkInfos} from './milkInfos'
import { MilkInfo } from './milkInfo'
import { Observable, from } from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { HistoryInfo} from './historyInfo';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root',
})
export class AppService {
  private baseUrl = 'http://localhost:3000/' ;
  milkInfos: MilkInfos[]
  constructor(private http: HttpClient) {}

  addSourceInfo(sourceInfo: SourceInfo): Observable<any> {
    return this.http.post<SourceInfo>(this.baseUrl+'addSourceInfo',sourceInfo,httpOptions);
  }
  addProcessInfo(processInfo: ProcessInfo): Observable<any>{
    return this.http.post<ProcessInfo>(this.baseUrl+'addProcessInfo',processInfo,httpOptions);
  }
  addLogInfo(logInfo: LogInfo): Observable<any>{
    return this.http.post<LogInfo>(this.baseUrl+'addLogInfo',logInfo,httpOptions);
  }
  queryMilks(): Observable<MilkInfos[]>{
    return this.http.get<MilkInfos[]>(this.baseUrl+'queryAllMilks');
  }
  queryMilk(searchId: string): Observable<MilkInfo>{
    return this.http.get<MilkInfo>(this.baseUrl+'queryMilk',{params:{id:searchId}});
  }
  getHistoryInfo(searchId: string): Observable<HistoryInfo[]>{
    return this.http.get<HistoryInfo[]>(this.baseUrl+'getHistoryInfo',{params:{id:searchId}});
  }
}
