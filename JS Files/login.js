


let imageEye=document.getElementById("passEye");
let inputPassword=document.getElementById("inputPassword");
let eyeToggle=true;

imageEye.addEventListener("click", ()=>{

   if(eyeToggle){
    imageEye.src="/images/hidden.png";
    inputPassword.type="input";
    eyeToggle=false;
   }else{
    imageEye.src="/images/eyewhite.png";
    inputPassword.type="password";
    eyeToggle=true;
   }

})

