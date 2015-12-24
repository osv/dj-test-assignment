
Clients = new Mongo.Collection('clients');

var schema = new SimpleSchema({
  name: {
    type: String,
    min: 4,
    label: 'Client name'
  }
});

Clients.attachSchema(schema);
