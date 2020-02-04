
import * as fs from 'fs';
import * as jwt from 'jsonwebtoken';
const privateKey = fs.readFileSync('template.key');
const pubKey = fs.readFileSync('template.key.pub');
const verifyOptions = {
    algorithm: 'RS256',
    audience: 'template',
    expiresIn: '12h',
    issuer: 'templateserver',
    subject: 'admin_credentials',
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