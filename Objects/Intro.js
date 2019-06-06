//svojstva:
// korisnicko ime, sifra, godine, pol, email,
// da li zna JS ili ne

//metode:
// proslaviti rodjendan, nauciti JS, promeniti sifru

var user = {
    username: "misa",
    password: "misa123",
    age: 25,
    gender: "m",
    email: "misa@gmail.com",
    isJSprogrammer: false,
    birthday: function() {
      user.age++;
    },
    learJS: function() {
      user.isJSprogrammer = true;
    },
    changePassword: function(newPassword) {
      user.password = newPassword;
    }
  };
  
  console.log(user.username);
  console.log(user.image);
  console.log(user.isJSprogrammer);
  user.learJS();
  console.log(user.isJSprogrammer);
  user.changePassword('MisaJS');
  console.log(user.password);
  // nepostojeca metoda --> TypeError
  // user.changeImage();
  
  // promena vrednosti svojstva
  user.age = 30; 
  
  // dodavanje novog svojstva
  user.phone = '9039303';
  
  
  // brisanje svojstva
  delete user.age; 
  console.log(user.age);