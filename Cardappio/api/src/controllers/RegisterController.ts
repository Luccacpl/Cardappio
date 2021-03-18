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
            name,
            dt_nasc,
        } = req.body;

        const encryptedPass = bcrypt.hashSync(pass, 10);
        try {
            const user = await repo.findOneOrFail({
                where: {
                    user_email: email.toLowerCase()
                }
            })
            console.log(user);
            return res.status(403).json({ "ERROR": "Email already registered" })
        }
        catch (e) {

            try {
                const user = new User();
                //user.name = 'mano';
                user.user_email = email.toLowerCase();
                user.user_pass = encryptedPass;
                user.user_name = name;
                user.user_dt_nasc = dt_nasc;
                console.log(user);
                await repo.save(user)
                return res.status(201).json({ SUCCESS: user.user_email + " created" });
            }
            catch (e) {
                return res.status(500).json({ "ERROR": e })
            }
        }





    }
}