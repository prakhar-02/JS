let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 19;

if(early && age>18){
    raceNumber+=1000;
}

if(early && age>18){
    console.log(raceNumber+" will race at 09:30 am");
}

else if(!early && age>18){
    console.log(raceNumber+" will race at 11:00 am");
}

if(age<18){
    console.log(raceNumber+" will race at 12:30 pm");
}

if(age == 18){
    console.log(raceNumber+" see the registration desk");
}