let ans2 ;
 const startTime=()=>{
     date = new Date() ;
     time=date.toLocaleTimeString() ;
     ans = document.getElementById('clock') ;
     ans.innerHTML = time ;
 }
 let set ;
 function func(){
   set = setInterval(startTime,100) ;
 }

 function endTime(){
    clearInterval(set) ;
 }
 







 
