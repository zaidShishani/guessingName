"use strict";

let userName = prompt("what is your name ??")

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
       break;
    case"n":
    case"no":
    //console.log('wrong, I do play');
    alert('wrong, I do play');
       break;
   default: 
    //console.log('you\'r input is incorrect try using y / n..')
   alert;('you\'r input is incorrect try using y / n..')
   break;
}

let q4 = prompt("do you workout ??").toLowerCase()

console.log(q4)

switch (q4)
{
   case "y":
   case "yes":
    //console.log('that\'s great been hitting the gym myself');
    alert('that\'s great been hitting the gym myself');
       break;
    case"n":
    case"no":
    //console.log('hope you at least have health eating habits');
    alert('hope you at least have health eating habits');
       break;
   default: 
   //console.log('I give up....');
   alert('I give up....');
   break;
}

let q5 = prompt("are we friends now ??").toLowerCase()

console.log(q5)

switch (q5)
{
   case "y":
   case "yes":
    //console.log('ayyyyyy lesgooo!!');
    alert('ayyyyyy lesgooo!!');
       break;
    case"n":
    case"no":
    //console.log('another day another struggle :(');
    alert('another day another struggle :(');
       break;
   default: 
   //console.log('......why....?');
   alert('......why....?');
   break;
}