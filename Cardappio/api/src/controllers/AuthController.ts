import { Request, Response } from 'express'
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
        const repository = await getRepository(User)

        const header = JSON.stringify({
            'alg': 'HS256',
            'typ': 'JWT'
        });

        console.log("header é " + header)

        const payload = JSON.stringify({
            'email': 'treccia@treccia.com',
            'pass': '123456',
            'id': 1
        })

        console.log(payload)

        const base64Header = Buffer.from(header).toString('base64').replace(/=/g, '');
        const base64Payload = Buffer.from(payload).toString('base64').replace(/=/g, '');

        console.log(base64Header);
        console.log(base64Payload);

        const secret = 'segredinho';

        const data = base64Header + '.' + base64Payload;

        console.log(data);

        const signature = crypto
            .createHmac('sha256', secret)
            .update(data)
            .digest('base64');

        const signatureUrl = signature
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=/g, '')

        console.log(signatureUrl);
        console.log("______________________");


        const user = await repository.findOneOrFail(1);
        //  if (!user) {
        //     return res.sendStatus(401)
        // }

        // const isValidPassword = await bcrypt.compare(password, user.password)
        // if(!isValidPassword){
        //     return res.sendStatus(401)
        // }
        console.log(user);


        const encodedToken = base64Header + '.' + base64Payload + '.' + signatureUrl;
        console.log(encodedToken)
        try {
            return res.json(jwt.verify(encodedToken, "a"));
        }
        catch(e){
            return res.json({
                user: 'ae',
                encodedToken,
            })
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
    }

}


