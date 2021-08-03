"use strict";

let userName = prompt("what is your name ??")

let scorePoint = 0;

//console.log('Hi ' + userName + " welcome to my website can you guess these right bout me :O")
alert('Hi ' + userName + " welcome to my website can you guess these right bout me :O")
let q1 = prompt("are dogs my favorite pets").toLowerCase()

console.log(q1)

switch (q1)
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


let q2 = prompt("do you think I like movies ??").toLowerCase()

console.log(q2)

switch (q2)
{
   case "y":
   case "yes":
    //console.log('I think we can be friends');
    alert('I think we can be friends');
    scorePoint++;
       break;
    case"n":
    case"no":
    //console.log('Nope no no no, ' + userName + ' you can do better');
    alert('Nope no no no, ' + userName + ' you can do better');
       break;
   default: 
   //console.log('come on man...');
   alert('come on man...');
   break;
}

let q3 = prompt("Do you think I play league of legends ??").toLowerCase()

console.log(q3)

switch (q3)
{
   case "y":
   case "yes":
    //console.log('I do but not as much as I used to');
    alert('I do but not as much as I used to');
    scorePoint++;
       break;
    case"n":
    case"no":
    //console.log('wrong, I do play');
    alert('wrong, I do play');
       break;
   default: 
   // console.log('you\'r input is incorrect try using y / n..')
   alert;('you\'r input is incorrect try using y / n..')
   break;
}

let q4 = prompt("do you think I workout ??").toLowerCase()

console.log(q4)

switch (q4)
{
   case "y":
   case "yes":
    //console.log('true been hitting the gym been tryin to lose quarantine weight');
    alert('true been hitting the gym tryin to lose quarantine weight');
    scorePoint++;
       break;
    case"n":
    case"no":
    //console.log('nope wish I had healthier eating habits');
    alert('nope wish I had healthier eating habits');
       break;
   default: 
   //console.log('I give up....');
   alert('I give up....');
   break;
}

let q5 = prompt("is shawarma my favorite food ??").toLowerCase()

console.log(q5)

switch (q5)
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
         //console.log('that\'s correct')
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
      //console.log('answers were (bojack horseman, avatar the Last Airbender, how I met your mother, the walking dead, the Umbrella Academy, the Witcher, the queens gambit, the good place, stranger things, lucifer)')
      alert('answers were (bojack horseman, avatar the Last Airbender, how I met your mother, the walking dead, the Umbrella Academy, the Witcher, the queens gambit, the good place, stranger things, lucifer)')

   }
}

alert('your finale score is ' + scorePoint+"/7")