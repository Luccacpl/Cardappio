import {Request, Response} from 'express'
import {getConnection, getRepository} from 'typeorm'
import User from '../models/User'
import bcrypt from 'bcryptjs'
import crypto from 'crypto'
require("dotenv-safe")
var jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');
const transport = require('../../modules/mailer')

class AuthController{
    async authenticate(req: Request, res: Response){
        const repository = getRepository(User)
        const {email, password} = req.body
        
        const user = await repository.findOne({where: {email}})
        if (!user) {
            return res.sendStatus(401)
        }

        const isValidPassword = await bcrypt.compare(password, user.password)
        if(!isValidPassword){
            return res.sendStatus(401)
        }

        const token = jwt.sign({ id: user.id }, process.env.SECRET, {expiresIn: "1d"})
        
        user.password = ''
        user.secondPassword = ''
        
        return res.json({ 
            user,
            token
        })
    }

async logout(req: Request, res: Response){
        const repository = getRepository(User)
        const user = await repository.findOne()
        if (!user) {
            return res.sendStatus(401)
        }
        const token = jwt.sign({ id: user.id }, process.env.SECRET, {expiresIn: "1ms"})
        
        return res.json({token})
    }

}

export default new AuthController();