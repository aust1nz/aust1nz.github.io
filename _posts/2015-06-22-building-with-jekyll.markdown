---
layout: post
title: Building a Portfolio Site with Jekyll
---
I took me a long time to decide how to put together this portfolio website. I build apps for the web every day, so you'd think this would be easy, but my options at work consist of the tools my workplace uses. My surplus of options made it hard to get started.

A web framework like Ruby on Rails felt like overkill for a simple, mostly static site, but I wanted to get my hands dirtier than just slapping together a Wordpress theme. I finally put this site together using [Jekyll](http://jekyllrb.com/), a static site generator built in Ruby, and thought I'd share a few reasons behind my decision.

#### Fast, easy and secure
Jekyll works by creating an organized set of files and folders on my computer (and in my [Github repo](https://github.com/aust1nz/aust1nz.github.io)) when I type `jekyll new` in a command line, and then creating a bunch of HTML and CSS files in an output directory called _site when I type `jekyll serve` . Once I've created those files, I just need to get the _site folder online somewhere, and, voila - website!

Fortunately, Github's hosting makes that last task really easy. If I follow a few naming conventions outlined in [their guide](https://pages.github.com/), Github will automatically run Jekyll whenever I push updates, and hosts the resulting files as a free service to its users. So:

Fast? I'm freeloading on Github's servers - check!

Easy? There's no server or web app architecture to understand - check.

Finally, secure? Many of the security concerns inherent in running a web application are eliminated since I don't have to worry about user-submitted data or hackers getting into my servers - definitely check.

#### Organized files beat raw HTML
You might be thinking, "if these simple sites are so useful, why not just hand-code some HTML pages?" Well, mostly because I'll probably want to change things in the future, and I can break pages down to templates and parts. For example, here's a list of files in the _inlcudes directory:

{% highlight bash %}
aust1nz@aust1nz:~/workspace (master) $ tree _includes
_includes
├── about.html
├── contact.html
├── footer.html
├── head.html
├── header.html
├── navbar.html
├── portfolio-modal.html
└── portfolio.html
{% endhighlight %}

Those are all pieces of my front page, but I can change them individually and pull them together in one or more page whenever I see fit.

If I want to change something in my navbar, I can follow [DRY](https://en.wikipedia.org/wiki/Don't_repeat_yourself) principles and just change my single navbar includes file. (I can also use style preprocessors like SCSS, which is less of a headache, even for a non-designer, than regular CSS.)

#### With Github, Jekyll is the frugal choice
Finally, it's worth mentioning that the only cost involved in my setup is the recurring fee to register the domain name. (I could have also stuck with the decently-short [http://aust1nz.github.io](http://aust1nz.github.io) if I didn't want to spring the $10 for the top-level domain.)

If I had gone with a build-it-myself option using Rails, I would have needed to setup a virtual server somewhere, or have considered the tradeoffs of a product like Heroku, which, to be fair, has a free tier. Wordpress options can also start out free, but generally require some hosting costs if I want them to point to my domain.

So, Jekyll makes a lot of sense for my uses, and I'd totally recommend that other tech-savvy individuals looking to create their own blog or personal sites consider it for a relatively straightforward, content-focused site.
