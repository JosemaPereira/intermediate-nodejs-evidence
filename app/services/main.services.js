import { Request } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';

/**
 * @typedef HeaderObject
 * @type {object}
 * @property {string[]} rawHeaders All headers
 * @property {string} url Port
 * @property {ParamsDictionary} params QueryParams
 * @property {ParsedQs} queryString QueryString
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
   * @param {Request} req Request body
   * @throws {Error} Query string is empty
   * @returns {HeaderResponse} Response
   */
  getHeaders: async (req) => {
    try {
      const { rawHeaders, url, params, query } = req;
      if (Object.keys(query).length) {
        throw new Error('Query empty');
      }
      return {
        message: 'This is a GET Request',
        request: { rawHeaders, url, params, queryString: query },
      };
    } catch (err) {
      throw err;
    }
  },
};
