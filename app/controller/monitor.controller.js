import { MonitorServices } from '../services/index.js';

export const MonitorController = {
  /**
   * Get handler for get about page
   * @param {import('express').Request} req Request body
   * @param {import('express').Response} res Response body
   * @param {import('express').NextFunction} next Next function
   */
  getPage: (req, res, next) => {
    try {
      const { query } = req;
      const { date } = MonitorServices.getDate();
      const headers = MonitorServices.getHeaders(req);
      const { sessionId: sessionID } = req;
      res.render('pages/monitor/index.pug', {
        date,
        sessionID,
        headers,
        query,
      });
    } catch (err) {
      next(err);
    }
  },
};
