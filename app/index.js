import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  configuration,
  dbConnection,
  handleError,
  logError,
} from './middleware/index.js';
import { defaultConfig } from './providers/index.js';
import {
  AboutRoute,
  BlogRoute,
  MainRoute,
  MonitorRoute,
  StatesRoute,
} from './routes/index.js';

const app = express();
const ttl = 100 * 1000;
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

app.set('views', path.join(dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  session({
    secret: 'asdf123',
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: ttl },
  }),
);

app.use(configuration);
app.use(dbConnection);

MainRoute(app);
StatesRoute(app);
AboutRoute(app);
MonitorRoute(app);
BlogRoute(app);

app.use(logError);
app.use(handleError);

app.listen(defaultConfig.port, () => {
  console.log(
    `${defaultConfig.user} listen at http://${defaultConfig.host}:${defaultConfig.port}`,
  );
});
