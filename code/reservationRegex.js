// Regex Prenom
document.getElementById('floating_first_name').addEventListener('input', function() {
    const prenomValue = this.value;
    const prenomstyle = this;
    const regexprenom = /^[A-Za-z]+$/;
  
    prenomstyle.classList.remove('border-gray-300', 'border-red-300', 'border-green-300');
  
    if (!regexprenom.test(prenomValue)) {
      prenomstyle.classList.add('border-red-300');
      showError('errorMessage');
    } else {
      prenomstyle.classList.add('border-green-300');
      hideError('errorMessage');
    }
  });
  // Regex nom
  document.getElementById('floating_last_name').addEventListener('input', function() {
    const nomValue = this.value;
    const nomstyle = this;
    const regexnom = /^[A-Za-z]+$/;
  
    nomstyle.classList.remove('border-gray-300', 'border-red-300', 'border-green-300');
  
    if (!regexnom.test(nomValue)) {
      nomstyle.classList.add('border-red-300');
      showError('errormessage2');
    } else {
      nomstyle.classList.add('border-green-300');
      hideError('errormessage2');
    }
  });

   // Regex Email
   document.getElementById('floating_repeat_email').addEventListener('input', function() {
    const nomValue = this.value;
    const nomstyle = this;
    const regexnom = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
  
    nomstyle.classList.remove('border-gray-300', 'border-red-300', 'border-green-300');
  
    if (!regexnom.test(nomValue)) {
      nomstyle.classList.add('border-red-300');
      showError('errormessage3');
    } else {
      nomstyle.classList.add('border-green-300');
      hideError('errormessage3');
    }
  });
// email2

  document.getElementById('floating_repeat_email2').addEventListener('input', function() {
    const nomValue = this.value;
    const nomstyle = this;
    const regexnom = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
  
    nomstyle.classList.remove('border-gray-300', 'border-red-300', 'border-green-300');
  
    if (!regexnom.test(nomValue)) {
      nomstyle.classList.add('border-red-300');
      showError('errormessage5');
    } else {
      nomstyle.classList.add('border-green-300');
      hideError('errormessage5');
    }
  });

// Regex telephone
  document.getElementById('floating_phone').addEventListener('input', function() {
    const nomValue = this.value;
    const nomstyle = this;
    const regexnom = /^(06|07)\d{8}$/;
  
    nomstyle.classList.remove('border-gray-300', 'border-red-300', 'border-green-300');
  
    if (!regexnom.test(nomValue)) {
      nomstyle.classList.add('border-red-300');
      showError('errormessage4');
    } else {
      nomstyle.classList.add('border-green-300');
      hideError('errormessage4');
    }
  });


//   invalide messages
  function showError(errorId) {
    const errorElement = document.getElementById(errorId);
    errorElement.classList.remove('hidden');
    errorElement.classList.add('block');

  }
  
  function hideError(errorId) {
    const errorElement = document.getElementById(errorId);
    errorElement.classList.add('hidden');
  }