"use strict";

let userName = prompt("what is your name ??")

let scorePoint = 0;


alert('Hi ' + userName + " welcome to my website can you guess these right bout me :O")
let q1 = prompt("are dogs my favorite pets").toLowerCase()

console.log(q1)

switch (q1)
{
   case "y":
   case "yes":
    alert('Wow that\'s right ' + userName + "!!");
    scorePoint++;
       break;
    case"n":
    case"no":
    alert('That\'s not it my guy :\\ dogs are cool');
       break;
   default: 
   alert('did you even try :\\');
   break;
}


let q2 = prompt("do you think I like movies ??").toLowerCase()

console.log(q2)

switch (q2)
{
   case "y":
   case "yes":
    alert('I think we can be friends');
    scorePoint++;
       break;
    case"n":
    case"no":
    alert('Nope no no no, ' + userName + ' you can do better');
       break;
   default: 
   alert('come on man...');
   break;
}

let q3 = prompt("Do you think I play league of legends ??").toLowerCase()

console.log(q3)

switch (q3)
{
   case "y":
   case "yes":
    alert('I do but not as much as I used to');
    scorePoint++;
       break;
    case"n":
    case"no":
    alert('wrong, I do play');
       break;
   default: 
   alert;('you\'r input is incorrect try using y / n..')
   break;
}

let q4 = prompt("do you think I workout ??").toLowerCase()

console.log(q4)

switch (q4)
{
   case "y":
   case "yes":
    alert('true been hitting the gym tryin to lose quarantine weight');
    scorePoint++;
       break;
    case"n":
    case"no":
    alert('nope wish I had healthier eating habits');
       break;
   default: 
   alert('I give up....');
   break;
}

let q5 = prompt("is shawarma my favorite food ??").toLowerCase()

console.log(q5)

switch (q5)
{
   case "y":
   case "yes":
    alert('worng, I think they are overrate');
       break;
    case"n":
    case"no":
    alert('ohh you guess it, I think they are overrate');
    scorePoint++;
       break;
   default: 
   alert('try yes,no next time');
   break;
}

let q6 = Number(prompt("Can you guess my age " + userName + " enter how old do you think I am ? (Hint am around 20)"))

let attempts = 3;

while(attempts > 0){
if(q6 > 21){
   q6 = prompt('Too high,am sorry try again');
   attempts--;
}
else if (q6 < 21){
   q6 = prompt('Too low,am am sorry try again');
   attempts--;
}
else if (q6 === 21){
   q6 = alert('correct nice');
   scorePoint++;
   break;
}
else{
   q6 = prompt("try and enter number");
   attempts--;
}
}
if(attempts === 0){
   alert('the correct answer was 21')
}

let q7 = prompt("Name one of my favorite shows from Netflix ??").toLowerCase();

let q7array = ["bojack","bojack horseman","avatar", "avatar the Last Airbender","how I met your mother","himym","the walking dead","the Umbrella Academy","the Witcher","the queens gambit","the good place","stranger things","lucifer"]
let q7attempts = 0
while(q7attempts < 5){
 for (let i = 0; i < q7array.length; i++) {
      if(q7 === q7array[i]){
         alert('that\'s correct')
         q7attempts = 5;
         scorePoint++;
         break;
      }
   }
   if(q7attempts != 5){
   q7 = prompt('try again')
   q7attempts++
   }
   if(q7attempts == 5){
      alert('answers were (bojack horseman, avatar the Last Airbender, how I met your mother, the walking dead, the Umbrella Academy, the Witcher, the queens gambit, the good place, stranger things, lucifer)')

   }
}

alert('your finale score is ' + scorePoint+"/7")
