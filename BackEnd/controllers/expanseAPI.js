const express=require('express');
const Expanse=require('../models/expanses');


exports.getExpanses= async (req,res,next)=>{
    const expanses= await Expanse.find();

    res.status(201).json({
        newExpanseDetails:expanses
    });
};


exports.getExpansesByID= async (req,res,next)=>{
    const expId=req.params.id;

    const expanse= await Expanse.findById(expId);

    res.status(201).json({
        newExpanseDetails:expanse
    });
};


exports.postExpanses= async (req,res,next)=>{
    const amount=req.body.amount;
    const description=req.body.description;
    const categories=req.body.categories;
    const product= new Expanse({
        amount:amount,
        description:description,
        categories:categories
    });

    product
        .save()
        .then(result =>{
            console.log(result);
        })
        .catch(err=>{
            console.log(err);
        })
    // const data= await Expanse.create({
    //     amount:amount,
    //     description:description,
    //     categories:categories
    // });

    res.status(201).json({
        newExpanseDetails:product
    });
};


exports.deleteExpanses= async (req,res,next)=>{
    try{
        const expId= req.params.id;
        Expanse.findByIdAndDelete(expId)
            .then(()=>{
                console.log("expanse deleted");
                res.status(200);
            })
            .catch(err=> console.log(err));
    }catch(err){
        console.log(err);
    }
};


exports.editExpanse = (req, res, next) => {
    const expId= req.params.id;
    const updatedAmount=req.body.amount;
    const updatedDescription=req.body.description;
    const updatedCategories=req.body.categories;

    console.log("..."+expId);
    console.log("..."+updatedAmount);
    console.log("..."+updatedDescription);
    console.log("..."+updatedCategories);

    Expanse.findById(expId)
        .then(expanse => {
            expanse.amount=updatedAmount;
            expanse.description=updatedDescription;
            expanse.categories=updatedCategories;

            return expanse.save();
        })
        .then(result=>{
            console.log('UPDATE PRODUCT');
            console.log(result);
            res.status(201).json({
                newExpanseDetails:result
            });
        })
        .catch(err=>console.log(err));
  };

  