Router.configure({
  layoutTemplate: 'appLayout',
  notFoundTemplate: '404',

  waitOn: function() {
    return Meteor.subscribe('all-clients');
  }
});

Router.route('/', {
  name: 'wellcome',
});

Router.route('/clients', {
  name: 'clients',
  data: function() {
    return Clients.find();
  }
});

Router.route('/orders', {
  name: 'orders',
  waitOn: function() {
    return Meteor.subscribe('mine-orders');
  },
  data: function() {
    var sortField = this.params.query.sort,
        options = {sort: {}};

    if (sortField) {
      options.sort[sortField] = 1;
    }

    return Orders.find({}, options);
  }
});
