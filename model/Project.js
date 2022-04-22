const mongoose = require('mongoose');



const projectSchema = new mongoose.Schema({
    
  category: {
    type: String
},
  description: {
    type: String
},
  owner: {
    type: String
},
  priority: {
    type: String
},
progress: {
  type: String
},
  status: {
    type: String
},
  timestamp: {
    type: String
},
title: {
  type: String
}
  
});

const ProjectModel = mongoose.model("Project", projectSchema);

module.exports = ProjectModel;
 // it allows us to use this model inside of other documents