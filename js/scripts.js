//Functional Logic 
function conversion(){
  const number =4; 
  const n =parseInt(number);
  const numberArr= [...Array (n+1).keys()].slice (0);   
  console.log (numberArr); 
  var numberString =numberArr.toString(); 
  var newNumberString = numberString
    .replace (13, "Won't you be my neighbor")
    .replace(32, "Won't you be my neighbor?")
    .replace (21, "Boop")
    .replace (/1/g, " Beep ")
    .replace(/2/g, "Boop ")
    .replace (/3/g, "Won't you be my neighbor?")

  console.log (newNumberString); 
}

//   User Logic 

$(document).ready(function(){
 $("#formOne").submit(function(event){
   event.preventDefault();
  let number = $("input#input").val (); 

  $("#output").text(conversion(number));
  $("#output").show(); 

  //("#output").html(result)
  });
});