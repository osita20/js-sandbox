//Create an object that has properties "username", "password" & "status". Fill those values in with strings
var id ={
   username:'james',
   password:'Med234',
   status: 'online'
},

// 2. Create an array which contains the object you have made above and name the array "database".

var database = [
   {
   username:'james',
   password:'Med234',
   status: 'online'
},
{
   username:'jona',
   password:'Mid224',
   status: 'offline'
},
{
   username:'eze',
   password:'pat335',
   status: 'online'
}

];
//3. Accept username, password & status from the prompt and add it to the database array 

var database = [username = prompt('Enter username'),  password = prompt('Enter password'), status = prompt('Enter status')];
alert(database);

//4.Create a function called SignIn that accept two parameter - username, password. This function would check the database array to check for any matching entry. If username & password matches return Both the username and status, if not return "Sorry, wrong username and password".

  function SignIn(username,password){
   var database=[
      {
         username : 'james',
         password : 'Med234'
      }
   ]
     if(username ===database[0].username && password ===database[0].password){
      return('jame, Med234');
     }
     else {
        return("Sorry, wrong username and password");
     } 
   }
    var request = SignIn(jame, Med234)
     console.log(request);

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
   var i,
   var database=[
      {
         username : 'james',
         password : 'Med234'
      }
   ]
  

   for(i in database){
      console.log(database[i])
   };
};
var report = SignIn(james,Med234);
console.log(report);
