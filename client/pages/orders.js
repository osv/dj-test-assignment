
Template.orders.helpers({
  clientNameById: function(id) {
    var fallbackClientName = '- ' + id,
        client = Clients.findOne(id) || {name: fallbackClientName };
    return client.name;
  }
});

Template.orders.events({
  'click [data-action="createOrder"]': function(e, t) {
    e.preventDefault();
    $('#orderCreateModal').modal('show');
  },
});
