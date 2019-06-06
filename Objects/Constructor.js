
var misa = {
    username: "Misa",
    password: "123456",
    changePassword: function(newPassword) {
      this.password = newPassword;
    }
  };
  
  console.log(misa.password);
  misa.changePassword("abcdef");
  console.log(misa.password);
  
  var gisa = {
    username: "Gisa",
    password: "gisacar",
    changePassword: function(newPassword) {
      this.password = newPassword;
    }
  };
  
  console.log(gisa.password);
  gisa.changePassword("gisagenije");
  console.log(gisa.password);
  
  // function createUser(userUsername, userPassword){
  //     var newUser = {};
  
  //     newUser.username = userUsername;
  //     newUser.password = userPassword;
  
  //     newUser.changePassword = function(newPassword){
  //         newUser.password = newPassword;
  //     };
  
  //     return newUser;
  // }
  
  // var visnja;
  
  // visnja = createUser("visnja", "1234");
  // console.log(visnja.username);
  // visnja.changePassword("abcd");
  // console.log(visnja.password);
  
  function User(userUsername, userPassword) {
    // var this = {};
  
    this.username = userUsername;
    this.password = userPassword;
  
    this.changePassword = function(newPassword) {
      this.password = newPassword;
    };
  
    // return this;
  }
  
  var misa = new User("Misa", "123456");
  console.log(misa);
  
  // pogresan poziv
  var masa = User("Masa", "34a56");
  console.log(masa);
  
  //ovo je sada globalna promenljiva!
  console.log(username);
  
  // console.log(masa.password);
  
  // fije koje vracaju objekte
  
  //1)
  function factory(name) {
    var newObject = {};
  
    newObject.name = name;
  
    return newObject;
  }
  
  //2)
  function factory(name) {
    return {
      name: name
    };
  }
  constructors.js
  