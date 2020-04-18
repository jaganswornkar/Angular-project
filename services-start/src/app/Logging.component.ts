export class LoggingService {
    logStatusChange(status:string){
        console.log("A server status changed, new Status: ",status);
    }
    logAccountName(name:string,status){
        console.log("A new server is created with account: ",name, "with account status: ",status);
    }
}