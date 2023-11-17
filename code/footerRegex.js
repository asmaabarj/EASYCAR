
        document.getElementById("email-address-icon").addEventListener('input',function(){
const emailF =document.getElementById("email-address-icon").value;
const emailFooter=document.getElementById('email-address-icon');
const regemailF= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
emailFooter.classList.remove('border-gray-700', 'border-red-700', 'border-green-700');
if (!regemailF.test(emailF)) {
  emailFooter.classList.add('border-red-700');
}else{
  emailFooter.classList.add('border-green-700');
}});
    