
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
    type: String,
  },
  userId: {                     // Owner of order
    type: String,
  }
});

Orders.attachSchema(schema);

Orders.allow({
  insert: function (userId, doc) {
    // The user must be logged in, and the document must be owned by the user
    return (userId && doc.userId === userId);
  },

  update: function (userId, doc, fields, modifier) {
    // can only change your own documents
    return doc.userId === userId;
  },

  remove: function (userId, doc) {
    // can only remove your own documents
    return doc.userId === userId;
  },

  fetch: ['userId'],
});
