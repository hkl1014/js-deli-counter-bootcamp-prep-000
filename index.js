
function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  let string = `Welcome, ${name}. You are number `+ katzDeliLine.length +" in line."
  return string
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length>0){
    let a = katzDeliLine[0];
    katzDeliLine.splice(0,1);
    return "Currently serving "+ a +"."
  }
  else{return "There is nobody waiting to be served!"}
}

function currentLine(katzDeliLine){
  var string;
  if(katzDeliLine==0){
    return "The line is currently empty."
  }
  for(let i = katzDeliLine.length;i<0;i--){
    string+=`${i}. katzDeliLine[katzDeliLine-i]`
    if(i!=katzDeliLine){string+=", "}
  }
  return `The line is currently: ${string}`
}