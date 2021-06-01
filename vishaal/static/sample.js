// Quiz app

topHeader = document.querySelector('.topHeader')
qNumbers = document.querySelectorAll('.qNumber')
answers =document.getElementsByName('answers')

// create questions array and push into "qNums"  
var qNums =[]
qNumbers.forEach(qNumbers => {                                  
  qNums.push( qNumbers.innerHTML)                               
});
  
//Assign questions array length to "totalQns"
var totalQns
totalQns = qNums.length 

//Create answer array and push into "answerKeys"
var answerKeys = []
answers.forEach(answers => {                                     
  answerKeys.push( answers.innerHTML)                                
});


let j=0                                                    
let score =0
var userAnswer
function verifyAnswer(){                                             

  let optionValue = document.getElementsByName('radioBtn') 
//Assigns checked radio button value to "userAnswer"  
  for( i=0;i<optionValue.length;i++){
     if(optionValue[i].checked){
          userAnswer = optionValue[i].value                              
        }
     }
  
//Comapres userAnswer with current value in answerkey                                     
  if(userAnswer==answerKeys[j]){                              
    window.alert ("Correct")
    score=score+1     
    console.log(j)    
  }                                 
  else{
    window.alert( "Incorrect")
  }

//Checks if the last question is reached(j updates itself with each 'verifyAnswer' click)
  if(j >=totalQns-1){                                                       
    if(score>=(totalQns/2))
        window.alert('"You passed with score "'+score)               
    else 
        window.alert('"Your Score is" '+ score +'\n"Better Luck Next Time"\n"Try other topics"')
  }
  
// Clears userAnswer value i.e checked optionValue  
  userAnswer=""                                                                 
  j=j+1                      

// Scroll function activated by 'verifyAnswer' click
 window.scrollBy({
       top:0,                                                           
       left:window.innerWidth,
       behavior:'smooth'
       })

 topHeader.style = "transform:translateX(100vw);" 
}



 

 
  
   

   
    
   
  











  

