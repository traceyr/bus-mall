var imgAry = [];
var generateImgArry = [];
var el = document.getElementById('imgs');
var bt = document.getElementById('btn');
var totalClicks = 0;

function OurProducts(imgName, imgType, path) {
  this.imgName = imgName;
  this.imgType = imgType;
  this.path = '<img src="' + path + '" alt="' + this.imgName + '" id="' + this.imgName + '">';
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

function randMath(max, min) {
  var calc = Math.floor(Math.random() * (max - min));
  return calc;
}

function renderImages() {
  while(generateImgArry.length < 3){
    var randNum = randMath(imgAry.length, 0);
    var five = imgAry[randNum];
    if(generateImgArry.length == 0) {
      imgAry[randNum].numAppearences++;
      generateImgArry.push(five);
    } else if(generateImgArry[0].path !== five.path && generateImgArry.length == 1) {
      imgAry[randNum].numAppearences++;
      generateImgArry.push(five);
    } else if(generateImgArry[0].path !== five.path && generateImgArry[1].path !== five.path && generateImgArry.length === 2) {
      imgAry[randNum].numAppearences++;
      generateImgArry.push(five);
      return generateImgArry;
    }
  }
}

function handleImages() {
  renderImages();
  for(var i = 0; i < generateImgArry.length; i++) {
    var li = document.createElement('li');
    li.innerHTML = generateImgArry[i].path;
    el.appendChild(li);
  }
}
handleImages();

el.addEventListener('click', handleClick);

function handleClick(event) {
  if(totalClicks < 25) {
    totalClicks++;
    for(var i = 0; i < imgAry.length; i++) {
      if(event.target.id === imgAry[i].imgName) {
        imgAry[i].numClicks++;
      }
    }
    generateImgArry = [];
    var elem = document.getElementById('imgs');
    elem.innerHTML = ' ';
    handleImages();
  } else if(totalClicks === 25) {
    var el = document.querySelector('button');
    el.style.visibility = 'visible';
    bt.addEventListener('click', handleButtonChart);
  }
}

function handleButtonChart() {
  var names = [];
  for(var t = 0; t < imgAry.length; t++) {
    names.push(imgAry[t].imgName);
  }

  var votes = [];
  for(var t = 0; t < imgAry.length; t++) {
    votes.push(imgAry[t].numClicks);
  }

  var numShown = [];
  for(var t = 0; t < imgAry.length; t++) {
    numShown.push(imgAry[t].numAppearences);
  }

  var data = {
    labels: names,
    datasets: [
      {
        label: 'Number of Votes',
        data: votes,
        backgroundColor:
          '#F58A07'
        ,
        hoverBackgroundColor:
          '#F7F5FB'
      },
      {
        label: 'Number of Times Shown',
        data: numShown,
        backgroundColor:
          '#084887'
        ,
        hoverBackgroundColor:
          '#F9AB55'
      }
    ]
  };

  var votesChart = document.getElementById('click-chart').getContext('2d');

  var clicksChart = new Chart(votesChart, {
    type: 'bar',
    data: data,
    options: {
      responsive: false
    }
  });
}
