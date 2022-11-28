import { Database, person } from "../Contract/Database";

export async  function GetUsers(DB:Database){
    var response:person[]=await DB.findAll()
    return response
}