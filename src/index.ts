import dotnev from 'dotenv';
dotnev.config();
// eslint-disable-next-line import/first
import app from './app';
// eslint-disable-next-line import/first
import { logger } from './utils';

app.listen(app.get('port'), (): void => {
    console.log(`API server running at port ${app.get('port')}`);
    logger.info(`API server running at port ${app.get('port')}`);
});
