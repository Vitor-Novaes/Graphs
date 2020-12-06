import { Graphs } from './src/Graph';

const Tree = { 
  a: ['b', 'c'],
  b: ['a'],
  c: ['a', 'd', 'e'],
  d: ['c'],
  e: ['c'],
}

const NotTree = {
  a: ['b', 'c'],
  b: ['a', 'c'],
  c: ['a', 'b'],
}


const graph = new Graphs();

console.log(Tree);
if (graph.isTreeGraph(Tree)) {
  console.log('This Graph is Tree !');
} else {
  console.log('This Graph isnt Tree !');
}


console.log('\n\n\n');
console.log(NotTree);
if (graph.isTreeGraph(NotTree)) {
  console.log('This Graph is Tree !');
} else {
  console.log('This Graph isnt Tree !');
}

