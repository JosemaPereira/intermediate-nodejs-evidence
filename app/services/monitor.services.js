const hostHead = 'Host';
const cacheHead = 'cache-control';

/**
 * @typedef DateInfo
 * @type {object}
 * @property {Date} date current date
 */

export const MonitorServices = {
  /**
   * Get current date info
   * @returns {DateInfo} Date information
   */
  getDate: () => {
    return { date: new Date() };
  },
  /**
   * Get headers
   * @param {import('express').Request} req Request body
   * @returns {object} Request headers
   */
  getHeaders: (req) => {
    return {
      [hostHead]: req.header(hostHead),
      [cacheHead]: req.header(cacheHead),
    };
  },
};
