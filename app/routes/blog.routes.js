import express from 'express';
import { BlogController } from '../controller/index.js';

/**
 * Route definitions of the Blog page
 * @name BlogRoute
 * @param {express.Express} app Instance of an Express application.
 * @function
 * @memberof module:Routes
 */
export const BlogRoute = (app) => {
  const router = express.Router();
  app.use('/blog', router);
  router.get('/', BlogController.get);
  router.get('/:id', BlogController.getById);
  router.post('/', BlogController.post);
  router.put('/:id', BlogController.put);
  router.delete('/:id', BlogController.drop);
};
