//Functional Logic 
function conversion(n){
  const n=33
  const numberArr= [ ...Array (n+1).keys()].slice (0);   
  var numberString =numberArr.toString(); 
  var newNumberString = numberString
    .replace (13, "Won't you be my neighbor")
    .replace(32, "Won't you be my neighbor?")
    .replace (21, "Boop")
    .replace (/1/g, " Beep ")
    .replace(/2/g, "Boop ")
    .replace (/3/g, "Won't you be my neighbor?")
  console.log(newNumberString); 
}

//   Business Logic 

 $(document).ready(function(){
 $("#form_survey").submit(function(event){
   event.preventDefault();
   let  n = ("#input").val ()
   $("#conversion").text(convert(n));
   $("#conversion").show();
  });
});
