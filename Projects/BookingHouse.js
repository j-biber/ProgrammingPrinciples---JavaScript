'use strict';

(function () {

    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    } // (EU, AS, AF, SA, NA, AU)

    Country.prototype.getCountryName = function () {
        console.log(this.name);
    }

    function Person(name, surname, dob) {
        this.name = name;
        this.surname = surname;
        this.dob = new Date(dob);
    }

    Person.prototype.getInfo - function () {
        var day = dob.getDate();
        var month = dob.getMonth();
        var year = dob.getFullYear();
        var formattedDate = day + "." + month + "." + year;
        return this.name, + ', ' + this.surname + ', ' + formattedDate;
    }

    function Player(betAmount, country) {
        Person.call(this, name, surname, dob);
        this.betAmount = betAmount;
        this.country = country;
    }

    Player.prototype.getData = function () {
        var expWinAmount = this.odds * this.betAmount;
        var age = new Date() - this.dob;
        var player = this.name + ' ' + this.surname;
        return this.country + ', ' + expWinAmount + ', ' + player + ', ' + age + ' years';
    }

    function Address(country, city, postalCode, street, streetNumber) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.streetNumber = streetNumber;
    }

    Address.prototype.getAddress = function () {
        return this.street + ' ' + this.streetNumber + ', ' + this.postalCode + ' ' + this.city + ', ' + this.country;
    }

    function BettingPlace(address) {
        this.address = address;
        this.listOfPlayers = [];
    }

    BettingPlace.prototype.addPlayer = function (player) {
        return this.listOfPlayers.push(player);
    }

    BettingPlace.prototype.getInfo = function () {
        var totalBetSum = 0;
        var betAmount = this.betAmount;
        totalBetSum += betAmount;
        return this.street + ', ' + this.postalCode + ' ' + this.city + 'sum of all bets: ' + totalBetSum;
    }

    function BettingHouse(competition) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.numberOfPlayers = this.listOfPlayers.length;
    }

    BettingHouse.prototype.addBettingPlace - function (bettingPlace) {
        return this.listOfBettingPlaces.push(bettingPlace);
    }

    BettingHouse.prototype.getCompetitionName - function (competitionName) {
        return competitionName;
    }

    function createPerson (name, surname, dob) {
        return new Person (name, surname, dob)
    }
    function createPlayer(person, betAmount, country) {
        return new Player(person, betAmount, country);
    }

    function createBettingPlace(address) {
        return new BettingPlace(address);
    }
    
})();