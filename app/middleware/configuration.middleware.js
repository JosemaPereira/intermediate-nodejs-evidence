import { defaultConfig } from '../providers/index.js';

/**
 * Configuration middleware
 * @name configuration
 * @param {import('express').Request} req Request Object
 * @param {import('express').Response} res Response Object
 * @param {import('express').NextFunction} next Callback function
 * @function
 * @memberof module:Middleware
 */
export const configuration = (req, res, next) => {
  req.config = defaultConfig;
  next();
};
