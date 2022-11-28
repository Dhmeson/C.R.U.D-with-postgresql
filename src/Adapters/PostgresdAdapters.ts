import pgPromise from 'pg-promise' 
import { Database, person } from '../Contract/Database'
import { v4 } from 'uuid';
export class PostgressAdapters implements Database{
    connection
    constructor(){
        this.connection=pgPromise()("postgres://postgres:dhmes123@localhost:5000/postgres")       
    }
    async create( params: person): Promise<boolean> {
        var sql="INSERT INTO persons(ID,name,Age) VALUES($1,$2,$3) "
        var id=v4()
        try {
            var result=await this.connection.query(sql,[id,params.name,params.age]).then(()=>{return true})
            return result
        } catch (error) {
            return false
        }
       
    }
    async findById( params: any): Promise<any> {
        var sql="SELECT * FROM persons WHERE ID=($1);"
        try {
            var result=await this.connection.query(sql,[params])
            return result
        } catch (error) {
            return null
        }
        
    }
    async findAll( ): Promise<any> {
        var sql="SELECT * FROM persons ;"
        try {
            var result=await this.connection.query(sql)
            return result
        } catch (error) {
            return null
        }
    }
    async update( params: person): Promise<boolean> {
        var sql="UPDATE persons SET age=($2),name=($3)  WHERE ID=($1) ;"
        try {
            var result=await this.connection.query(sql,[params.id,params.age,params.name]).then(()=>{return true})
            return result
        } catch (error) {
            return false
        }
    }
    async delete( params: any): Promise<any> {
        var sql="DELETE FROM persons WHERE ID=($1) ;"
        try {
            var result=await this.connection.query(sql,[params]).then(()=>{return true})
            return result
        } catch (error) {
            return false
        }
    }
   


}