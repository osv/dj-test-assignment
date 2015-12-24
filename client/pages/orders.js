
Template.orders.helpers({
  clientNameById: function(id) {
    var client = Clients.findOne(id) || {name: '-'};
    return client.name;
  }
});
