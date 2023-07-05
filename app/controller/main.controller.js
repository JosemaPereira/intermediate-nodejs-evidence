import { constants } from 'http2';
import { MainServices } from '../services/index.js';

export const MainController = {
  /**
   * Get handler for Main route
   * Controller functions for Main Route
   * @param {import('express').Request} req Request body
   * @param {import('express').Response} res Response body
   * @param {import('express').NextFunction} next Next function
   */
  get: async (req, res, next) => {
    try {
      const message = await MainServices.getHeaders(req);
      res.status(constants.HTTP_STATUS_OK).json(message);
    } catch (err) {
      next(err);
    }
  },
};
