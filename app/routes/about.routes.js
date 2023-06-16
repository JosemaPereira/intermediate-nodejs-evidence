import express from 'express';
import { AboutController } from '../controller/index.js';

/**
 * Route definitions of the About page
 * @param {express.Express} app Instance of an Express application.
 */
export const AboutRoute = (app) => {
  const router = express.Router();
  app.use('/about', router);
  router.get('/', AboutController.getPage);
};
