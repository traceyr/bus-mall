//js will go here\
var imgAry = [];
var emptyAry = [];
var elOne = document.getElementById('img-1');
var elTwo = document.getElementById('img-2');
var elThree = document.getElementById('img-3');
var totalClicks = 0;

function OurProducts(imgName, imgType, path) {
  this.imgName = imgName;
  this.imgType = imgType;
  this.path = '<img src="' + path + '" alt="' + this.imgName + '" type="' + this.imgType + '">';
  this.numAppearences = 0;
  this.numClicks = 0;
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

function testing() {
  while(emptyAry.length < 3){
    var randNum = randMath(imgAry.length, 0);
    var five = imgAry[randNum];
    if(emptyAry.length == 0) {
      imgAry[randNum].numAppearences++;
      emptyAry.push(five.path);
    } else if(emptyAry[0] !== five.path && emptyAry.length == 1) {
      imgAry[randNum].numAppearences++;
      emptyAry.push(five.path);
    } else if(emptyAry[0] !== five.path && emptyAry[1] !== five.path && emptyAry.length === 2) {
      imgAry[randNum].numAppearences++;
      emptyAry.push(five.path);
      return emptyAry;
    }
  }
}
console.log(emptyAry);

function handleImages() {
  testing();
  elOne.innerHTML = emptyAry[0];
  elTwo.innerHTML = emptyAry[1];
  elThree.innerHTML = emptyAry[2];
}
handleImages();

elOne.addEventListener('click', handleClick, false);
elTwo.addEventListener('click', handleClick, false);
elThree.addEventListener('click', handleClick, false);

function handleClick() {
  if(totalClicks < 5) {
    totalClicks++;
    console.log(totalClicks);
    emptyAry = [];
    handleImages();
  }
}
//The only way I could think to do the counter was to create three different handleClick functions and say that the el.innerHTML === imgAry[i].path,(inside a for loop) then increase the numClicks variable that way. But that seemed like a lot of extra work. I am sure there is an easier way to say if this id is clicked and that innerHTML matches the imgAry[i].path, then increase the numCLick variable.
