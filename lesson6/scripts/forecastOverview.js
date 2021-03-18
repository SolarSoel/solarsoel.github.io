function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  };
var t = getRandomInt(32, 55);
var w = getRandomInt(2, 15);
var h = getRandomInt(2, 69);

document.querySelector('#current-temp').innerHTML = t ;



document.querySelector('#wind-speed').innerHTML = w ;



document.querySelector('#humidity').innerHTML = h;

