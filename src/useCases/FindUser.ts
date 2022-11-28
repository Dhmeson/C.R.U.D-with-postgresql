import { Database } from "../Contract/Database";

export async  function FindUser(DB:Database,params:any){   
    var response=await DB.findById(params)
    return response
}