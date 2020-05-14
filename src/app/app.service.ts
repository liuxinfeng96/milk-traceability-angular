import { Injectable } from '@angular/core';
import { SourceInfo } from './sourceInfo'
import { ProcessInfo } from './processInfo'
import { LogInfo } from './logInfo'
import { Observable, from } from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root',
})
export class AppService {
  private baseUrl = 'http://localhost:3000/' ;

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
}
