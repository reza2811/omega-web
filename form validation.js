var email=document.forms['frm1']['email'];
var phone=document.forms['frm1']['phone'];
var message=document.forms['frm1']['message'];

var error_box=document.getElementsByClassName('alert')[0];
function validation(){
    if(email.value== "" || phone.value== ""){
        error_box.style.opacity=1;
        error_box.innerHTML = '<strong>خطا! </strong>';
        error_box.innerHTML += 'لطفا جاهای خالی را پر کنید!';
        return false;
    }
    var reg_email=/[a-z0-9]+\@+[a-z]+\.+[a-z]/;
    if(!reg_email.test(email.value)){
        error_box.style.opacity=1;
        error_box.innerHTML = '<strong>خطا! </strong>';
        error_box.innerHTML += 'لطفا یک ایمیل معتبر را وارد کنید!';
        return false;
    }
    var reg_phone=/[^0-9]/g;
    if(reg_phone.test(phone.value)){
        error_box.style.opacity=1;
        error_box.innerHTML = '<strong>خطا! </strong>';
        error_box.innerHTML += 'لطفا فقط اعداد را برای شماره تلفن خود وارد کنید!';
        return false;
    }
}