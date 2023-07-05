/* eslint-disable new-cap */
/* eslint-disable no-useless-catch */
import { Blog } from '../models/index.js';

/**
 * Services to get all blog entries
 * @returns {Blog.model} all blog entries
 */
const get = async () => {
  try {
    const posts = await Blog.Model.find();
    if (!posts.length) {
      throw new Error('no blog entry found');
    }
    return posts;
  } catch (err) {
    throw err;
  }
};

/**
 * Services to get all blog entries
 * @param {import('express').Request} req Request body
 * @returns {Blog.model} all blog entries
 */
const getByID = async (req) => {
  try {
    const post = await Blog.Model.findById(req.params.id);
    if (!post) {
      throw new Error(`no blog entry found with ID:${req.params.id}`);
    }
    return post;
  } catch (err) {
    throw err;
  }
};

/**
 * Services to get all blog entries
 * @param {import('express').Request} req Request body
 * @returns {Blog.model} all blog entries
 */
const post = async (req) => {
  try {
    const newModel = new Blog.Model(req.body);
    const saveEntry = newModel.save();
    return saveEntry;
  } catch (err) {
    throw err;
  }
};

/**
 * Services to update a blog entry
 * @param {import('express').Request} req Request body
 * @returns {Blog.model} all blog entries
 */
const put = async (req) => {
  try {
    const filter = { _id: req.params.id };
    const result = await Blog.Model.findOneAndUpdate(filter, req.body, {
      new: true,
    });
    if (!result) {
      throw new Error(`no blog entry found with ID:${req.params.id}`);
    }
    return result;
  } catch (err) {
    throw err;
  }
};

/**
 * Services to delete a blog entry
 * @param {import('express').Request} req Request body
 * @returns {Blog.model} all blog entries
 */
const drop = async (req) => {
  try {
    const filter = { _id: req.params.id };
    const result = await Blog.Model.deleteOne(filter, req.body, {
      new: true,
    });
    if (!result) {
      throw new Error(`no blog entry found with ID:${req.params.id}`);
    }
    return result;
  } catch (err) {
    throw err;
  }
};

export const BlogServices = {
  get,
  post,
  getByID,
  put,
  drop,
};
