let num = 121

let str = num.toString()

let result = str.split(" ").reverse().join(" ")
//console.log(result)

let nums = 12321

let reverse = 0
let number = nums

for(; number>0; number = Math.floor(number/10)){
  let digit = number % 10
  reverse = reverse *10 + digit
}
  console.log(reverse)
  if(nums === reverse){
    console.log("palindrome");
    
  } else {
    console.log("not a palindrome");
    
  }


  let a = 12321
  let b = a.toString()

  let c = b.split(" ").reverse().join(" ")
  console.log(c)

  let x = 12321

  let y = x
  let z = 0 
  while(y>0){
    let dig = y%10
    z = z*10 + dig
    y = Math.floor(y/10)
  }
console.log("here  res is" , z);


