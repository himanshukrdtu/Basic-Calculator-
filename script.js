let string="";
let cal="";
var input=document.getElementById('input');
 
var button=document.getElementsByClassName('button');

 

 function fun(){
        if(this.innerHTML=="="){
           var sum= eval(cal);
             string=sum; 
             string+="";
             cal=sum;
             input.innerText=string;

        }
        else if(this.innerHTML=="DE"){
            // string = string.slice(0,-1);
            var len=string.length;
            if(len>0){
                    var temp1=string.substring(0,len-1);
                     string=temp1;
                     cal=temp1;
                     var temp2=cal.replace('%','/100*');
                     cal=temp2;
                     
                    
                //     if(string[len-1]=='%'){
                //     cal=cal.substring(0,string.length-5);
                //      }
                //    else{
                //    cal=cal.substring(0,string.length-1);
                //   }
            }

               input.innerText=string;

        }
       else if(this.innerHTML=="%" ){
            string+=this.innerHTML;
            input.innerText=string;
            cal+="/"+"100"+"*";
        }
        else if(this.innerHTML=="AC" ){
            string="";
            cal="";
            input.innerText=string;
        }
       else{
        string+=this.innerHTML;
        cal+=this.innerHTML;
        input.innerText=string;
       }
}
 
 for(var i=0;i<button.length;i++){
button[i].addEventListener('click',fun);
}
 













