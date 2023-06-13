/**
 * @typedef HeaderObject
 * @type {object}
 * @property {string[]} rawHeaders All headers
 * @property {string} url Port
 * @property {import('express-serve-static-core').ParamsDictionary} params QueryParams
 * @property {import('qs').ParsedQs} queryString QueryString
 */

/**
 * @typedef HeaderResponse
 * @type {object}
 * @property {string} message Message
 * @property {HeaderObject} request Header object response
 */

export const MainServices = {
  /**
   * Get headers from a request body
   * @param {import('express').Request} req Request body
   * @throws {Error} Query string is empty
   * @returns {HeaderResponse} Response
   */
  getHeaders: async (req) => {
    const { rawHeaders, url, params, query } = req;
    if (!Object.keys(query).length) {
      throw new Error('Query empty');
    }
    return {
      message: 'This is a GET Request',
      request: { rawHeaders, url, params, queryString: query },
    };
  },
};
