import { Request, Response } from 'express';
import bcrypt from 'bcrypt'
import { getRepository } from 'typeorm';
import User from '../models/User'

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
                const user = {
                    user_email : email.toLowerCase(),
                    user_pass : encryptedPass,
                    user_name : name,
                    user_dt_nasc : dt_nasc
                }

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