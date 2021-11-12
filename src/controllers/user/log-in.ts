import jwt, { Secret } from 'jsonwebtoken';
import { GetUserRequestHandler, GetauthenticationRequestHandler } from '../../models/endpoints/endpoints';
import dotenv from 'dotenv';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { User } from '../../models/User';
dotenv.config();

const users: Map<string, User> = new Map([['soufiane2020@live.com', new User("soufiane2020@live.com","wachtwoord")]]);


const login = (req: Request, res: Response) => {

    console.log(users.get('soufiane2020'))

    let user = users.get(req.body.username);

    if(user == null){
        return res.status(404).end("User is not found or doesn't exist!");
    }else if(req.body.password.trim == null || req.body.password !== user.password){
        return res.status(401).end("Wrong username or password!");

    }
        return res.status(200).header('application/json').json(generateToken(req.body.username)
    );
    
};

//todo: make a register function

const generateToken = (username: string) =>{
    return jwt.sign({username: "soufiane2020"}, process.env.TOKEN_SECRET as Secret, { expiresIn: '1800s' });

};

var authenticateToken = function (req: Request, res: Response, next: NextFunction) {
    
    const authHeader = req.headers['authorization']
    const token = /*authHeader && authHeader.split(' ')[1]*/ authHeader;

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
        console.log(err)

    if (err) return res.sendStatus(403)

    req.body = user
    next()
  })
  
}

export default {login,authenticateToken,generateToken};
