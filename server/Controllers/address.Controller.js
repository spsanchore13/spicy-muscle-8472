const AddressModel = require('../Models/shippingaddress.model')

const postAddress = async () => {
    const address = req.body


    try {
        await AddressModel.create(address)

    }
    catch (err) {
        res.send(err)
    }

}