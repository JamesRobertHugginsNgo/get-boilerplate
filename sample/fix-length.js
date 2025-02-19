import fixLength from '../src/fix-length.js';

console.log(fixLength('text'), 'text');
console.log(fixLength('another text'), 'text');
console.log(fixLength('3rd text'), 'text');

console.log(fixLength('text', { minLength: 20 }), 'text');
console.log(fixLength('another text', { minLength: 20 }), 'text');
console.log(fixLength('3rd text', { minLength: 20 }), 'text');
