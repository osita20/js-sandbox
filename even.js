function evenNumber(){
    var sum =0;
    for(i=1; i<=100;i++){
    if(i%2===0){
       sum = sum+i;
 };
 };
       return sum;
 };
//document.write(evenNumber())
//console.log(evenNumber())
alert("The sum of evenNumber is " + evenNumber())
