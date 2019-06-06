/* Function.prototype Members
Function objects have call() and apply() methods. 
You can use them to invoke a function and pass any arguments to it.
These methods also allow your objects to "borrow" methods from other objects and invoke them as their own. 
This is an easy and powerful way to reuse code*/

/*apply(this_obj, params_array)
Allows you to call another function while overwriting the other function's this value. 
The first parameter that apply() accepts is the object to be bound to this inside the function 
and the second is an array of arguments to be sent to the function being called.*/
/*call(this_obj, p1, p2, p3,...)
The same as apply() but accepts arguments one by one, as opposed to as one array.*/

/*Function.prototype.bind()
When you want to call a function that uses “this” internally and you want to define what “this” is. 
The methods call() and apply() invoke the function, while bind() returns a new function. 
Useful when you provide a method as a callback to a method of another object and you want this 
to be an object of your choice.*/

/*Object.create(proto[, propertiesObject])
The Object.create() method creates a new object with the specified prototype object and properties.*/

function Person(name, surname, email){
    this.name = name; 
    this.surname = surname; 
    this.email = email;
}

Person.prototype.print = function(){
    return this.name + " "+ this.surname;
} 

var pera = new Person('pera', 'peric', 'p@gmail'); 
console.log(pera.print());

function Programmer(name, surname, email, favouriteLanguage){
    // this.name = name; 
    // this.surname = surname; 
    // this.email = email; 
    Person.call(this, name, surname, email);

    this.favouriteLanguage = favouriteLanguage;
}

Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer; 

Programmer.prototype.print = function(){
    
    // name, surname + favouriteLanguage
    var personPrototype = Object.getPrototypeOf(Programmer.prototype);
    var nameSurname = personPrototype.print.call(this);

    return nameSurname + " " + this.favouriteLanguage;
}

var laza = new Programmer('laza', 'lazic', 'l@gmail', 'JS');
console.log(laza.print());