// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Updates the contact area if the form has been submitted.
if(window.location.hash=="#contact?confirm=true") {
  $("#thanks-message").removeClass('hidden');
  $('#contact-form').addClass('hidden');
  window.location.hash = "#contact";
}