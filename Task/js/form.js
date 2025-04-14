let emailInp=document.getElementById('email'),
    passwordInp=document.getElementById('password'),
    remeberMe=document.getElementById('checkbox'),
    submitBtn=document.getElementById('submit');


emailInp.value=localStorage.getItem('email');
passwordInp.value=localStorage.getItem('password');
remeberMe.checked=localStorage.getItem('checkbox');

submitBtn.addEventListener('click',()=>{
    if(remeberMe.checked){
        localStorage.setItem("email",emailInp.value)
        localStorage.setItem("password",passwordInp.value)
        localStorage.setItem("checkbox",true)
    }
    else{
        localStorage.removeItem("email")
        localStorage.removeItem("password")
        localStorage.removeItem("checkbox")
    }
})
