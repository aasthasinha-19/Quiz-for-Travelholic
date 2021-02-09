const chalk= require('chalk');
var readlineSync =require("readline-sync");
var score=0;
var userName= readlineSync.question("Enter your name:");


console.log(chalk.red.bold("Welcome"+" "+userName+"!"));


console.log(chalk.bgBlue("Love Travelling ? Take Up This Quiz And Prove It !"))
function play(question,answer){
if(userAnswer.toUpperCase()==questions[i].answer){
 console.log(chalk.green.bold("That's Right !..")) ;
 score++;
}
else{
  console.log(chalk.red.bold("Oops ! That's a Wrong answer.."));
}
console.log(chalk.magenta.bold("Current Score:"+ score));
console.log(chalk.yellow("--------------------"));
}
var questions= [{
  question:"1.Which city is known as electronic city of India ?"+"\n"+"A.Mumbai"+"\n"+"B.Hyderabad"+"\n"+"C.Gurgaon"+"\n"+"D.Banglore",
  answer:"D"
},{
  question:"2.Which Indian hill station is known as the Queen of the Hills ?"+"\n"+"A.Mussoorie"+"\n"+"B.Shimla"+"\n"+"C.Darjeeling"+"\n"+"D.Shillong",
  answer:"A"
},{
  question:"3.Which state is known as the India's Spice Garden ?"+"\n"+"A.Uttaranchal"+"\n"+"B.Karnataka"+"\n"+"C.Kerala"+"\n"+"D.Assam",
  answer:"C"
},{
  question:"4.Which city is known as the 'Silicon Valley of India'?"+"\n"+"A.Mumbai"+"\n"+"B.Banglore"+"\n"+"C.Ahmedabad"+"\n"+"D.Jaipur",
  answer:"B"
},{
  question:"5.Which Indian city is the capital of two states ?"+"\n"+"A.Jaipur"+"\n"+"B.Banglore"+"\n"+"C.Chandigarh"+"\n"+"D.Patna",
  answer:"C"
}]
for(var i = 0;i<questions.length;i++)
{
console.log(questions[i].question);
var userAnswer=readlineSync.question("Enter your option:");
play(questions[i].question,questions[i].answer);
}
if(score==5){
  console.log(chalk.red.bold("Your Final Score is:"+score));
  console.log(chalk.green.bold("Great, That's a high score!"));
}
else{
  console.log(chalk.red.bold("Your Final Score is:"+score));
}