 //  Scripts for CONTACT US  form submission
 //validation scripts
 const contactFormRules = {
    
    firstName: {
      required: true,
      lettersonly: true,
    },
    lastName: {
      required: true,
    },
    email: {
      required: true,
      customEmail: true,
    },
    queryType: {
      required: true,
    },
    message: {
      required: true,
      lettersonly: true,
    },
  };

  const contactFormMessages = {
    firstName: {
      required: 'Please enter your First Name',
    },
    
    message: {
      required: 'Please enter your Message',
    },
    lastName: {
      required: 'Please enter your Last Name',
    },
    email: {
      required: 'Please enter your Email Address',
    },
  };

  jQuery.validator.addMethod(
    'lettersonly',
    function (value, element) {
      return this.optional(element) || /^[a-z\s]+$/i.test(value);
    },
    'Letters only please!'
  );

  jQuery.validator.addMethod(
    'customEmail',
    function (value, element) {
      return (
        this.optional(element) ||
        /^[_a-z0-9-]+(.[_a-z0-9-\\+]+)@[a-z0-9-]+(.[a-z0-9-]+)(.[a-z]{2,3})$/i.test(
          value
        )
      );
    },
    'Please enter valid email address!'
  );

  // Apply validation to contact us form
  applyValidation(
    '#contact-us-email-form',
    contactFormRules,
    contactFormMessages
  );

  // Apply submit to contact us form
  handleFormSubmission({
    formSelector: '#contact-us-email-form',
    submitBtnSelector: '#submitBtnDapp',
    optionalFields: [],
    onSuccess: customSuccessHandler,
    onError: customErrorHandler,
  });

  $('#contact-us-close-image').on('click', function () {
    resetForm('#contact-us-email-form');
  });

 
