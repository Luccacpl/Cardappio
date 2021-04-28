import { NextFunction, Request, Response } from 'express'
import { getConnection, getRepository } from 'typeorm'
import User from '../models/User'
import bcrypt from 'bcryptjs'

//require("dotenv-safe")
import jwt from 'jsonwebtoken'
//var nodemailer = require('nodemailer');
//const transport = require('../../modules/mailer')

interface tokenStruct{
    name:string,
    id:number,
    iat:number
}

export default {
    async authenticate(req: Request, res: Response) {
        const {
            email,
            pass
        } = req.body;
        const repository = getRepository(User)
        try {


            const user = await repository.findOneOrFail({
                where: {
                    user_email: email.toLowerCase()
                }
            })
            console.log(user);
            if (bcrypt.compareSync(pass, user.user_pass)) {
                console.log(user);
                
                const sendUser = {
                    name: user.user_email,
                    id: user.user_id
                }
                const acessToken = jwt.sign(sendUser, process.env.ACCESS_TOKEN_SECRET,{expiresIn:"10d"});

                res.header({ authorization: acessToken })
                return res.status(200).json({ authorization: acessToken });
            }
            else {
                return res.status(400).json({ "ERROR": "usuario ou senha incorreto" })
            }

        } catch (e){
            return res.status(400).json({ "ERROR": "usuario ou senha incorreto" })
        }


    },
    

    async logout(req: Request, res: Response) {
        const repository = getRepository(User)
        const user = await repository.findOne()
        if (!user) {
            return res.sendStatus(401)
        }
        const token = 10 //jwt.sign({ id: user.id }, undefined, { expiresIn: "1ms" })

        return res.json({ token })
    },

    async authentificationToken(req: any, res: Response, next: NextFunction) {

        const authHeader = req.headers['authorization']
        const token = authHeader
        if (token == null) return res.sendStatus(401)

        try {
            const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

           
            req.user = user;
            next();
        }
        catch (e) {
            return res.sendStatus(401);
        }

    },
    async authentificationCustomerToken(req: any, res: Response, next: NextFunction) {

        const authHeader = req.headers['authorization']
        const token = authHeader
        if (token == null) return res.sendStatus(401)

        try {
            const user = jwt.verify(token, process.env.CUSTOMER_TOKEN_SECRET)
            console.log(user);
           
            req.customer = user;
            next();
        }
        catch (e) {
            return res.sendStatus(401);
        }

    }

}


