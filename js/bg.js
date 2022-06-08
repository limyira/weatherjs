const img = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","07.jpg","08.jpg","09.jpg","10.jpg"];


const chosenImg = img[Math.floor(Math.random()*img.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${chosenImg}`;

document.body.append(bgImg);