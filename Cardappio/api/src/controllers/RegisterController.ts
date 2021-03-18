import { Request, Response } from 'express';
import bcrypt from 'bcrypt'
import { getRepository } from 'typeorm';
import User from '../models/User'
import emailExistence from 'email-existence';

export default {
    async Register(req: Request, res: Response) {
        const repo = getRepository(User);
        const {
            email,
            pass,
            firstname,
            lastname,
            dt_nasc,
        } = req.body;

        const encryptedPass = bcrypt.hashSync(pass, 10);
        try {
            const user = await repo.findOneOrFail({
                where: {
                    email: email.toLowerCase()
                }
            })
            console.log(user);
            return res.status(403).json({ "ERROR": "Email already registered" })
        }
        catch (e) {

            try {
                const user = new User();
                user.email = email.toLowerCase();
                user.pass = encryptedPass;
                user.firstName = firstname;
                user.lastName = lastname;
                user.dt_nasc = dt_nasc;
                console.log(user);
                await repo.save(user)
                return res.status(201).json({ SUCCESS: user.email + " created" });
            }
            catch (e) {
                return res.status(500).json({ "ERROR": e.message })
            }
        }





    }
}