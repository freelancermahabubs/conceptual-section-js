// ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।
// 1rad × 180/π
function radianToDegree(radian){
  if(typeof radian != "number"){
    return "Provide A Valid inPut";
  }
  const pI = 3.14159265359;
  const degree = (radian * (180/pI)).toFixed(2);
  return degree

}

const result = radianToDegree("hkk");
console.log(result);