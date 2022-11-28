export interface person{
    id?:number
    name:string
    age:number
}

export interface Database{
    create(params:person):Promise<boolean>
    findById(params:any):Promise<any>
    findAll():Promise<any>
    update(params:person):Promise<boolean>
    delete(params:any):Promise<any>
    

}