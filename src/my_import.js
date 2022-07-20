import { soma, cube, foo, graph } from './my_module.js';

graph.options = {
    color:'blue',
    thickness:'3px'
};

graph.draw();
console.log(cube(3)); // 27
console.log(foo);    // 4.555806215962888
console.log(`A soma de A e B é: ${soma(5,5)}`)