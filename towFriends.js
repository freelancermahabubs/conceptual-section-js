// তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো। 

let nameOne = "John";
let nameTwo = "Alexis"

// let friendsOneLength = nameOne.length;
// let friendsTwoLength = nameTwo.length;
// if(friendsOneLength > friendsTwoLength){
//   console.log(nameOne.split('').reverse().join(''));
// }
// else{
//   console.log(nameTwo.split('').reverse().join(''));
// }

function reverseName(nameOne, nameTwo){
  let friendsOneLength = nameOne.length;
let friendsTwoLength = nameTwo.length;

if(friendsOneLength > friendsTwoLength){
 
 return nameOne.split('').reverse().join('');
}
else{
return nameTwo.split('').reverse().join('');
 
}

}
let result = reverseName('John', 'Alexis');
console.log(result);

// optional way for reversing a string
// let str = "mahaub";
// for(let i = 0; i < str.length; i++){
//   const element = str[i];
//   console.log(element);
// }
// this is lineBrak
// console.log("------------------------")
// for(let i = str.length -1; i >= 0; i--){
//   const element = str[i];
//   // console.log(element);
//  return element.split('');
// }