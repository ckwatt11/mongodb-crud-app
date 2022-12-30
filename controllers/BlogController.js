const blServ = require("../services/blogService");


/* define CRUD operation functions */

exports.createBl = async (request, result) => {
    try {
        const blog = await blServ.createBl(request.body);
        res.json({ data: blog, status: "success" });
    }
    catch (err){
        result.status(500).json({err: err.message});  // internal server error(s)
    
    }
};


exports.fetchAll = async (request, result) => {
    try {
        const allBlogs = await blServ.fetchAll();
        result.json({data: allBlogs, status: "success"});
    }
    catch (err){
        result.status(500).json({error: err.message});
    }
};

exports.fetchById = async (request, result) => {
    try{
        const fetched = await blServ.fetchbyId(req.params.id);
        result.json({data: fetched, status: "success"});
    }
    catch(err){
        result.status(500).json({error: err.message});
    }
};

exports.upBl = async (request, result) => {  // updates a blog post
    try{
        const updated = await blServ.upBl(request.params.id, request.body);
        result.json({data: updated, status:"success"});
    }
    catch (err){
        result.status(500).json({error: err.message});
    }
};

exports.delBl = async (request, result) => {
    try{
        const deleted = await blServ.delBl(request.params.id); 
        result.json({data: updated, status: "success"});
    }
    catch (err){
        result.status(500).json({error: err.message});
    }
};