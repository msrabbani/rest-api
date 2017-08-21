const modelUser = require('../models')

const getAllUsers = function(req,res){
    modelUser.User.findAll().then(data_user=>{
        res.send(data_user)
    })
}

const getUserById = function(req,res){
    modelUser.User.findById(req.params.id).then(data_user=>{
        res.send(data_user)
    })
}

const createUser = function(req,res){
    modelUser.User.create({
        name:req.body.name,
        address:req.body.address,
        phone_number:req.body.phone_number,
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
        where: {id:`${req.params.id}`}
    }).then((data_user)=>{
        res.send(data_user)
    })
}

const updateUser = function(req,res){
    modelUser.User.update({
        name:req.body.name,
        address:req.body.address,
        phone_number:req.body.phone_number,
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
    getAllUsers, getUserById, createUser, deleteUser, updateUser
}
