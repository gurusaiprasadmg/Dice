var dice1 = Math.floor(Math.random()*6) +1;
var dice2 = Math.floor(Math.random()*6) +1;
var strdice1 = dice1.toString()
var strdice2 = dice2.toString()

var dice1img = "/Users/Sai/Desktop/Sai's stuff/html code/Web development/Dicee Challenge - Starting Files/images/dice" + strdice1 + '.png'
var dice2img = "/Users/Sai/Desktop/Sai's stuff/html code/Web development/Dicee Challenge - Starting Files/images/dice" + strdice2 + '.png'
document.querySelector('.img1').setAttribute('src',dice1img)

document.querySelector('.img2').setAttribute('src',dice2img)

if (dice1> dice2){
  document.querySelector('h1').innerText = 'Player 1 wins!'
}
if (dice1< dice2){
  document.querySelector('h1').innerText = 'Player 2 wins!'
}
if (dice1 === dice2){
  document.querySelector('h1').innerText = 'izza tie!'
}
