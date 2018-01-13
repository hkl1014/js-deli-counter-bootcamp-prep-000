
function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  let string = "Welcome, "+ name +". You are number "+ katzDeliLine.length +" in line."
  return string
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length>0){
    katzDeliLine.splice(0,1);
  }
  else{return "There is nobody waiting to be served!"}
}
