var jwt = require('jsonwebtoken');

const adminAuth = function(req,res,next){
    let auth = jwt.verify(req.headers.token, 'kalengabret')
    console.log('+++++++',auth);
    if (auth.role == 'admin') {
        next()
    }else {
        res.send('username dan password tidak sesuai')
    }
}

module.exports = adminAuth
