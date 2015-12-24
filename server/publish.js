
// allow to see all clients
Meteor.publish('all-clients', function() {

  // allow only signin users to see clients
  var cursor = this.userId ? Clients.find() : [];
  return cursor;
});
