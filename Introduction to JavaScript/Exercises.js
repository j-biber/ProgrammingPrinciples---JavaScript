// How many grams weight 1.2kg of bananas? 
var bananaWeigthInKilos = 1.2;
var kiloInGrams = 1000;
var kilosToGrams = bananaWeigthInKilos * kiloInGrams;
console.log(kilosToGrams);

/* How many extra seconds we wait for our friend Anna who is being late for 5 minutes? 
What about Tom who is being late half an hour? It is hard to be on time these days…*/
var annaLateInMinutes = 5;
var tomLateInMinutes = 30;
var minuteToSeconds = 60;
var annaLateInSeconds = annaLateInMinutes * minuteToSeconds;
var tomLateInSeconds = tomLateInMinutes * minuteToSeconds;
console.log(annaLateInSeconds,tomLateInSeconds);

/*How many MB of additional memory we have if we buy a 4GB USB stick? 
How many news articles each in size 98KB can fit in it?*/
var gbInMb = 1000;
var availableMemory = 4 * gbInMb;
var mbInKb = 1000;
var memoryInKb = availableMemory * mbInKb;
var articleSizeKb = 98;
var numberOfArticles = memoryInKb / articleSizeKb;
console.log(availableMemory, numberOfArticles);

/*Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. 
If we store the current speed value in the variable speed how we can check if we drive safely?*/
var speed = 100 ;
 if (speed <=60 || speed <= 120) {
     console.log(true)
 } else {
     console.log(false);
 }


