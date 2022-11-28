import { Request, Response } from "express";
import { person } from "../Contract/Database";
import { database } from "../server";
import { DeleteUser } from "../useCases/DeleteUser";
import { FindUser } from "../useCases/FindUser";
import { GetUsers } from "../useCases/GetUsers";

import { SaveUser } from "../useCases/SaveUser";
import { UpdateUser } from "../useCases/UpdateUser";

export class UserController {
    async newUser(req: Omit<Request,'body'> & { body: person }, res: Response){
        if(req.body.name=="" || req.body.name==undefined)return res.status(203).send('inavalid params');
        else
        {
            var result_query=await SaveUser(database,req.body)
            if(!result_query)return res.status(203).send('error the create new user');
            else res.status(201).send('created');
            
        }
            
    }
    async getUsers(req:Request,res:Response){
        var users_list=await GetUsers(database)
        res.status(200).json(users_list);  
    }
    async findUserbyId(req:Request,res:Response){
        var id=parseInt(req.params.id)
        var user:person=await FindUser(database,id)       
        res.json(user)           
    }
    async updateUser(req: Omit<Request,'body'> & { body: person }, res: Response){
        var isUpdated=await UpdateUser(database,req.body)       
        res.json(isUpdated)           
    }
    async deleteUserbyId(req:Request,res:Response){
        var id=req.body.id
        console.log(id)
        var user:person=await DeleteUser(database,id)       
        res.json(user)           
    }
    


}