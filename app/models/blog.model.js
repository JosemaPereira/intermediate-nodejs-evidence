import { Schema, model } from 'mongoose';

/**
 * Blog entry schema
 * @typedef BlogSchema
 * @type {Schema}
 */
const BlogSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});

/**
 * @typedef BlogModel
 * @type {object}
 * @property {import('mongoose').Model<BlogSchema>} Model Model of the Blog document
 */

/** @type {BlogModel} */
export const Blog = {
  Model: model('Blog', BlogSchema),
};
