import express, { Request, Response } from 'express'
import { PostgressAdapters } from './Adapters/PostgresdAdapters'
import { userRoutes } from './routes/userRouter'

export const database=new PostgressAdapters()
const server=express()
server.use(express.json())
server.use(userRoutes)
server.get("/",(req:Request,res:Response)=>{
  res.send("ok")
})

server.listen(8080,()=>{console.log("running port 8080")})



