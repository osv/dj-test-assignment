
// useful for select
Template.registerHelper('isSelected', function (a, b) {
  return (a === b) ? { selected: 'selected' } : null;
});
