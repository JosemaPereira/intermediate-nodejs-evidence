import { constants } from 'http2';
import { StateService } from '../services/index.js';

const sessionName = 'counter';

export const StateController = {
  /** Get handler for set cookie
   *
   * @param {import('express').Request} req Request body
   * @param {import('express').Response} res Response body
   * @param {import('express').NextFunction} next Next function
   */
  setCookie: (req, res, next) => {
    try {
      StateService.setCookie(res);
      const message = {
        message: 'Cookie settled',
      };
      res.status(constants.HTTP_STATUS_OK).json(message);
    } catch (err) {
      next(err);
    }
  },
  /** Get handler for delete cookie
   *
   * @param {import('express').Request} req Request body
   * @param {import('express').Response} res Response body
   * @param {import('express').NextFunction} next Next function
   */
  deleteCookie: (req, res, next) => {
    try {
      StateService.deleteCookie(res);
      const message = {
        message: 'Cookie deleted',
      };
      res.status(constants.HTTP_STATUS_OK).json(message);
    } catch (err) {
      next(err);
    }
  },
  /** Session manager handler
   *
   * @param {import('express').Request} req Request body
   * @param {import('express').Response} res Response body
   * @param {import('express').NextFunction} next Next function
   */
  sessionManager: (req, res, next) => {
    let message = '';
    try {
      if (req.session[sessionName]) {
        StateService.updateSession(req, sessionName);
        message = { message: `Counter value ${req.session[sessionName]}` };
      } else {
        StateService.createSession(req, sessionName);
        message = { message: `Counter created` };
      }
      res.status(constants.HTTP_STATUS_OK).json(message);
    } catch (err) {
      next(err);
    }
  },
};
