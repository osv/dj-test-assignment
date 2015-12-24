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
    return Orders.find();
  }
});
