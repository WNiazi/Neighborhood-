//Functional Logic 
function conversion(n){
  const n=32
  const numberArr= [ ...Array (n+1).keys()].slice (0);   
  console.log (numberArr);

  for (var i=0; numberArr.length ; i ++){
    if (n===13 || n ===32){
      console.log ("Won't you be my neighbor?")
    } else if (n===21 ) {
      console.log ( "Boop")
    } else { 
    let number1= (numberArr.toString().replace(/1/g, " Beep "));
    let number2= (number1.toString().replace(/2/g, " Boop "));
    let number3= (number2.toString().replace(/3/g, " Won't you be my neighbor "));
    console.log (number3);
  }

}

//   Business Logic 

// $(document).ready(function(){
//   $("#form_survey").submit(function(event){
//     event.preventDefault();
       let  n = ("#input").val ()
//     $("#conversion").text(convert(input));
//     $("#conversion").show();
//   });
// });
