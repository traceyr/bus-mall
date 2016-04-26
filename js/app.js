//js will go here\
var imgAry = [];

function OurProducts(imgName, imgType, path) {
  this.imgName = imgName;
  this.imgType = imgType;
  this.path = '<img src="' + path + '" alt="' + this.imgName + '" type="' + this.imgType + '">';
  imgAry.push(this);
}

new OurProducts('Bag', 'JPG', 'images/bag.jpg');
new OurProducts('Banana', 'JPG', 'images/banana.jpg');
new OurProducts('Bathroom', 'JPG', 'images/bathroom.jpg');
new OurProducts('Boots', 'JPG', 'images/boots.jpg');
new OurProducts('Breakfast', 'JPG', 'images/breakfast.jpg');
new OurProducts('Bubblegum', 'JPG', 'images/bubblegum.jpg');
new OurProducts('Chair', 'JPG', 'images/chair.jpg');
new OurProducts('Cthulhu', 'JPG', 'images/cthulhu.jpg');
new OurProducts('Dog-Duck', 'JPG', 'images/dog-duck.jpg');
new OurProducts('Dragon', 'JPG', 'images/dragon.jpg');
new OurProducts('Pen', 'JPG', 'images/pen.jpg');
new OurProducts('Pet-Sweep', 'JPG', 'images/pet-sweep.jpg');
new OurProducts('Scissors', 'JPG', 'images/scissors.jpg');
new OurProducts('Shark', 'JPG', 'images/shark.jpg');
new OurProducts('Sweep', 'JPG', 'images/sweep.jpg');
new OurProducts('Tauntaun', 'JPG', 'images/tauntaun.jpg');
new OurProducts('Unicorn', 'JPG', 'images/unicorn.jpg');
new OurProducts('USB', 'JPG', 'images/usb.jpg');
new OurProducts('Water-Can', 'JPG', 'images/water-can.jpg');
new OurProducts('Wine-Glass', 'JPG', 'images/wine-glass.jpg');

console.log(imgAry);

function randMath(max, min) {
  var calc = Math.floor(Math.random() * (max - min));
  return calc;
}

var el = document.getElementById('img-1');

var emptyAry = [];

function testing() {
  while(emptyAry.length < 3){
    var randNum = randMath(imgAry.length, 0);
    var five = imgAry[randNum];
    if (emptyAry.length == 0) {
      emptyAry.push(five.path);
    } else if(emptyAry[0].path !== five.path && emptyAry.length === 1) {
      emptyAry.push(five.path);
    } else if (emptyAry[0].path !== five.path && emptyAry[1] !== five.path && emptyAry.length === 2) {
      emptyAry.push(five.path);
      console.log(emptyAry);
      return emptyAry;
    }
  }
}
console.log(emptyAry);
// var elEl = el.innerHTML = imgAry[0].path;
// el.appendChild(elEl);
// var elTwo = document.getElementById('img-2');
// elTwo.innerHTML = imgAry[1].path;
// var elThree = document.getElementById('img-3');
// elThree.innerHTML = imgAry[2].path;
