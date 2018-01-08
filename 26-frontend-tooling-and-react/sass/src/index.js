import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  // lodash now imported and bundled via webpack
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
