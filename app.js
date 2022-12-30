const express = require("express"); // include all necessary modules 
const app = express();
const mongoose = require("mongoose");
const Schema = mongoose.Schema; 
chai.should(); // use the chai assertion library for BDD and TDD


 
//middleware
app.use(express.json());
 
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});



mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/CRUD",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);
 
module.exports = app;