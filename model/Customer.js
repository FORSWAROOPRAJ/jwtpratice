const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({  
    
   
  customername: {
    type: String,
    required: [true, "project name is required!!"]
},
            email: {
              type: String,
              required: [true, "project name is required!!"]
          },
            mobile: {
              type: String,
              required: [true, "project name is required!!"]
          },
            project: {
        type: String,
        required: [true, "project name is required!!"]
    }
});

const CustomerModel = mongoose.model("Customer", customerSchema);

module.exports= CustomerModel;
 // it allows us to use this model inside of other documents