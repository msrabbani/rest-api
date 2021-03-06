const modelUser = require('../models')
const jwt = require('jsonwebtoken')

var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(7);


const signUpUser = function(req,res){
    modelUser.User.create({
        name:req.body.name,
        address:req.body.address,
        phone_number:req.body.phone_number,
        password:req.body.password,
        username:req.body.username,
        role:req.body.role
    }).then((data_user)=>{
        res.send(`data ${data_user.name} telah berhasil dibuat`)
    }).catch(err=>{
        res.send(err)
    })
}

const signInUser = function(req,res){
    // if (req.body.username != '' && req.body.password != '') {
        modelUser.User.findOne({
            where: {username:req.body.username}
        })
        .then(data_user=>{
            if (data_user != null) {
                var token = jwt.sign({
                    username:data_user.username,
                    role:data_user.role
                },'kalengabret', function(err,token){
                    if (err) {
                        // console.log('error cuy ', err);
                        res.send(err)
                    } else {
                        // console.log('ga error ', token);
                        res.send({
                            msg: `User ${data_user.dataValues.username} sukses login`,
                            token: token
                        })
                    }
                })

            }else {
                res.send('data kosong!')
            }
        })
}

const getAllUsers = function(req,res){
    modelUser.User.findAll().then(data_user=>{
        res.send(data_user)
    })
}

const getUserById = function(req,res){
    modelUser.User.findById(req.params.id)
    .then(data_user=>{
        res.send(data_user)
    })
}

const createUser = function(req,res){
    modelUser.User.create({
        name:req.body.name,
        address:req.body.address,
        phone_number:req.body.phone_number,
        username:req.body.username,
        password:req.body.password,
        role:req.body.role,
        createdAt:new Date(),
        updateAt:new Date()
    }).then(data_user=>{
        res.send(data_user)
    }).catch(err=>{
        res.send(err)
    })
}

const deleteUser = function(req,res){
    modelUser.User.destroy({
        where: {id:req.params.id}
    }).then(()=>{
        res.send('data berhasil dihapus')
    })
}

const updateUser = function(req,res){
    modelUser.User.update({
        name:req.body.name,
        address:req.body.address,
        phone_number:req.body.phone_number,
        username:req.body.username,
        password:req.body.password,
        role:req.body.role,
        createdAt:new Date(),
        updateAt:new Date()
    },{
        where:{id:req.params.id}
    }).then(data_user1=>{
        modelUser.User.findById(req.params.id).then(data_user2=>{
            res.send(`Data ${data_user2.name} berhasil di update`)
        })
    })
}

module.exports = {
    getAllUsers, getUserById, createUser, deleteUser, updateUser, signInUser, signUpUser
}
