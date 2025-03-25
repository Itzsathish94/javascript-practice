//Array methods.......................................................................................................................
// let arr=[1,2,3,4,5]

//length
// console.log(arr.length)

//tostring
// console.log(arr.toString())

//access
// console.log(arr.at(-2))
// console.log(arr[2])
// console.log(arr[-2])//***wontwork!!!!***/since [] is also used access objects

//join
// console.log(arr.join(''))//can use separators '#'

//add&remove 
// arr.pop() // pops last element
// arr.push(6)// add element at the end
// console.log(arr)

//shift
// arr.shift(1) //removes first element 
// arr.unshift(7)//adds new element at the begininng
// console.log(arr)

//changing elements
// arr[0]=9 // changes the element
// console.log(arr)
// arr[arr.length]=9 // add element at the end
// console.log(arr)

//deletion
// delete arr[0] //deletion leaves 'undefined' holes **use pop or shift**
// console.log(arr)

//concatenate
// let arr2=[6,7,8,9]
// let output = arr.concat(arr2) //**returns new array only!!!**/ can take many arguments(a1,a2,a3)
// console.log(output)
// output=output.concat('10')
// console.log(output)//can merge with values also


//FLATTENING ARRAY
// let arr2=[[1,2],[3,4],[5,6],[7,8]] // flattens array
// let output=arr2.flat()
// console.log(output)

///****SPLICE ADDS NEW ITEMS TO ARRAY****///

// arr.splice(2,0,11,12) //adds new elements to 2nd index and deletes 0 element
// console.log(arr)
// arr.splice(2,2,12,13)
// console.log(arr)//removes 2 element from 2nd index and adds two elements
// arr.splice(0,1)
// console.log(arr) //removes element from array without leaving undefined holes
// let output=arr.toSpliced(0,1)
// console.log(output)//**returns new array**/

//SLICE//
//creates new array & doesnt change anything in original array//
// let output=arr.slice(0,1)
// console.log(output)

//SEARCH//
// console.log(arr.indexOf(2)) //finds index
// console.log(arr.includes(4)) //find if it is present in array
// console.log(arr.find(x=>x>3)) //find first value that passes the function
// findIndex()
// findLast()
// findLastIndex()

//SORTING//
// console.log(arr.sort()) //alters original array
// console.log(arr.reverse())
// toSorted() & toReversed()// creates new array

///###sort with function to sort numbers###///
// let num=[1,22,100,5,23,7,34,11]
// let output=num.sort((a,b)=>a-b)
// console.log(output)

//MAX AND MIN
// console.log(Math.max.apply(null,arr))
// console.log(Math.min.apply(null,arr))

//sort object//
// const cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
// ];

// let output=cars.sort((a,b)=>a.year-b.year)
// console.log(output)

//ITERATION//
// arr.forEach((a)=>{
//     if(a<3)
//     console.log('HI')
// })

//map,filter,reduce//
//reduceRight()//

//every,some,from//
// const newarr=[2,4,6,8]
// if(newarr.every(num=>num%2===0)){
//     console.log('Given numbers are even')
// }
// const newarr2=[1,2,3,4,5]
// if(newarr.some(num=>num%2===0)){
//     console.log('Some of the numbers are even')
// }
// const squared=Array.from(newarr,num=>num*2)
// console.log(squared)

//keys,entries,with//
//spread//

//flatmap

//use 1 - extend array
// const arr = [1,2,3];
// const extended = arr.flatMap(num=>[num,num*2]);
// console.log(extended);

//use 2 - split words
// const words = ['Hello world','Flat map'];
// const splitted = words.flatMap(word=>word.split(' '));
// console.log(splitted);

//use 3 - Filter and flat in one step
// const arr = [1,2,3,4,5,6];
// const filtered = arr.flatMap(num=>(num%2===0 ? [num*2] : []));
// console.log(filtered);

