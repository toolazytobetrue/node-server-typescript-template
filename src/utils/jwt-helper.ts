
import * as fs from 'fs';
import * as jwt from 'jsonwebtoken';
export const privateKey = fs.readFileSync('template.key');
export const pubKey = fs.readFileSync('template.key.pub');
const verifyOptions: jwt.SignOptions = {
    algorithm: 'RS256',
    audience: 'template',
    expiresIn: '12h',
    issuer: 'template',
    subject: 'credentials',
};

export function signData(data: any, cb: CallableFunction) {
    jwt.sign(data, privateKey, verifyOptions, (err, token) => {
        cb(err, token);
    });
}

export function verifyData(input: string, cb: CallableFunction) {
    jwt.verify(input, pubKey, verifyOptions, (err, decoded) => {
        cb(err, decoded);
    });
}

export function decodeToken(token: string) {
    return jwt.decode(token);
}