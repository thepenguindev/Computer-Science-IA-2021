import Vec2 from './Objects/Vec2.mjs';

let vec_one = new Vec2(0, 0);
let vec_two = new Vec2(1, 1);

console.log(vec_one);
console.log(vec_one.x, vec_one.y);
console.log(vec_two);
console.log(vec_two.x, vec_two.y);
console.log(vec_one.equals(vec_two));