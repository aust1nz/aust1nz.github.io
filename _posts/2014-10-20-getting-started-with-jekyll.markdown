---
layout: post
title:  "Getting started with Jekyll"
summary: "Jekyll is a simple static site generator in Ruby, and it's great for hosting simple blog/portfolio sites."
date:   2014-10-20 16:47:00
categories: jekyll
---

[Jekyll](http://jekyllrb.com/) is a neat package for hosting mostly static content on the web. It serves a rather specific niche: it's for blogs or portfolio sites where the person updating the content is also comfortable using a text editor, markdown and a console window. I think that's why you see lots of [Jekyll](http://tom.preston-werner.com/) [generated](https://training.github.com/) [sites](http://schacon.github.io/) which are specifically about programming concerns. (They also seem to be mostly out of date, but we'll set that aside for now.)


####So, what *is* Jekyll, exactly?

Basically, it's a Ruby gem that helps you generate a bunch of static webpages. Because they are static pages, they don't have to be connected to a database, and the web server can just serve HTML pages instead of building specific pages for each user.

It's also easy to get started. Here's a quick walkthrough, using instructions from the Jekyll site:

<ol>
  <li>Grab the Jekyll gem.</li>
  <li><p>Build Jekyll into a new folder:</p>
{% highlight bash %}
$ gem install jekyll
$ jekyll new myblog
$ cd myblog
~/myblog $ jekyll serve
{% endhighlight %}</li>
  <li><p>Visit the site!</p>
      <p>By default, it's at localhost:4000.</p></li></ol>

####So, why use Jekyll instead of the other options?

There are a bunch of other easy ways to get a blog site posted. What's the advantage of using this tool? Here are a few alternate considerations, and some reasons to stick with Jekyll.

+ __Hosted Blogs__: If you're just interested in getting your message out, a nice option is an online CMS tool like [Blogger](https://www.blogger.com). Unlike Blogger, I'm in charge of *everything* with something I build myself using Jekyll. It makes this option a good choice if you have specific goals for your pages.
+ __Worldpress__: Wordpress templates are ubiquitous and an obvious blogging choice. With Jekyll, though, you don't need to worry about the weird hacks that attack Wordpress templates. First, because visitors are just looking at static pages, and, second, because Wordpress is a much more attractive target to scammers since it's so widely used.
+ __Build Your Own__: Compared to building your own blogging platform with a framework like Rails or Django, getting started with Jekyll is several magnitudes of order easier, and, as mentioned above, you don't need to worry about attacks on a static site.

In the next post, I'll walk through a few quick customizations that you can make as you work to deploy your blog.
