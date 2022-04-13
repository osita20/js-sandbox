function sumofodd(num){
   if(typeof num !='number'){
      return 'a wrong input value'
   }
   var sum =0;
  for (a=1; a<=num; a++) {
     if(a%2===1){
        sum = sum+a;
     }
  };
  return sum;
};
 var getnum = sumofodd(10);
 alert('The result is  '+ getnum);
