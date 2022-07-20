// módulo "my-module.js"
function cube(x) {
  return x * x * x;
}

const soma = (a, b) => {
  return a + b;
};

const foo = Math.PI + Math.SQRT2;

var graph = {
  draw: function() {
      console.log('Da função draw de graph');
  }
}

export { soma, cube, foo, graph };