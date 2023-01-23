  function emailValidation() {
    const form = document.getElementById('form');
    const emailComfirmField = document.getElementById('email_confirm');
    const email = document.getElementById('email');
    const element = document.createElement('p');
    const message = document.createTextNode("Eメールが一致しません");
    const contentField = document.getElementById('content_field');
    form.addEventListener('input', e => {
        if(form.email.value !== form.email_confirm.value) {
          if (!document.getElementById('alert')){
            contentField.parentNode.insertBefore(element, contentField);
            element.appendChild(message);
            element.classList.add("alert_color");
            emailComfirmField.classList.add("alert_bg");
          }    
      } else {
        emailComfirmField.classList.remove("alert_bg");
        element.parentNode.removeChild(element);
      }
    });
  };
  
  window.onload = function() {
    emailValidation();
  };
  
