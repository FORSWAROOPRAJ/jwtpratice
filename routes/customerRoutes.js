const {getCustomerData, getCustomerById, createCustomer, updateCustomer, deleteCustomer} = require("../controllers/customerController");
const router = require("express").Router();

router.get('/customer', getCustomerData);
router.get('/customer/:id', getCustomerById);
router.post('/customer', createCustomer);
router.put('/customer/:id', updateCustomer);
router.delete('/customer/:id', deleteCustomer);

module.exports = router;