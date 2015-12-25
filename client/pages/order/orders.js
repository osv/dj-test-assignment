
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
    Session.set('formData', {}); // not formData - create
    $('#orderCreateModal').modal('show');
  },

  'click [data-action="edit"]': function(e, t) {
    e.preventDefault();
    var order = this,
        editableOrder = _.pick(order, '_id', 'name', 'client_id', 'destination', 'weight');

    Session.set('formData', editableOrder); // fill formData - update modal
    $('#orderCreateModal').modal('show');
  },

  'click [data-action="rm"]': function(e, t) {
    var id = this._id,
        orderName = this.name;

    if(confirm('Do you really want to remove order "' + orderName + '"')) {
      Orders.remove(id);
    }
  },
});

Template.sortHeader.events({
  'click [data-action="sort"]': function(e, t) {
    e.preventDefault();
    var sortBy = this.sortBy;

    Router.go('orders', {}, {query: {sort: sortBy}});
  },
})
