import express from 'express';
import { StateController } from '../controller/index.js';

/**
 * Route definitions of the State page
 * @param {express.Express} app Instance of an Express application.
 */
export const StatesRoute = (app) => {
  const router = express.Router();
  app.use('/state', router);
  router.get('/cookie', StateController.setCookie);
  router.get('/cookie/delete', StateController.deleteCookie);
  router.get('/session', StateController.sessionManager);
};
