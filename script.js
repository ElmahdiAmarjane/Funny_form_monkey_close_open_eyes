let video = document.querySelector(".video");
let password=document.querySelector('.password');
let checkbox=document.querySelector("#checkbox");

password.addEventListener('keyup' , ()=>{

   if(password.value==""){
    video.innerHTML=` <img width="200px" height="200px" src="images/monkey-face.png"> `
}
  else{
        
   video.innerHTML=` <img width="200px" height="200px" src="images/monkey_close_1.png"> `
    }

    
})
checkbox.onclick= function toggleshowpassword(){
    if(password.type=="password"){
        password.type="text";
        video.innerHTML=` <img width="200px" height="200px" src="images/monkey-face.png"> `
    }
    else{
        password.type="password";
        video.innerHTML=` <img width="200px" height="200px" src="images/monkey_close_1.png"> `
    }
    
}
