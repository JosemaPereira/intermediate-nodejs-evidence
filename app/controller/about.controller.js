/**
 * @typedef {import("express").Request} Request
 * @typedef {import("express").Response} Response
 * @typedef {import("express").NextFunction} NextFunction
 */

export const AboutController = {
  /**
   * Get handler for get about page
   * @param {Request} req Request body
   * @param {Response} res Response body
   * @param {NextFunction} next Next function
   */
  getPage: (req, res, next) => {
    try {
      res.render('pages/about/index.pug');
    } catch (err) {
      next(err);
    }
  },
};
