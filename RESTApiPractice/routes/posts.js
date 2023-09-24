const express = require('express');
const router = express.Router();
const post = require('../models/postsModel');

router.get('/', async(req,res)=>{
    // res.send("You are on Posts route");

    // returns all posts in collection.
    try{
        const fetchedPosts = await post.find();
        res.json(fetchedPosts);
    }
    catch(err){
        res.json(err);
    }  
})

router.get('/:postID',async(req,res)=>{
    // res.send("You are on specific Post route");
    console.log(req.params.postID);
    try{
        const fetchedSpecificPost = await post.findById(req.params.postID);
        res.json(fetchedSpecificPost);
    }
    catch(err){
        res.json(err);
    }
    
});

router.post('/', async (req,res)=>{
    console.log(req.body);
    // const newPost = new post(req.body); //not a good way to pass.
    
    const newPost = new post({
        title: req.body.title,
        description: req.body.description
    });
    
    // newPost.save()
    // .then(data=>{
    //     res.json(data);
    // })
    // .catch(err=>{
    //     res.json(err);
    // })

    try{
        const savedPost = await newPost.save();
        res.json(savedPost);
    }
    catch(err){
        res.json(err);
    }

});

router.delete('/:postID' , async (req,res)=>{
    const postID = req.params.postID;
    try{
        const removedPost = await post.findByIdAndDelete(postID);
        res.json(removedPost);
    }
    catch(err){
        res.json(err);
    }

});

router.patch('/:postID', async (req,res)=>{
    const postID = req.params.postID;
    try{
        // const updatePost = await post.updateOne({_id:postID} ,{$set: {title:req.body.title}});
        const updatePost = await post.updateOne({_id:postID}, {title:req.body.title}); //even works without the $set !
        res.json(updatePost);
    }
    catch(err){
        res.json(err);
    }
})

module.exports = router;