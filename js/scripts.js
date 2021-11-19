//Functional Logic 
function conversion(n){
  const n=33
  const numberArr= [ ...Array (n+1).keys()].slice (0);   
    if (n [i]===13 || n ===32) {
      console.log ( "Boop")
    }else {
    
    }
  

  if (n===13){
    return "Boop"
  }else { 
    console.log (numberArr); 


  let newNumberArr =[];
  for (var i=0; numberArr.length ; i ++){
    if (n [i]===13 || n[i] === 32 ){ 
      return "Won't you be my neighbor?"
      newNumberArr.push(n [i])
    }else if (n===21 ) {
        return "Boop"
    } else { 
      let number1= (numberArr.toString().replace(/1/g, " Beep "));
      let number2= (number1.toString().replace(/2/g, " Boop "));
      let number3= (number2.toString().replace(/3/g, " Won't you be my neighbor "));
      console.log (number3);
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
