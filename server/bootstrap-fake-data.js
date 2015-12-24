/*
 * Bootstrap fake client data if empty
 */

if (! Clients.findOne()) {
  console.log('No clients found, populating with some fake data');
  var clients = [
    'A. Schulman',
    'Albertsons LLC',
    'Babcock & Wilcox',
    'CiCi\'s Pizza',
    'Erie Insurance Group',
    'MasterCraft',
  ];

  _.each(clients, function(name) {
    Clients.insert({
      name: name
    });
  });
}
