const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    purchasedPdfs: { type: [String], default: [] }
});

const EmployeeModel = mongoose.model('employees', EmployeeSchema);

module.exports = EmployeeModel;