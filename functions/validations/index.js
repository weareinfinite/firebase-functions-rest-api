
module.exports.apiRequest = (req, res, next) => {
    if( req.headers['content-type'] && req.headers['content-type'] !== 'application/json') {
        res.json({message: 'Invalid request type'}); return;
    }
    next();
}


module.exports.validateCreatePost = (req, res, next) => {
    console.log(req.headers);
    if(!req.body.title || !req.body.body) {
        res.json({message: 'Invalid request body'}); return;
    }

    next();
}