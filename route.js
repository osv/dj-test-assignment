Router.configure({
  layoutTemplate: 'appLayout',
  notFoundTemplate: '404',
});

Router.route('/', {
  name: 'wellcome',
});

Router.route('/catalog', {
  name: 'catalog',
});
