import { NextFunction, Request, Response } from 'express';
import { constants } from 'http2';
import { MainServices } from '../services/index.js';

export const MainController = {
  /** Get handler for Main route
   * Controller functions for Main Route
   * @param {Request} req Request body
   * @param {Response} res Response body
   * @param {NextFunction} next Next function
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
