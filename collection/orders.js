
Orders = new Mongo.Collection('orders');

var schema = new SimpleSchema({
  name: {
    type: String,
  },
  weight: {
    type: String
  },
  destination: {
    type: String
  },
  client_id: {
    type: Meteor.Collection.ObjectID
  }
});

Orders.attachSchema(schema);
