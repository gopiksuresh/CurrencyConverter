function check(){
    var a,b,c,result;
    b=Number(document.getElementById("selec").value);
    c=Number(document.getElementById("selec2").value);
    a=Number(document.getElementById("a").value);
    if(b==c)
    {
      alert("You have entered Two Same country: Please try again!!!");
    }
    else
    {
    switch (b)
    {
    
   
     case 1:
     {
      if(b==1 && c==2)
      {
       result=83.70*a;
      }
     
      else if(b==1 && c==3)
      {
       result=112.11*a;
      }
      else if(b==1 && c==4)
      {
       result=0.85*a;
      }
      else if(b==1 && c==5)
      {
       result=0.85*a;
      }
      break;
     }
    
     case 2:
     {
      if(b==2 && c==1)
      {
       result=0.01*a;
      }
      else if(b==2 && c==3)
      {
       result=0.78*a;
      }
      else if(b==2 && c==4)
      {
       result=1.34*a;
      }
      else if(b==2 && c==5)
      {
       result=0.01*a;
      }
      break;
     }
    
     case 3:
     {
      if(b==3 && c==1)
      {
       result=0.02*a;
      }
      else if(b==3 && c==2)
      {
       result=1.29*a;
      }
      else if(b==3 && c==4)
      {
       result=1.73*a;
      }
      else if(b==3 && c==5)
      {
       result=0.01*a;
      }
      break;
     }
    
     case 4:
     {
      if(b==4 && c==1)
      {
       result=0.01*a;
      }
      else if(b==4 && c==2)
      {
       result=0.75*a;
      }
      else if(b==4 && c==3)
      {
       result=0.58*a;
      } 
      else if(b==4 && c==5)
      {
       result=0.01*a;
      }
      break;
     }
   
     case 5:
     {
      if(b==5 && c==1)
      {
       result=1.18*a;
      }
      else if(b==5 && c==2)
      {
       result=98.69*a;
      }
      else if(b==5 && c==3)
      {
       result=76.57*a;
      }
      else if(b==5 && c==4)
      {
       result=132.20*a;
      }
      break;
     }

 
    } 
    }
    document.getElementById("answer").value=result;
    }
