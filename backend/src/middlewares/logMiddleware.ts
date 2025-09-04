import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const logMessage = `${new Date().toISOString()} - ${req.method} ${req.originalUrl}\n`;
    const logFilePath = path.join(__dirname, '../../logs/request.log');

    fs.appendFile(logFilePath, logMessage, (err) => {
        if (err) {
            console.error('Failed to write to log file:', err);
        }
    });

    next();
};

export default logMiddleware;