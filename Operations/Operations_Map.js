let myMap = new Map([['hello','hi'],[1,2]]);
myMap.set([1,2,3],'Array');
myMap.set('object',{name:'Obe'});
console.log(myMap);

//weakMap
let weakmap = new WeakMap();
let objKey = {name:'object'}
weakmap.set(objKey,1);
console.log(weakmap.has(objKey));
