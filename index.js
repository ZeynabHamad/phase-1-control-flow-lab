function scuberGreetingForFeet(z){

  if(z <= 400){
    return 'This one is on me!';
  }
  else if(z >400 && z <2000){
    return 'That will be twenty bucks.';
  }
  else if(z > 2000 && z <2500){
    return 'I will gladly take your thirty bucks.';
  }
  else{
    return 'No can do.';
  }

}
// -------------------------------------------------


function ternaryCheckCity(city){

  if(city == "NYC"){
    return 'Ok, sounds good.';
  }
  else{
    return 'No go.';
  }

}
// -------------------------------------------------


function switchOnCharmFromTip(a){

  if(a =="generous"){
    return 'Thank you so much.';
  }
  else if(a =="not as generous"){
    return 'Thank you.';
  }
  else{
    return 'Bye.';
  }





}