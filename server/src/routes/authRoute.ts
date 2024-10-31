import { prisma } from '../PrismaClient'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import express from 'express'
import { error } from 'console';

interface signupData{
    email: string;
    displayName: string;
    password:string
}
interface jwtSecret{
    JWT_SECRET:string
}
export const authRouter = express.Router();

authRouter.post('/signup', async (req, res) => {
    const { displayName, email, password }: signupData = req.body;
    const hashed = await jwt.sign({displayName:displayName,email:email},process.env.JWT_SECRET)
    try {
        const newUser = await prisma.user.create({
          data: {
            email: email,
            password: password,
            displayName: displayName,
            xp: 0,
          },
        });
        res.json(newUser);
    } catch (error) {
        res.json({error:error})
    }
    
})

authRouter.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const user = await prisma.user.findFirst({
        where: {
            email:email
        }
    })
    if (!user) res.json({ error: "User"})
    if (user?.password === password)
        res.status(200).json({ message: 'user verified' })
})

