---
layout: post
title: "'Contact Me' Forms in Static Sites"
draft: false
---
In my [first post]({% post_url 2015-06-22-building-with-jekyll %}) on this blog, I talked about all the reasons that a static site can be useful for a portfolio site. Still, there's one glaring deficiency out of the box: without a database, it's difficult for visitors to leave a note or get in touch with you. This post outlines the steps I took to fill that deficiency using [Formspree](http://formspree.io), the [jQuery Validation plugin](http://jqueryvalidation.org/) and some basic javascript.

Here were my requirements:

1. Receive notes from visitors
2. Include some basic form validation
3. Accept the form without reloading the page

It turns out that it's really easy to get data from visitors on a static site, thanks to at least a few providers:

* [FormKeep](https://formkeep.com/), designed by the very awesome [thoughtbot](https://thoughtbot.com/) team, gives you a quick method to accept forms, and an interface to review responses. However, it's $7+ per month, which is more than I was looking to spend ($0.)
* On the low-tech side, you can actually just embed a Google form in any website using an iFrame, but custom styling is impossible.
* [Formspree](http://formspree.io) functions similarly to FormKeep, but it just sends responses straight to your email address. It's free for up to 1,000 responses each month. (To date, I have received 0 responses from people other than me.) Sounds like the tool for the job.

#### A Basic Formspree Contact Form
It's impressively easy to get a basic form up and running. Here's the demo straight from the Formspree homepage:

{% highlight html %}
<form action="//formspree.io/your@email.com" method="POST">
  <input type="text" name="name">
  <input type="email" name="_replyto">
  <input type="submit" value="Send">
</form>
{% endhighlight %}

What's really cool is that Firefox and Chrome will validate these forms based on their type, and you can type "required" (without the quotes) in the input fields for those browsers to require the data as well. Unfortunately, not all users will be on the same browsers so you can't count on this validation. By default, when a user submits this form Formspree redirects them to a thank you page, but it's easy to override that by including a hidden input field named _next:

{% highlight html %}
<form action="..." method="POST">
  <input type="hidden" name="_next" value="http://mysite.com/#contact" />
...
{% endhighlight %}

So, my first requirement is met, and my second requirement is halfway met, thanks to built-in browser validation. Still, some users are going to be confused when I redirect them back to the same form page, and I don't want to interrupt the flow by sending them to some "thanks for submitting" page. More important for now, I need to make sure validation works on all browsers.

#### Validating on the Front-End
Validation turns out to be easy, too, thanks to the [jQuery Validation](http://jqueryvalidation.org/) extension. Grab the extension and call it after calling jQuery,or just use a CDN like I did:

{% highlight html %}
<!-- Near the end of my page -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.13.1/jquery.validate.min.js"></script>
{% endhighlight %}

Like the built-in validation on Chrome and Firefox, jQuery Validation picks up on field types and the 'required' tab, and flags those errors. Below are the final inputs and validations for my form (with some Bootstrap-specific formatting removed:)

{% highlight html %}
<form id="contact-form">
  <label for="name">Name</label>
  <input class="form-control" type="text" name="name" required
         placeholder="Name">
         
  <label for="email">Email</label>
  <input class="form-control" type="email" name="_replyto"
         required placeholder="email@address.com">
         
  <label for="message">Message</label>
  <textarea class="form-control" name="message" placeholder="Message"
            required rows="5"></textarea>
</form>
{% endhighlight %}

Wherever you keep your custom javascript, you can get things up and running with a one-liner:

{% highlight javascript %}
$("#contact-form").validate();
{% endhighlight %}

Of course, my form isn't going anywhere, but the validation works, so I'm two for three on requirements. Onward to submitting the actual data without resetting the page!

#### Submitting with AJAX

The validate function can be built with several options, including a `SubmitHandler`. We can add a few lines of Javascript inside the SubmitHandler to send our form data to Formspree and handle successful or failed requests. SubmitHandler can pass along the form itself as a function, so we can grab the data from each of the inputs using jQuery:

{% highlight javascript %}
$("#contact-form").validate({
  submitHandler: function(form) {
    $.ajax({
      url: "//formspree.io/myemail@gmail.com", 
      method: "POST",
      data: {
        name: $(form).find("input[name='name']").val(),
        _replyto: $(form).find("input[name='_replyto']").val(),
        message: $(form).find("textarea[name='message']").val()
      },
      dataType: "json"
    });
  }
});
{% endhighlight %}

While our form now sends, the page doesn't change, so our users aren't going to think the form works at all. Let's fix that.

First, we'll add a couple of divs to our page which are hidden by default, that will show appropriate messages after the form has been submitted: (Mine use Bootstrap's alert components, but I've stripped that formatting in the interest of brevity.)

{% highlight html %}
<!-- Hidden message to show if contact is successful. -->
<div id="submit-success" class="collapse">
  Message received! I'll be in touch.
</div>

<!-- Hidden message to show if user encounters errors. -->
<div id="submit-errors" class="collapse">
  It looks like there was an error submitting the form.
  Please try again later.
</div>
{% endhighlight %}

Next, we'll add success and error handlers to our Ajax request. If I succeed, I'll fade out the form and fade in the success message. If the request fails, I'll display an error.

{% highlight javascript %}
$("#contact-form").validate({
  submitHandler: function(form) {
    $.ajax({
      ...
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
{% endhighlight %}

#### Wrap-Up
So, that's it. Formspree is a great tool, validation is easy with plugins, and sending AJAX requests means I can have a user submit the form without sending them to a new page. Great! Want to see it in action? Check out my [Contact]({{ baseurl }}/#contact) form, and feel free to send me a note.
