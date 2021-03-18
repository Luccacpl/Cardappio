import { NextFunction, Request, Response } from 'express'
import { getConnection, getRepository } from 'typeorm'
import User from '../models/User'
import bcrypt from 'bcryptjs'
import crypto from 'crypto'
//require("dotenv-safe")
import jwt from 'jsonwebtoken'
//var nodemailer = require('nodemailer');
//const transport = require('../../modules/mailer')

export default {
    async authenticate(req: Request, res: Response) {
        const {
            email,
            pass
        } = req.body;
        console.log(email);
        const repository = getRepository(User)
        try {

            
            const user = await repository.findOneOrFail({
                where: {
                    email: email
                }
            })
            console.log(user);
            if (bcrypt.compareSync(pass, user.pass)) {
                console.log(user);
                const sendUser = {
                    name: user.firstName,
                    id: user.id
                }
                const acessToken = jwt.sign(sendUser, process.env.ACCESS_TOKEN_SECRET || "kekw");

                res.header({ authorization: acessToken })
                return res.status(200).json({ authorization: acessToken });
            }
            else {
                return res.status(400).json({ "ERROR": "usuario ou senha incorreto" })
            }

        } catch (e) {
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
            //console.log(user);
            req.user = user;
            next();
        }
        catch (e) {
            return res.status(402).json({ "deu": e.message })
        }
        
    }

}


