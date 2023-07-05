import { constants } from 'http2';
import { BlogServices } from '../services/index.js';

/**
 * Handler for get all blog entries request
 * @param {import('express').Request} req Request body
 * @param {import('express').Response} res Response body
 * @param {import('express').NextFunction} next Next function
 */
const get = async (req, res, next) => {
  try {
    const entries = await BlogServices.get();
    res.status(constants.HTTP_STATUS_OK).json(entries);
  } catch (err) {
    err.status = constants.HTTP_STATUS_NO_CONTENT;
    next(err);
  }
};

/**
 * Handler for get blog by id request
 * @param {import('express').Request} req Request body
 * @param {import('express').Response} res Response body
 * @param {import('express').NextFunction} next Next function
 */
const getById = async (req, res, next) => {
  try {
    const entries = await BlogServices.getByID(req);
    res.status(constants.HTTP_STATUS_OK).json(entries);
  } catch (err) {
    err.status = constants.HTTP_STATUS_NO_CONTENT;
    next(err);
  }
};

/**
 * Handler for create a new blog entry request
 * @param {import('express').Request} req Request body
 * @param {import('express').Response} res Response body
 * @param {import('express').NextFunction} next Next function
 */
const post = async (req, res, next) => {
  try {
    const entry = await BlogServices.post(req);
    res.status(constants.HTTP_STATUS_CREATED).json(entry);
  } catch (err) {
    next(err);
  }
};

/**
 * Handler for update a blog entry request
 * @param {import('express').Request} req Request body
 * @param {import('express').Response} res Response body
 * @param {import('express').NextFunction} next Next function
 */
const put = async (req, res, next) => {
  try {
    const entry = await BlogServices.put(req);
    res.status(constants.HTTP_STATUS_OK).json(entry);
  } catch (err) {
    err.status = constants.HTTP_STATUS_NOT_MODIFIED;
    next(err);
  }
};

/**
 * Handler for delete a blog entry request
 * @param {import('express').Request} req Request body
 * @param {import('express').Response} res Response body
 * @param {import('express').NextFunction} next Next function
 */
const drop = async (req, res, next) => {
  try {
    const entry = await BlogServices.drop(req);
    res.status(constants.HTTP_STATUS_NO_CONTENT).json(entry);
  } catch (err) {
    err.status = constants.HTTP_STATUS_NOT_MODIFIED;
    next(err);
  }
};

/**
 * @typedef BlogController
 * @type {object}
 * @property {Promise<void>} get Handler for get all blog entries request
 * @property {Promise<void>} getById Handler for get blog by id request
 * @property {Promise<void>} post Handler for create a new blog entry request
 * @property {Promise<void>} put Handler for update a blog entry request
 * @property {Promise<void>} drop Handler for delete a blog entry request
 */

/** @type {BlogController} */
export const BlogController = {
  get,
  getById,
  post,
  put,
  drop,
};
