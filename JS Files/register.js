


let imageEye=document.getElementById("passEye");
let imageEye2=document.getElementById("passEye2");
let inputPassword=document.getElementById("inputPassword");
let inputPassword2=document.getElementById("inputPassword2");
let eyeToggle=true;

imageEye.addEventListener("click", ()=>{

   if(eyeToggle){
    imageEye.src="/images/hidden.png";
    inputPassword.type="input";
    imageEye2.src="/images/hidden.png";
    inputPassword2.type="input";
    eyeToggle=false;
   }else{
    imageEye.src="/images/eyewhite.png";
    inputPassword.type="password";
    imageEye2.src="/images/eyewhite.png";
    inputPassword2.type="password";
    eyeToggle=true;
   }

})

imageEye2.addEventListener("click", ()=>{

   if(eyeToggle){
    imageEye.src="/images/hidden.png";
    inputPassword.type="input";
    imageEye2.src="/images/hidden.png";
    inputPassword2.type="input";
    eyeToggle=false;
   }else{
    imageEye.src="/images/eyewhite.png";
    inputPassword.type="password";
    imageEye2.src="/images/eyewhite.png";
    inputPassword2.type="password";
    eyeToggle=true;
   }

})

