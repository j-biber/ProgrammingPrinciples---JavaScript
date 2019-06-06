// type - string
// strength - number
// sugar - number
// milk - boolean

// addSugar
// printInfo

function Coffee (type, strength, sugar, milk) {
    this.typeOfCoffee = type;
    this.coffeeStrength = strength;
    this.sugar = sugar;
    this.milk = milk;

    this.addSugar = function () {
        this.sugar++;
    }

    this.printInfo = function () {
        console.log('Your coffee is:' + this.typeOfCoffee);

        switch (this.coffeeStrength) {
            case 1:
            case 2:
            console.log('weak coffee');
            break;
            case 3:
            case 4:
            console.log('regular coffee');
            break;
            case 5:
            case 6:
            console.log('strong coffee');
            break;
        }
    }
    if (this.sugar = 0) {
        console.log('No sugar.');
    }
    if (this.sugar > 0 && this.sugar < 2) {
        console.log('Lightly sweet coffee.');
    } 
    else {
        console.log('Super sweet coffee.')
    }

    var milk;
    milk = (this.milk == true) ? 'With milk.' : 'Without milk.';
    console.log(milk);
}

var myCoffee = new Coffee ('mocha', 5, 1, false);
console.log(myCoffee.printInfo());