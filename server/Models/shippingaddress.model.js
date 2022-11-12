const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    country: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    streetAddress: { type: String, required: true },
    address2: { type: String, required: true },
    city: { type: String, required: true },
    registerUser: { type: String, required: true },
    pinCode: { type: String, required: true },
    mobile: { type: String, required: true },
})

const AddressModel = mongoose.model("address", addressSchema)