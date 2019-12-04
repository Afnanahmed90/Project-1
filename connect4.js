window.onload = function(){
$(document).ready(function(){  
          var turn = 0;
          let ar1=[13,9,5,1]
     
         $('.c1').on('click', function (event) { 
             if (turn==0)
       {  
           
               
          
        $("#c"+ar1[0]).addClass("yellow");
           ar1.shift()
          turn=1;
        check();
       }
             
            else if  (turn == 1)
               { $("#c"+ar1[0]).addClass("red");
               ar1.shift()
                turn=0;
             check();
                
               }
       
     });
     let ar2=[14,10,6,2]
     
         $('.c2').on('click', function (event) { 
            console.log(ar2)
             if (turn==0)
       {  
           
               
          
        $("#c"+ar2[0]).addClass("yellow");
           console.log(this)
           ar2.shift()
          turn=1;
                   check();

       }
             
            else if  (turn == 1)
               { $("#c"+ar2[0]).addClass("red");
               ar2.shift()
                turn=0;
                        check();

                
               }
       
     });
    
       let ar3=[15,11,7,3]
     
         $('.c3').on('click', function (event) { 
            console.log(ar3)
             if (turn==0)
       {  
           
               
          
        $("#c"+ar3[0]).addClass("yellow");
           console.log(this)
           ar3.shift()
          turn=1;
                   check();

       }
             
            else if  (turn == 1)
               { $("#c"+ar3[0]).addClass("red");
               ar3.shift()
                turn=0;
                        check();

                
               }
       
     });
    
       let ar4=[16,12,8,4]
     
         $('.c4').on('click', function (event) { 
            console.log(ar4)
             if (turn==0)
       {  
           
               
          
        $("#c"+ar4[0]).addClass("yellow");
           console.log(this)
           ar4.shift()
          turn=1;
                   check();

       }
             
            else if  (turn == 1)
               { $("#c"+ar4[0]).addClass("red");
               ar4.shift()
                turn=0;
                        check();

                
               }
       
     });
        });

let check =  function()
{
            
    for (i=1 ; i<=4 ; i++)
        {
            
        //col
            if ($("#c"+i).hasClass("yellow") && 
                $("#c" + (i+4)).hasClass("yellow") && 
                $("#c" + (i+8)).hasClass("yellow") &&
                $("#c" + (i+12)).hasClass("yellow")){
                
             alert ("Player 1 wins")  
                $(".four").off("click");
            }
       
                 
            
             if ($("#c"+i).hasClass("red") && 
                $("#c" + (i+4)).hasClass("red") && 
                $("#c" + (i+8)).hasClass("red") &&
                $("#c" + (i+12)).hasClass("red")){
                 
                 alert (" Player 2 wins")
                 $(".four").off("click");
                }
                
                
            
            //row 
           
            
     
        }   
    
    
     for(let j = 1; j<=13; j=j+4){
                if ($("#c"+j).hasClass("red") && 
                $("#c" + (j+1)).hasClass("red") && 
                $("#c" + (j+2)).hasClass("red") &&
                $("#c" + (j+3)).hasClass("red")){
                
                       alert (" Player2 wins")
                    $(".four").off("click");
                }
              

         
         if ($("#c"+j).hasClass("yellow") && 
                $("#c" + (j+1)).hasClass("yellow") && 
                $("#c" + (j+2)).hasClass("yellow") &&
                $("#c" + (j+3)).hasClass("yellow")){
                alert (" Player 1 wins")
             $(".four").off("click");
         }
                

            }
    
    
    //X
    
    //for(let j = 1; j<=16; j=j+4){
        
    if ($("#c1").hasClass("yellow") && 
                $("#c6" ).hasClass("yellow") && 
                $("#c11").hasClass("yellow") &&
                $("#c16" ).hasClass("yellow")){
        
                alert (" Player 1 wins")
        $(".four").off("click");
         }
    
    
    if ($("#c1").hasClass("red") && 
                $("#c6" ).hasClass("red") && 
                $("#c11").hasClass("red") &&
                $("#c16" ).hasClass("red")){
        
                alert (" Player 2 wins")
        $(".four").off("click");
         }
    
    //X2
    
    if ($("#c4").hasClass("yellow") && 
                $("#c7" ).hasClass("yellow") && 
                $("#c10").hasClass("yellow") &&
                $("#c13" ).hasClass("yellow")){
        
                alert (" Player 1 wins")
        $(".four").off("click");
    
         }
    
    if ($("#c4").hasClass("red") && 
                $("#c7" ).hasClass("red") && 
                $("#c10").hasClass("red") &&
                $("#c13" ).hasClass("red")){
        
                alert (" Player 2 wins")
        $(".four").off("click");
         }
    
    
   
    
    
    
   else if ($(".four").not(".yellow").length==8 && $(".four").not(".yellow").length==8){
            
       alert("It’s a tie")
       $(".four").off("click");
    
    
   }
    
    
    
//    if ($("#c"+j).hasClass("red") && 
//                $("#c" + (j+5)).hasClass("red") && 
//                $("#c" + (j+10)).hasClass("red") &&
//                $("#c" + (j+15)).hasClass("red")){
//
//        alert (" red wins")
//         }
//    
//    
//        if ($("#c"+(j+3).hasClass("red") && 
//                $("#c" + (j+6)).hasClass("red") && 
//                $("#c" + (j+9)).hasClass("red") &&
//                $("#c" + (j+12)).hasClass("red")){
//                alert (" red wins")
//         }
//}
    
    
    
//    //x2
//    
//    if ($("#c"+j).hasClass("red") && 
//                $("#c" + (j+6)).hasClass("red") && 
//                $("#c" + (j+9)).hasClass("red") &&
//                $("#c" + (j+12)).hasClass("red")){
//                alert (" red wins")
//         }
//    
    
    
    
}
}