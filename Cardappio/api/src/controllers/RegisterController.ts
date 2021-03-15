import { Request, Response } from 'express';
import bcrypt from 'bcrypt'
import { getRepository } from 'typeorm';
import User from '../models/User'
const emailExistence = require('email-existence');

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
        emailExistence.check(email, async function (err: any, checked: any) {
            if (checked) {
                try {
                    const user = await repo.findOneOrFail({
                        where: {
                            email: email
                        }
                    })
                    console.log(user);
                    return res.status(403).json({ "ERROR": "Email already registered" })
                }
                catch (e) {

                    try {
                        const user = new User();
                        user.email = email;
                        user.pass = encryptedPass;
                        user.firstName = firstname;
                        user.lastName = lastname;
                        user.dt_nasc = dt_nasc;
                        console.log(user);

                        return res.status(201).json(await repo.save(user));
                    }
                    catch (e) {
                        return res.status(500).json({"ERROR":e.message})
                    }
                }

            } else {
                return res.status(404).json({ "ERROR": "mail does not exists" });
            }
        });



    }
}