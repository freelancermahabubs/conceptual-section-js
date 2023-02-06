// এমন একটা ফাংশন বানাও যেটা একটি অ্যারে নিবে ইনপুট হিসেবে। তারপর সেই অ্যারের সকল উপাদান এর মধ্যে ৫ এর চেয়ে বড় যে সকল সংখ্যা আছে তাদের কাউন্ট নির্ণয় করবে। ইনপুটঃ [-1,2,-3,4,5,6,-7,8,-9,10]
// আউটপুটঃ 3
// let myNumber = [-1,2,-3,4,5,6,-7,8,-9, 15, 45, 78, 10];
// let count = 0;
// for(let i = 0; i <= myNumber.length; i++){
//   const element = myNumber[i];
//   if(element > 5){
//     // console.log('yes');
//     count = count +1;
//   }
 
// }
// console.log(count);

function greaterThanFive(numbers){
  let count = 0;
  for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    if(element > 5){
    count++;
    }
  }
  return count;
}
let result = greaterThanFive([-1,2,-3,4,5,6,-7,8,-9, 15, 45, 78, 10]);
console.log(result);