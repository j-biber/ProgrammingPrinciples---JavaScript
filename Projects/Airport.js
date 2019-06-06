'use strict';

(function () {

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    Person.prototype.getData = function () {
        return this.name + " " + this.surname
        //return this.name.concat(' ', this.surname);
    }

    function Seat(seatNumber, category) {
        this.number = seatNumber;
        this.category = category || 'e';
    }

    Seat.prototype.getData = function () {
        return this.number + ", " + this.category.toUpperCase();
        // var seatNumber = this.number.toString();
        // var category = this.category.toUpperCase()
        // return seatNumber.concat(' ',category)
    }

    function Passenger(person, seat) { //instance of person, instance of seat
        this.person = person;
        this.seat = seat;
    }

    Passenger.prototype.getData = function () {
        return this.person.getData() + ", " + this.seat.getData();
    }

    function Flight(destination, date) {
        this.destination = destination;
        this.date = new Date(date);
        this.listOfPassengers = [];
    }

    Flight.prototype.addPassenger = function (passenger) {
        return this.listOfPassengers.push(passenger);
    }

    Flight.prototype.getData = function () {
        var day = this.date.getDate();
        var month = this.date.getMonth() + 1;
        var year = this.date.getFullYear();

        var formattedDate = day + "." + month + "." + year;

        return new String(formattedDate + ", " + this.destination + ", " + this.listOfPassengers);
    }

    function Airport() {
        this.name = "Nikola Tesla";
        this.totalPassengers = 0;
        this.businessPassengers = 0;
        this.listOfFlights = [];
    }

    Airport.prototype.addFlight = function (flight) {
        this.listOfFlights.push(flight);
    }

    Airport.prototype.getData = function () {
        var totalPassengers = 0;
        var output = String("");
        var outputData = String("");

        this.listOfFlights.forEach(function (flight) {
            var passengers = flight.listOfPassengers;
            totalPassengers += passengers.length;

            outputData += "\t" + flight.getData() + "\n";

            passengers.forEach(function (passenger) {
                outputData += "\t\t" + passenger.getData() + "\n";
            }, this);
        }, this);

        output = "Airport: " + this.name + ", total passengers: " + totalPassengers + "\n";
        output += outputData;

        return output;
    }

    function createFlight(destination, date) {
        return new Flight(destination, date);
    }

    function createPassenger(name, surname, seatNumber, category) {
        //var p2 = new Person()
        var person = new Person(name, surname);
        var seat = new Seat(seatNumber, category);
        var passenger = new Passenger(person, seat);
        return passenger;
    }

    (function () {

        // Create Airport
        var airport = new Airport();
    
        createFlight()
        // Create 2 flights
        var belgradeParisFlight = createFlight("Belgrade - New York", "Oct 25 2017");
        var barcelonaBelgradeFlight = createFlight("Paris - Belgrade", "Nov 11 2017");
    
        // Create 4 passengers	
        var p1 = createPassenger("John", "Snow", 1, "b");
        var p2 = createPassenger("Cersei", "Lannister", 2, "e");
        var p3 = createPassenger("Daenerys", "Targaryen", 1);
        var p4 = createPassenger("Tyrion", "Lannister", 2);
    
        // Add passengers to first flight
        belgradeParisFlight.addPassenger(p1);
        belgradeParisFlight.addPassenger(p2);
    
        // Add passengers to second flight
        barcelonaBelgradeFlight.addPassenger(p3);
        barcelonaBelgradeFlight.addPassenger(p4);
    
        // Add flights to airport
        airport.addFlight(belgradeParisFlight);
        airport.addFlight(barcelonaBelgradeFlight);
    
        // Output airport data
        var airportData = airport.getData();
        console.log(airportData);
    
    }());

})();



/*Extra
Modify Flight getData method to return a formatted string as date and relation (as the first and the last consonant of the starting location - the first and the last consonant of the destination location) of the current flight.
"Belgrade - Paris", "25.09.2017" -> 25.09.2017 BD - PS

While adding passenger with addPassenger method, make sure that:
Two passengers can not have the same seat number;
The flight can not have more than 100 passengers;
If a passenger with the same full name exists in a flight list, you should replace the existing passenger’s data with new data (e.g. it can happen when a passenger changes seats).

Modify Passenger’s getData method to return full category name “business” for “b” and “economy” for “e”.

Add the total number of passengers in business category for each flight and the total number of business category passengers for the airport to final output.*/
