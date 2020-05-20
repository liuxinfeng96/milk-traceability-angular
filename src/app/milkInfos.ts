import { LogInfo } from './logInfo';
import { ProcessInfo } from './processInfo';
import { SourceInfo } from './sourceInfo' ;
export class MilkInfos{
    Key: string ;
    Record:{
        milkID: string ,
        milkSourceInfo: SourceInfo,
        milkProcessInof: ProcessInfo,
        milkLogInfo: LogInfo
    }
}