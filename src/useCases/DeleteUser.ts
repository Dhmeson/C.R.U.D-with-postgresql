import { Database } from "../Contract/Database";

export async  function DeleteUser(DB:Database,params:any){   
    var response=await DB.delete(params)
    return response
}