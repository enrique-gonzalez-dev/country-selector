document.addEventListener("DOMContentLoaded", function() {
  const mainPhone = document.querySelector('#mainPhoneInput');

  if (mainPhone) {
    window.intlTelInput(mainPhone, {
      separateDialCode: true,
      hiddenInput: 'mainPhoneInput',
      initialCountry: 'MX',
      utilsScript:
        'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.js',
    });
  }
});

// Use https://github.com/jackocnr/intl-tel-input