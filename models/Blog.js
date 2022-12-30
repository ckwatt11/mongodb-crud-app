const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: String, 
    body: String, 
    image: String, 
    created:{
      type: Date, 
      default : Date.now,
    }, 
  })
  
module.exports = mongoose.model("Blog", blogSchema)