import * as express from 'express';
import { NextFunction, Response, Request } from "express";

var router = express.Router();

export const index = async (req: Request, res: Response, next: NextFunction) => {
    return res.send("Hello");
};

router.get('', index);

export {
    router
}
