
// allow to see all clients
Meteor.publish('all-clients', function() {

  // allow only signin users to see clients
  var cursor = this.userId ? Clients.find() : [];
  return cursor;
});

// Users's orders
Meteor.publish('mine-orders', function() {

  var userId = this.userId,
      cursor = Orders.find({userId: userId});

  return cursor;
});
