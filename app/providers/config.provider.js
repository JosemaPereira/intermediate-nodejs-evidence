import 'dotenv/config';

/** @type {string} Connection string to the database */
const dbConnectionSting = `mongodb://${process.env.DBUSER}:${process.env.DBPASS}@${process.env.DBHOST}:${process.env.DBPORT}/${process.env.DBCOLLECTION}?authSource=admin`;

/**
 * @typedef Config
 * @type {object}
 * @property {string} host Hostname
 * @property {number} port Port
 * @property {string} user Username
 * @property {string} dbConnectionSting Database url
 */

/** @type {Config} */
export const defaultConfig = {
  host: process.env.HOST,
  port: Number(process.env.PORT),
  user: process.env.USERNAME,
  dbConnectionSting,
};
