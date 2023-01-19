const exp = require('express');
const router = exp.Router();
const {
    fetchAll, 
    createBl, 
    fetchById, 
    upBl, 
    delBl
} = require("../controllers/BlogController")

/* set up routing for request handling and forwarding to controllers */

router.route("/").get(fetchAll).post(createBl);  // GET and POST requests without id specified
router.route("/:id").get(fetchById).put(upBl).delete(delBl); // with
module.exports = router;