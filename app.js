const express = require("express"); // include all necessary modules 
const app = express();
const mongoose = require("mongoose");
const Schema = mongoose.Schema; 
const chai = require("chai")
const blRouter = require("./routes/BlogRoutes.js")
chai.should(); // use the chai assertion library for BDD and TDD
var PORT = 6000;

 
// mount middleware
app.use(express.json());
app.use("/api/blogs", blRouter) ;
app.use(express.urlencoded({extended: true}));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
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