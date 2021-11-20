//Functional Logic 
function conversion(n){
  const numberArr= [...Array (n+1).keys()].slice (0);   
  var numberString =numberArr.toString(); 
  var newNumberString = numberString
    .replace (13, "Won't you be my neighbor")
    .replace(32, "Won't you be my neighbor?")
    .replace (21, "Boop")
    .replace (/1/g, " Beep ")
    .replace(/2/g, "Boop ")
    .replace (/3/g, "Won't you be my neighbor?")

  return (newNumberString); 
}

//   Business Logic 

 $(document).ready(function(){
 $("#form-group").submit(function(event){
   event.preventDefault();
  let  n = $("#input").val (); 
    console.log (n);

    newNumberString .sort(); 
   newNumberString.forEach (function(element){
    $("#output").text(convert(n));
    $("form#item-form").addClass("hidden");
   })
   $("#output").show();
  });
});





    
  
