import { LogInfo } from './logInfo';
import { ProcessInfo } from './processInfo';
import { SourceInfo } from './sourceInfo' ;
export class MilkInfo {
    milkID: string ;
    milkSourceInfo: SourceInfo;
    milkProcessInfo: ProcessInfo;
    milkLogInfo: LogInfo;
}