const userName = "Prakhar";
(userName != "") ? console.log("Hey, "+userName+"!") : console.log("Hello!");
const userQuestion = "Am I gonna get the job?";
console.log(userName + ": " + userQuestion);
let randomNumber = Math.floor(Math.random()*8);
var eightBall = "";
switch(randomNumber){
    case 0 :
        eightBall = 'It is certain';
        break;
    case 1 :
        eightBall = 'Signs point to yes';
        break;
    case 2 :
        eightBall = 'It is decidedly so';
        break;
    case 3 :
        eightBall = 'Reply hazy try again';
        break;
    case 4 :
        eightBall = 'Cannot predict now';
        break;
    case 5 :
        eightBall = 'Do not count on it';
        break;
    case 6 :
        eightBall = 'My sources say no';
        break;
    case 7 :
        eightBall = 'Outlook not so good';
        break;        
}

console.log(eightBall);