function sumofeven(num){
   if(typeof num != 'number'){
      return 'Invalid input value'
    };
   var sum =0;
  for (a=0; a<=num; a++) {
     if(a%2===0){
        sum = sum+a;
     };  
    };
   return sum;
};
 var getnum = sumofeven(8);
 alert('The result is ' +getnum);
