const mySet = new Set([1,2,3]);
// console.log(mySet);
// console.log(mySet.size);
// mySet.add(5);
// console.log(mySet.has(5));
// console.log(mySet.delete(1));
// console.log(mySet);
for(let items of mySet){
    console.log(items);
}
// mySet.forEach(x=>console.log('Set has',x));
// mySet.clear();
// console.log(mySet);

//weakset

// const weakset = new WeakSet();

// let obj = {name:'sathish'}
// weakset.add(obj);
// obj = null;
// console.log(weakset.has(obj));
