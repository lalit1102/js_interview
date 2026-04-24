let a  = "hello"
let b = a.toUpperCase()

console.log(a.split("").reverse().join(" "))
console.log(b.split("").reverse().join(" "))


let nam = "lalit Baldaniya"

console.log(nam.split(" ").reverse().join(" "))

console.log(nam.split("").reverse().join(""))



let myName = "madam aa"
console.log(myName.length)
let result = ""

 for(let i = myName.length-1; i>=0; i--){
  result = result + myName[i]
 }
console.log(result)

console.log(myName.split(" ").reverse().join(" "))


let str = "A man a plan a canal Panama";

let str1 = str.toLowerCase()
let str2 = str1.replace(/\s/g,"")
let final  = str2.split("").reverse().join("")
console.log(final)