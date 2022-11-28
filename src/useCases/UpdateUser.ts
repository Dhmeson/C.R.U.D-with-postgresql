import { Database } from "../Contract/Database";

export async  function UpdateUser(DB:Database,params:any){   
    var response=await DB.update(params)
    return response
}