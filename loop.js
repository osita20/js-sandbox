//Create an object that has properties "username", "password" & "status". Fill those values in with strings
var id ={
   username:'james',
   password:'Med234',
   status: 'online'
};
// 2. Create an array which contains the object you have made above and name the array "database".

var database = [{
   username:'james',
   password:'Med234',
   status: 'online'
}
];
//3. Accept username, password & status from the prompt and add it to the database array 

var username = prompt('Enter username');
var password = prompt('Enter password');
var status = prompt('Enter status');
var database = [{username:'', password:'', status:''}];

//4.Create a function called SignIn that accept two parameter - username, password. This function would check the database array to check for any matching entry. If username & password matches return Both the username and status, if not return "Sorry, wrong username and password".

function SignIn(username, password){
  var match;
  
  var username = prompt('Enter username');
  var password = prompt('Enter password');
  var database = [{
   username:'james',
   password:'Med234'
  }];
  match = database;
  if(match=== username && password){
     return match;
     alert('you are accepted');
  }
  else{
     alert('Sorry, wrong username and password');
  }
}
alert(SignIn(username,password));

//5. Initialise your database array with five object of username, password and status.

var database = [{
   username:'james',
   password:'Med234',
   status: 'online'
},
{
   username: 'nkem',
   password:'mark212',
   status: 'offline'
},
{
   username:'john',
   password:'Md284',
   status: 'online'
},
{
   username:'jude',
   password:'d5284',
   status: 'online'
},
{
   username:'chima',
   password:'pall233',
   status: 'offline'
}

];

//Update your signIn function to use loop; running through the item in the database and return matching username and password.

function SignIn(username, password){
   var x;

   
   var username = prompt('Enter username');
   var password = prompt('Enter password');

   var database = [{
      username:'james',
      password:'Med234'
     }];

   for(x in database){
      console.log(database[x])
   };
};
console.log(username,password);
