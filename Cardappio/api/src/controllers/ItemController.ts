import {Request,Response} from 'express';

export default {

    funcaoTesteGet(req:Request,res:Response){
        return res.json({teste:"teste GET"})
    },

    funcaoTestePost(req:Request,res:Response){
        console.log(req.body);
        return res.json({valor:"teste"})
    }
}

