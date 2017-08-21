var jwt = require('jsonwebtoken');

const adminAuth = function(req,res,next){
    if (req.headers.hasOwnProperty('token')) {
        let auth = jwt.verify(req.headers.token, 'kalengabret')
        // console.log('+++++++',auth);
        if (auth.role == 'admin') {
            next()
        }else {
            res.send('Anda bukan Admin')
        }
    }else {
        res.send("kamu belum login")
    }
}

const nonAdminAuth = function(req,res,next){
    if (req.headers.hasOwnProperty('token')) {
        next()
    }else {
        res.send('Anda belum Login')
    }
}

module.exports = {
    adminAuth,
    nonAdminAuth
}
