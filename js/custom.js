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