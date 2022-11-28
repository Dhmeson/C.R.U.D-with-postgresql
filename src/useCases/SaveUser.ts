import { Database } from "../Contract/Database";

export async  function SaveUser(DB:Database,params:any){
    var response=await DB.create(params)
    return response
}