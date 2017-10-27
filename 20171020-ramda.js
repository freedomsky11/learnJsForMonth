var R = require('ramda');

var fn = R.cond([
  [R.gt(60),  () => console.log('bad')],
  [R.lte(90),  () => console.log('good')],
  [R.T,  () => console.log('common')]
]);

fn(59);
fn(90);
fn(80);
