function App(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}

function WebApp(name, url, technologies, licence, stars) {
    App.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;
}

WebApp.prototype.getData = function () {
    var webData = this.name + ',' + this.url + ',' + this.technologies + ',' + this.licence + ',' + this.stars;
    console.log(webData);
}

WebApp.prototype.reactBased = function () {
    if (this.technologies.includes('React') == true) {
        console.log('React based.')
    } else {
        console.log('Not React based.')
    }
}

WebApp.prototype.isCCLicence = function () {
    if (this.licence === 'CC') {
        console.log('CC licenced.');
    } else {
        console.log('Not CC licenced.');
    }
}
WebApp.prototype.like = function (like) {  //???
    var newStars = this.stars + 1;
    console.log(newStars);
}

WebApp.prototype.showStars = function () {
    console.log(this.stars);
}

function MobileApp(name, platforms, licence, stars) {
    App.call(this, name, licence, stars);
    this.platforms = platforms;
}

MobileApp.prototype.getData = function () {
    var mobData = this.name + ',' + this.platforms + ',' + this.licence + ',' + this.stars;
    console.log(mobData);
}

MobileApp.prototype.forAndroid = function () {
    if (this.platforms.includes('Android') == true) {
        console.log('For Android.')
    } else {
        console.log('Not for Android.')
    }
}

MobileApp.prototype.like = function () {  //???
    var newStars = this.stars + 1;
    console.log(newStars);
}

MobileApp.prototype.showStars = function () {
    console.log(this.stars);
}




var newWebApp = new WebApp('aplikacija', 'url', ['nesto', 'React', 'nesto'], 'CC', 5);
var newMobileApp = new MobileApp('neko ime', ['platforms', 'bla', 'blah'], 'no', 3);

newWebApp.getData();
newWebApp.reactBased();
newMobileApp.getData();
newMobileApp.forAndroid();
newMobileApp.showStars();
newWebApp.like();
newWebApp.isCCLicence();