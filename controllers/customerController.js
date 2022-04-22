const Customer = require("../model/Customer");
const mongoose = require('mongoose');

module.exports.getCustomerData = (req, res) => {
    try{
        Customer.find((err, projects)=>{
        if(err) 
        {   console.log(err)
            alert(err);
        }
        else 
        {
            console.log(projects);
            res.send(projects);
        }
        
    })
    }
    catch(error){
        console.log(error);
    }
}

module.exports.getCustomerById = async (req, res) => {
    try{
        let _id = req.params.id;
        const project = await Customer.findById(_id);
        // console.log(project); 
        console.log(project);
        res.send(project);   
    } catch(error){
        console.log(error);
    }
}

module.exports.createCustomer = (req, res) => {
    try{
        const {customername,
            email,
            mobile,
            project} = req.body;
        const customer = new Customer({
            customername,
                email,
                mobile,
                project 
        });
        customer.save((err)=>{
           if(err){
               console.log(err);
               res.send(err);
           }
           else{
                console.log("The new Customer is inserted successfully");
                res.send(projects);
           }
       });
    }
    catch(error){
        console.log(error);
    }
}

module.exports.updateCustomer = (req, res) => {
    try{
        let _id = req.params.id;
        _id = mongoose.Types.ObjectId(_id);
         console.log(_id);
         const {customername,
            email,
            mobile,
            project } = req.body;

         Customer.updateOne(
             {
                 _id: _id
             },
             {
                customername,
                email,
                mobile,
                project 

             }, (err)=>{
                if(err){
                    console.log(err);
                    res.send(err);
                }
                else {
                    console.log("The Customer was updated successfully!");
                    res.send("The Customer was updated successfully!");
                }
             });
       }
       catch(error){
           console.log(error);
       }
}

module.exports.deleteCustomer = (req, res) => {
    try{
        let _id = req.params.id;
        _id = mongoose.Types.ObjectId(_id);
         console.log(_id);
         Customer.deleteOne(
             { _id: _id},
              (err)=>{
                if(err){
                    console.log(err);
                    res.send(err);
                }
                else {
                    console.log("The Customer was deleted successfully!");
                    res.send("The Customer was deleted successfully!");
                }
             });
       }
       catch(error){
           console.log(error);
       }
}