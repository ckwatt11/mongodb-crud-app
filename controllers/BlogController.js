const blServ = require("../services/blogService");


exports.createBl = async (request, result) => {
    try {
        const blog = await blogService.createBl(request.body);
    }
}



exports.fetchAll = async (request, result) => {
    try {
        const blog = await BlogService.updateBl()
    }
}