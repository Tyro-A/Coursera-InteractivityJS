function message(msg){
  document.getElementById('output').innerHTML = msg + " Event";
}

function DisplayDate(){
  document.getElementById('Todate').innerHTML = Date();
}

 function DisplayDateInAlert(){
    alert("The current date is : " +  Date());
  }