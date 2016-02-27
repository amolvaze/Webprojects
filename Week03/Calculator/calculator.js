// Author:- Code developed by Amol Vaze (asv130130@utdallas.edu)
function c(val)
{
    document.getElementById("d").value=val;
}
function Oper(val)
{
    document.getElementById("d").value+=val;
}
function e() 
{ 
    try 
    { 
      c(eval(document.getElementById("d").value)) 
    } 
    catch(e) 
    {
      c('Error') 
    } 
}
