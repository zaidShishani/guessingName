"use strict";

let userName = prompt("what is your name ??");

let scorePoint = 0;

//console.log('Hi ' + userName + " welcome to my website can you guess these right bout me :O")
alert('Hi ' + userName + " welcome to my website can you guess these right bout me :O");
let q1 = prompt("are dogs my favorite pets").toLowerCase();
qAnswerYes(q1);


let q2 = prompt("do you think I like movies ??").toLowerCase();
qAnswerYes(q2);


let q3 = prompt("Do you think I play league of legends ??").toLowerCase();
qAnswerYes(q3);


let q4 = prompt("do you think I workout ??").toLowerCase();
qAnswerYes(q4);


let q5 = prompt("is shawarma my favorite food ??").toLowerCase();
qAnswerNo(q5);


let q6 = Number(prompt("Can you guess my age " + userName + " enter how old do you think I am ? (Hint am around 20)"));
q6Answer(q6);


let q7 = prompt("Name one of my favorite shows from Netflix ??").toLowerCase();
q7Answer(q7);


alert('your finale score is ' + scorePoint+"/7");


function qAnswerYes(q)
{
   console.log(q)

   switch (q)
   {
      case "y":
      case "yes":
      //console.log('Wow that\'s right ' + userName + "!!");
      alert('Wow that\'s right ' + userName + "!!");
      scorePoint++;
         break;
      case"n":
      case"no":
      //console.log('That\'s not it my guy :\\ dogs are cool');
      alert('That\'s not it my guy :\\ dogs are cool');
         break;
      default: 
      //console.log('did you even try :\\');
      alert('did you even try :\\');
      break;
   }
}

function qAnswerNo(q)
{
   console.log(q);

   switch (q)
   {
      case "y":
      case "yes":
      //console.log('worng, I think they are overrate');
      alert('worng, I think they are overrate');
         break;
      case"n":
      case"no":
      //console.log('ohh you guess it, I think they are overrate');
      alert('ohh you guess it, I think they are overrate');
      scorePoint++;
         break;
      default: 
      //console.log('try yes,no next time');
      alert('try yes,no next time');
      break;
   }
}

function q6Answer(q)
{
   let attempts = 0;

   for(let i = 0; i < 4; i++)
   {
         if (q === 21){
            alert('correct nice');
            scorePoint++;
            break;
         }
         else if(attempts === 3)
         {
            alert('the correct answer was 21')
            break;
         }
         else if(q > 21)
         {
            alert('Too high,am sorry try again');
            attempts++;
         }
         else if (q < 21){
            alert('Too low,am am sorry try again');
            attempts++;
         }
         q = Number(prompt("Can you guess my age " + userName + " enter how old do you think I am ? (Hint am around 20)"))
   }
}

function q7Answer(q)
{
   let q7array = ["bojack","bojack horseman","avatar", "avatar the Last Airbender","how I met your mother","himym","the walking dead","the Umbrella Academy","the Witcher","the queens gambit","the good place","stranger things","lucifer"];
   let q7attempts = 0;
   let found = false;
   while(q7attempts < 5)
   {
      for (let i = 0; i < q7array.length; i++) 
      {
         if(q == q7array[i])
         {
            //console.log('that\'s correct')
            alert('that\'s correct')
            found = true;
            scorePoint++;
            break;
         }
         
      }
      if(found)
      {
         break;
      }
      else if(q7attempts == 5)
         {
            break
         }
         q7attempts++
      q = prompt('try again').toLowerCase();
       
   }

    //console.log('answers were (bojack horseman, avatar the Last Airbender, how I met your mother, the walking dead, the Umbrella Academy, the Witcher, the queens gambit, the good place, stranger things, lucifer)')
    alert('answers were (bojack horseman, avatar the Last Airbender, how I met your mother, the walking dead, the Umbrella Academy, the Witcher, the queens gambit, the good place, stranger things, lucifer)')

}