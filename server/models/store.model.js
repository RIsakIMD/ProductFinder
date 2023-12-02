
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const StoreSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Name cannot be empty'], minlength: [3, "Name must be at least 3 characters long"]},
    number: {
        type: Number,
        required: [true, 'Number cannot be empty'],
        min: [1, "Number must be greater than 0"],
        unique: true
    },
    open: {type: Boolean, required: [true, 'Open cannot be empty']}
}, {timestamps: true});

const Store = mongoose.model('Store', StoreSchema);
StoreSchema.plugin(uniqueValidator);
module.exports = Store;
