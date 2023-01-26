import express from 'express';
import morgan from 'morgan';
import apiRoute from './routes/api.route.js';
import {endPointNotFound} from './response-errors.js';
import cors from 'cors';

const server = express();

// Global middlewares
server.use(express.json());
server.use(morgan('dev'));
server.use(cors());

server.use('/api/v1/', apiRoute);
server.all('*', (req, res) => {
    res.status(404).json(endPointNotFound(req.path, req.method));
});
export default server;
