const BlogModel = require("../models/Blog");

/* Create basic CRUD functionality using asynchronous functions */

exports.fetchAll = async () => {
  return await BlogModel.find();
};

exports.createBl = async (blog) => {
  return await BlogModel.create(blog);
};
exports.fetchBlFromId = async (id) => {
  return await BlogModel.findById(id);
};

exports.updateBl = async (id, blog) => {
  return await BlogModel.findByIdAndUpdate(id, blog);
};

exports.delBl = async (id) => {
  return await BlogModel.findByIdAndDelete(id);
};