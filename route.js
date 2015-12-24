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

});
