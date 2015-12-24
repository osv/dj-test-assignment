
Template.orders.helpers({
  clientNameById: function(id) {
    var fallbackClientName = '- ' + id,
        client = Clients.findOne(id) || {name: fallbackClientName };
    return client.name;
  },

  timeFromNow: function() {
    var time = this.createdAt;
    return moment(time).fromNow();
  },
});

Template.orders.events({
  'click [data-action="createOrder"]': function(e, t) {
    e.preventDefault();
    $('#orderCreateModal').modal('show');
  },
});
