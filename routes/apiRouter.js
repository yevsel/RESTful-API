const express = require('express')
const NewsDB = require("../model/dbSchema")

const router = express.Router()

// Create Member
router.post('/',(req,res)=>{
    async function create(req,res){
        const result = await NewsDB.create({
            title:req.body.title,
            section1:req.body.section1,
            likes:req.body.likes,
            tags:req.body.tags || ['Gorden Ramsey','Jesus Christ']

        })
        res.json(result)
    }
    create(req,res)
})

// Get all members
router.get('/',(req,res)=>{
    async function get(req,res){
        const result = await NewsDB.find()
        res.json(result)
    }
    get(req,res)
})

// Get One member by ID
router.get('/:id',(req,res)=>{
    async function getOne(req,res){
        const result = await NewsDB.find({_id:req.params.id})
        res.json(result)
    }
    getOne(req,res)
})

// DELETE
router.delete('/:id',(req,res)=>{
    async function deleteOne(req,res){
        const result = await NewsDB.deleteOne({_id:req.params.id})
        res.json(result)
    }
    deleteOne(req,res)
})

module.exports=router
