
Template.ordersCreateModal.onCreated(function() {
  this.lastError = new ReactiveVar();
});

Template.ordersCreateModal.helpers({
  clients: function() {
    return Clients.find();
  },

  lastError: function() {
    return Template.instance().lastError.get();
  }
});

Template.ordersCreateModal.events({
  'submit #orderCreateModal, click [data-action="save"]': function(e, t) {
    e.preventDefault();
    var name = $('#name').val(),
        weight = $('#weight').val(),
        client = $('#client').val(),
        destination = $('#destination').val(),
        me = Meteor.userId(),
        lastErrorVar = Template.instance().lastError;

    lastErrorVar.set('Saving...');
    Orders.insert({
      userId: me,
      name: name,
      weight: weight,
      client_id: client,
      destination: destination,
    }, function(err) {
      lastErrorVar.set('');
      if (err) {
        lastErrorVar.set(err);
        console.log('Fail to create', err);
      } else {
        // looks ok, hide modal
        $('#orderCreateModal').modal('hide');
      }
    });
  },
});
