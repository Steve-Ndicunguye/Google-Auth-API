const models = require("../database/models");
const express = require("express");
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = "769407000889-7l0iqc5c028eblvsef0kdvoo3t3d7i2e.apps.googleusercontent.com"
const client = new OAuth2Client(CLIENT_ID);
const app = express()
const {Profile, User} = models;



class profileController{

 static getAllUsers = async (req,res)=>{
        User.findAll({ include: 
            [{
                model: Profile, 
                as: 'profile'
            }]
        })
        .then(data=>{res.send(data)})
    
    }

 static addProfile = async (req,res)=>{
    
    let currentUser = req.body.userId
    
        const userProfile = {
            age:req.body.age,
            gender:req.body.gender,
            address:req.body.address,
            education:req.body.education,
            userId: currentUser
           
        }
        try{
        const userpfl = await Profile.create(userProfile)
        res.send(userpfl)
    }catch(err){
        res.send(err);
    }
    
    }
  
 static getAllProfile = async (req,res)=>{
       await Profile.findAll({ include: 
        [{
            model: User, 
            as: 'user'
        }]
    })
        .then(data=>{res.send(data)})
    
    }
    
static getSingleProfile = async (req,res)=>{
       const userId = req.params.id
       await Profile.findOne({ where: { userId }})

        .then(user=>{res.send(user)})}
}
    
    
module.exports = profileController;
    
    