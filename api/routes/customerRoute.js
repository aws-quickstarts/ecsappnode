module.exports = app => {

    const controller = app.controllers.customerController;

    app.route('/customer-list/v1/customers')
        .get(controller.getCustomers);

}