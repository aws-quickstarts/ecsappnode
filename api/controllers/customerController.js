
module.exports = app => {

    const customerData = app.data.customerData;

    const controller = {};

    controller.getCustomers = (req, res) => res.status(200).json(customerData.customers);

    return controller;

}