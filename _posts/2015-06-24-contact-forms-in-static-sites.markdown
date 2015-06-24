---
layout: post
title: "'Contact Me' Forms in Static Sites"
draft: true
---
In my [first post]({% post_url 2015-06-22-building-with-jekyll %}) on this blog, I talked about all the reasons that a static site can be useful for a portfolio site. That said, there's one glaring deficiency out of the box: without a database, it's difficult for visitors to leave a note or get in touch with you. This post outlines the steps I took to fill that deficiency using [Formspree](http://formspree.io), a [jQuery plugin](http://jqueryvalidation.org/) and some basic javascript.

Here were my requirements:

1. Receive notes from visitors
2. Include some basic form validation
3. Accept the form without reloading the page

It turns out that it's really easy to get data from visitors on a static site, thanks to at least a few providers:

* [FormKeep](https://formkeep.com/), designed by the very awesome [thoughtbot](https://thoughtbot.com/) team, gives you an interface to review responses. However, it's $7+ per month, which is more than I was looking to spend ($0.)
* On the low-tech side, you can actually just embed a Google form in any website using an iFrame, but custom styling is impossible.
* [Formspree](http://formspree.io) seems to function similarly to FormKeep, but it just sends responses straight to your email address. It's free for up to 1,000 responses each month. This is the option I went with!

#### A Basic Formspree Contact Form
It's impressively easy to get a basic form up and running. Here's the demo straight from the Formspree homepage:

{% highlight html %}
<form action="//formspree.io/your@email.com" method="POST">
  <input type="text" name="name">
  <input type="email" name="_replyto">
  <input type="submit" value="Send">
</form>
{% endhighlight %}

What's really cool is that Firefox and Chrome will validate these forms based on their type, and you can type "required" (without the quotes) into the inputs for those browsers to require the data as well. Unfortunately, not all users will be on the same browsers so you can't count on this validation. By default, the next page is a Formspree-created thank-you, but it's easy to override that redirect, too:

{% highlight html %}
<form action="..." method="POST">
  <input type="hidden" name="_next" value="http://mysite.com/#contact" />
...
{% endhighlight %}

So, my first requirement is met, and my second requirement is, kind of, but I'm going to want to be more consistent.

#### Validating on the Front-End
First, two notes:

1. I'm validating with jQuery and an extension - this is the easiest option for me, and though jQuery is derided on some corners of the internet, I think it's best to use an established extension with edge-cases than roll my own single-use validation tool.
2. Front-end validation doesn't excuse the need to validate on the back-end. This isn't so relevant here, but a jQuery-validated site could easily be compromised by a user with the [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) chrome extension, or command line tools, installed.

OK. So, validation turned out to be easy, too, thanks to the [jQuery Validation](http://jqueryvalidation.org/) extension. Grab the extension and call it after calling jQuery,or just use a CDN like I did:

{% highlight html %}
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.13.1/jquery.validate.min.js"></script>
{% endhighlight %}

