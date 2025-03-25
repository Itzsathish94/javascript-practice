//String methods.........................................................................................................

let text='My name is Sathish'

//[1]Length//
console.log(text.length)

//[2]Extracting Characters//
console.log(text.charAt(3))  //CharAT
console.log(text.charCodeAt(3))  //CharCodeAt - represent UTF-16 
console.log(text.at(3)) //at - at can access negative index easily
console.log(text[0]) //Property access

//[3]Extracting string parts//
//SLICE//
let part=text.slice(0,3) //-two param (Start,End)
console.log(part) // - extracts and returns ****NEW STRING**** with sliced part
console.log(text.slice(3)) //- slices out rest of the string
console.log(text.slice(-5))// - starts from negative index
console.log(text.slice(-5,-2))//-start to end from negative index
//SUBSTRING//
console.log(text.substring(-5))//-negative indexes are treated as zero
console.log(text.substring(7,2))//-if start is greater than end, they are swapped
//SUBSTR
console.log(text.substr(7,2))//-similiar to slice but second param is length

//[4]Cases
//UPPERCASE//
console.log(text.toUpperCase())//-converts string to uppercase
//LOWERCASE//
console.log(text.toLowerCase())//-converts string to lowercase

//[5]concat
let text2=' and I am 29 years old'
let output=text.concat(text2)
console.log(output) //- conact two strings
console.log(text+' '+text2) //-returns new string only, since strings are immutable

//[6]trim
console.log(text2.trim())//-removes whites spaces from both ends
console.log(text2.trimStart())//-removes whitespaces from the start
console.log(text2.trimEnd())//-removes whitespaces from the end

//[7]Pad
let newText='Sathish'
console.log(newText.padStart(8,'0'))//-pads from start with character by given length
console.log(newText.padEnd(8,'0'))//-pads from end with character by given length
let numText=6
let text3=numText.toString()
console.log(text3.padStart(5,"0"))//-convert to string to pad numbers

//[8]repeat
console.log(newText.repeat(3))//-repeats the string

//[9]replace
console.log(newText.replace('s','&'))//-replaces first occurence of the character and case sensitive
console.log(newText.replace(/s/gi,'&'))//-regex for global and case insensitive swap
console.log(newText.replaceAll('s','&'))//-replaces all but its case sensitive **cant call with regex**

//[10]convert to array
console.log(newText.split(''))//-converts to array ***takes param as a separator***


//[11]search
console.log(text.indexOf('My'))//-returns the index of first occurence, -1 if not found
console.log(text.lastIndexOf('i'))//-returns the index of last occurence **cant take regEX as param**
//both methods accept second param as start position for search//
console.log(text.search(/Sathish/))//-returns the index (accepts regEx too) **cant take second param**

//[12]Match
console.log(text.match(/is/))//-searches for first occurence only, return array of matches, null if not found
console.log(text.match(/is/gi))//-searches for all occurence
console.log(text.match('s'))//-same as /is/

//[13]MatchAll
const output2=text.matchAll('is')
console.log(output2)//not CLEAR

//[14]Includes
console.log(text.includes('My',0))//-returns boolean value of search, takes second param as start positioin**case sensitive**

//[15]Startswith
console.log(text.startsWith('My'))//-returns boolean value of search
//endswith//
console.log(text.endsWith('h',5))//-returns boolean value of search, second param to check first 5 characters

//TEMPLATE LITERALS//
let name='Sathish'
let age=29

let final=`My name
is ${name} and
Iam 
${age} years old
`
console.log(final)

let a=5
let b=6
let result=`The sum of ${a} and ${b} is ${a+b}`
console.log(result)

    









