const tes = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems= tes.flattenDeep(items);
console.log(newItems);