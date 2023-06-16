export const AboutController = {
  /** Get handler for get about page
   * @param {import('express').Request} req Request body
   * @param {import('express').Response} res Response body
   * @param {import('express').NextFunction} next Next function
   */
  getPage: (req, res, next) => {
    try {
      res.render('pages/about/index.pug');
    } catch (err) {
      next(err);
    }
  },
};
