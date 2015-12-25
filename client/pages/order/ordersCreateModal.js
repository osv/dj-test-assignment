
Template.ordersCreateModal.onCreated(function() {
  this.lastError = new ReactiveVar();
});

Template.ordersCreateModal.helpers({
  clients: function() {
    return Clients.find();
  },

  lastError: function() {
    return Template.instance().lastError.get();
  },

  formData: function() {
    console.log('formData', Session.get('formData'));

    return Session.get('formData');
  },
});

Template.ordersCreateModal.events({
  'submit #orderCreateModal, click [data-action="save"]': function(e, t) {
    e.preventDefault();
    var order = jqGetFormValues(),
        me = Meteor.userId(),
        lastErrorVar = Template.instance().lastError,
        initFormData = Session.get('formData'), // form data passed if edit mode
        isEdit = ! _.isEmpty(initFormData);

    lastErrorVar.set('Saving...');
    if (isEdit) {
      console.log('order', order);

      Orders.update(initFormData._id, {$set: order}, errorHandler);
    } else {
      order.userId = me;
      Orders.insert(order, errorHandler);
    }


    function errorHandler(err) {
      lastErrorVar.set('');
      if (err) {
        lastErrorVar.set(err);
        console.log('Fail to create', err);
      } else {
        // looks ok, hide modal
        $('#orderCreateModal').modal('hide');
      }
    }
  },
});

function jqGetFormValues() {
  var name = $('#name').val(),
      weight = $('#weight').val(),
      client = $('#client').val(),
      destination = $('#destination').val();

  return {
    name: name,
    weight: weight,
    client_id: client,
    destination: destination,
  };
}
