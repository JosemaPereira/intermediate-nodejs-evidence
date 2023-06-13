import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { handleError, logError } from './middleware/index.js';
import { defaultConfig } from './providers/index.js';
import { MainRoute } from './routes/index.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

MainRoute(app);

app.use(logError);
app.use(handleError);

app.listen(defaultConfig.port, () => {
  console.log(
    `${defaultConfig.user} listen at http://${defaultConfig.host}:${defaultConfig.port}`,
  );
});
