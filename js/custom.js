// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Validates the contact form and submits it using Formspree.
$.validator.setDefaults({
    highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },
    errorElement: 'span',
    errorClass: 'help-block',
    errorPlacement: function(error, element) {
        if(element.parent('.input-group').length) {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    }
});

$("#contact-form").validate({
  submitHandler: function(form) {
    $.ajax({
      url: "//formspree.io/austin.zentz@gmail.com", 
      method: "POST",
      data: {
        name: $(form).find("input[name='name']").val(),
        _replyto: $(form).find("input[name='_replyto']").val(),
        message: $(form).find("textarea[name='message']").val()
      },
      dataType: "json",
      success: function() {
        $("#submit-success").fadeIn();
        $("#contact-form").fadeOut();
      },
      error: function() {
        $("#submit-errors").fadeIn();        
      }
    });
  }
});

// Lazy load modal images
// from http://bulkan-evcimen.com/lazy_load_bootstrap_carousel_images.html
$('div.modal').on('shown.bs.modal', function(e){
  var carousel = $(this).find('.carousel').hide();
  var loading = $(this).find('.loading');
  var deferreds = [];
  var imgs = $('.carousel', this).find('img');
  // loop over each img    console.log("images");
  imgs.each(function(){
    var self = $(this);
    var datasrc = self.attr('data-src');
      if (datasrc) {
        var d = $.Deferred();
        self.one('load', d.resolve)
          .attr("src", datasrc)
          .attr('data-src', '');
        deferreds.push(d.promise());
      }
  });
  $.when.apply($, deferreds).done(function(){
    carousel.fadeIn(1000);
    loading.hide();
  });
  
});