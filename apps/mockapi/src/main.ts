/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as cors from 'cors';
import { createMiddleware } from '@mswjs/http-middleware'
import { handlers } from './app/handlers';

const app = express();
app.use(cors());
app.use(createMiddleware(...handlers));

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
