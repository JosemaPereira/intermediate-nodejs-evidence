import express from 'express';
import { MonitorController } from '../controller/index.js';

/**
 * Route definitions of the Monitor page
 * @param {express.Express} app Instance of an Express application.
 */
export const MonitorRoute = (app) => {
  const router = express.Router();
  app.use('/monitor', router);
  router.get('/', MonitorController.getPage);
};
