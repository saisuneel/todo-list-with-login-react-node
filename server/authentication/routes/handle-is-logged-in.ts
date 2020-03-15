import {Request, Response} from "express";

// @ts-ignore
const handleIsLoggedIn = (req: Request, res: Response)=>{
    console.log("req.cookies", req.cookies);
}
export {handleIsLoggedIn}