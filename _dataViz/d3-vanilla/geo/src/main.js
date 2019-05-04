
import d3Tip from './js/d3-tip';
import jenks from './js/jenks';
import mainD3 from './js/mainD3';
import _ from 'lodash';
function component() {
  var element = document.createElement('div');
console.log('lodash ... ')
  // Lodash 
  element.innerHTML = _.join(['Hello', 'from ' , ' TMM !'], ' ');

  return element;
}


document.body.appendChild(component());

mainD3();
