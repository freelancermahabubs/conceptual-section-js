// Problem:2   isJavaScriptFile 
// ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে । 

function isJavaScriptFile(fileName){
  if(typeof fileName != "string" || fileName.length == 0){
    return "Please Provide a Valid Input"
  }

 if(fileName.endsWith('.js')){
  return true;
 }
 else{
  return false;
 }
}
let result =  isJavaScriptFile("");
console.log(result);

// if(str[str.length-1] == "s"){
//   if(str[str.length-2] == "j"){
//     if(str[str.length-3] ==".")
//     return true
//   }
//   return false
// }