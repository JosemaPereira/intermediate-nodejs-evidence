const cookieName = 'mainCookie';
const contentCookie = 'Hello';

export const StateService = {
  /**
   * Set cookie service
   * @param {import('express').Response} res Response body
   */
  setCookie: (res) => {
    res.cookie(cookieName, contentCookie);
  },
  /**
   * Delete cookie service
   * @param {import('express').Response} res Response body
   */
  deleteCookie: (res) => {
    res.clearCookie(cookieName);
  },
  /**
   * Create session service
   * @param {import('express').Request} res Request body
   * @param {string} sessionVar Session var name
   */
  createSession: (req, sessionVar) => {
    req.session[sessionVar] = 1;
  },
  /**
   * Update session service
   * @param {import('express').Request} res Request body
   * @param {string} sessionVar Session var name
   */
  updateSession: (req, sessionVar) => {
    req.session[sessionVar] += 1;
  },
};
