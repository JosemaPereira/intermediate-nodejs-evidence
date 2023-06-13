import { NextFunction, Request, Response } from 'express';
import { constants } from 'http2';

/**
 * Log Error middleware
 * @param {Error} err Error object
 * @param {Request} req Request Object
 * @param {Response} res Response Object
 * @param {NextFunction} next Callback function
 */
export const logError = (err, req, res, next) => {
  console.log(err);
  next(err);
};

/**
 * Handle Error middleware
 * @param {Error} err Error object
 * @param {Request} req Request Object
 * @param {Response} res Response Object
 * @param {NextFunction} next Callback function
 */
export const handleError = (err, req, res, next) => {
  res
    .status(constants.HTTP_STATUS_INTERNAL_SERVER_ERROR)
    .json({ error: err.message });
};
