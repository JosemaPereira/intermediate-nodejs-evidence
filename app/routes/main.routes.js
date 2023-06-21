import express from 'express';
import { MainController } from '../controller/index.js';

/**
 * Route definitions of the Main page
 * @name MainRoute
 * @param {express.Express} app Instance of an Express application.
 * @function
 * @memberof module:Routes
 */
export const MainRoute = (app) => {
  const router = express.Router();
  app.use('/', router);
  router.get('/', MainController.get);
};
