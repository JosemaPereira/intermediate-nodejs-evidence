import express from 'express';
import { MainController } from '../controller/index.js';

/**
 * Route definitions of the Main page
 * @param {express.Express} app Instance of an Express application.
 */
export const MainRoute = (app) => {
  const router = express.Router();
  app.use('/', router);
  router.get('/', MainController.get);
};
