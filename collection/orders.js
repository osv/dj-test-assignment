
Orders = new Mongo.Collection('orders');

var schema = new SimpleSchema({
  name: {
    type: String,
  },
  weight: {
    type: Number,
    min: 0.1,
    decimal:true,
  },
  destination: {
    type: String,
  },
  client_id: {
    label: 'Client',
    type: String,
  },
  userId: {                     // Owner of order
    type: String,
  },
  createdAt: {
    type: Date,
    denyUpdate: true,
    autoValue: function() {
      return new Date();
    }
  },

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
