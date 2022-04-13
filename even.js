function sumofEven(num){
   if(typeof num !='number'){
      return 'a wrong input value'
   }
   var sum =0;
  for (a=1; a<=num; a++) {
     if(a%2===0){
        sum = sum+a;
     }
  };
  return sum;
};
 var getnum = sumofEven('msks');
 alert('The result is  '+ getnum);
