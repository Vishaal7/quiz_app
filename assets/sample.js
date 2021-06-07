var finalval
 var check
  var res2 = []
  var qns =[]
  var res3


 
test =document.querySelector('.test')
an = document.querySelector('.sh')
btn = document.querySelector('.sho')
result =document.getElementsByName('result')
qn_num = document.querySelectorAll('.qn_num')
topcont = document.querySelector('.topcont')
insert = document.getElementById('left')

 var total_qn

qn_num.forEach(qn_num => {
  qns.push( qn_num.innerHTML)
  
});
console.log(qns)
total_qns = qns.length


console.log(total_qns)

result.forEach(res => {
  res2.push( res.innerHTML)
});

let e=0

let count =0


function func(){
  
 console.log(res2[e])
  let op = document.getElementsByName('R') 
  for( i=0;i<op.length;i++){
    if(op[i].checked){
          res3 = op[i].value
        }
    
  }
  console.log(res3)
  if(res3==res2[e]){
    topcont.innerHTML = "corrct"
    window.alert ("Correct")
   
   
    count=count+1
    
  }
  else{window.alert( "Incorrect")
} if(e >=total_qns-1){
  if(count>=(total_qns/2)) window.alert('"You passed with score "'+count)
  else window.alert('"Better Luck next Time"\n\n"Try other topics"')
}
 
  res3=""
      /*
       if(res2[e] == op[i].value)
       console.log("correct")
       else{
       console.log("incorect")}
       }

       }*/
       
       e=e+1
       window.scrollBy({
         top:0,
         left:window.innerWidth,
         behavior:'smooth'
       })
       topcont.style = "transform:translateX(100vw);"
}



 

 
  
   

   
    
   
  











  

