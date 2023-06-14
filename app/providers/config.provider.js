import 'dotenv/config';

/**
 * @typedef Config
 * @type {object}
 * @property {string} host Hostname
 * @property {(number|string)} port Port
 * @property {string} user Username
 */

/** @type {Config} */
export const defaultConfig = {
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USERNAME,
};
