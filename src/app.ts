import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import path from 'path';

const app: express.Application = express();

app.set('port', 3000);
app.use(compression()); // Compress all responses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static pages and assets

app.get('/', (req: Request, res: Response) => {
    res.send('Hello');
});

export default app;