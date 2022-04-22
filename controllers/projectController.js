const Project = require("../model/Project");
const mongoose = require('mongoose');

module.exports.getProjectData = (req, res) => {
    try{
        Project.find((err, projects)=>{
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

module.exports.getProjectById = async (req, res) => {
    try{
        let _id = req.params.id;
        const project = await Project.findById(_id);
        // console.log(project); 
        console.log(project);
        res.send(project);   
    } catch(error){
        console.log(error);
    }
}

module.exports.createProject = (req, res) => {
    try{
        const data= {category,
            description,
            owner,
            priority,         
            progress,
            status,
            timestamp,         
            title
        } = req.body.formData;
        console.log(data)
        const projects = new Project({
            data
        });
        projects.save((err)=>{
           if(err){
               console.log(err);
               res.send(err);
           }
           else{
                console.log("The new project is inserted successfully");
                res.send(projects);
           }
       });
    }
    catch(error){
        console.log(error);
    }
}

module.exports.updateProject = (req, res) => {
    try{
        let _id = req.params.id;
        _id = mongoose.Types.ObjectId(_id);
         console.log(_id);
         const data= {category,
            description,
            owner,
            priority,         
            progress,
            status,
            timestamp,         
            title
        } = req.body.formData;

         Project.updateOne(
             {
                 _id: _id
             },
             {
                data

             }, (err)=>{
                if(err){
                    console.log(err);
                    res.send(err);
                }
                else {
                    console.log("The project was updated successfully!");
                    res.send("The project was updated successfully!");
                }
             });
       }
       catch(error){
           console.log(error);
       }
}

module.exports.deleteProject = (req, res) => {
    try{
        let _id = req.params.id;
        _id = mongoose.Types.ObjectId(_id);
         console.log(_id);
         Project.deleteOne(
             { _id: _id},
              (err)=>{
                if(err){
                    console.log(err);
                    res.send(err);
                }
                else {
                    console.log("The project was deleted successfully!");
                    res.send("The project was deleted successfully!");
                }
             });
       }
       catch(error){
           console.log(error);
       }
}