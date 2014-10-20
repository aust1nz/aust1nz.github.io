---
layout: post
title:  "Getting started with Jekyll"
summary: "Jekyll is a simple static site generator in Ruby, and it's great for hosting simple blog/portfolio sites."
date:   2014-10-20 16:47:00
categories: jekyll
---

[Jekyll](http://jekyllrb.com/) is a neat package for hosting mostly static content on the web. It serves a rather specific niche: it's for blogs or portfolio sites where the person updating the content is also comfortable using a text editor, markdown and a console window. So you see lots of [Jekyll](http://tom.preston-werner.com/) [generated](https://training.github.com/) [sites](http://schacon.github.io/) are specifically about programming concerns. (They also seem to be mostly out of date, but that's another concern.)

####So, what does it do exactly?

Basically, it helps you generate a bunch of static webpages that aren't attached to a database quickly. Here's a quick walkthrough:

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


####There are a few competing frameworks that can easily get blogs up, too. Why use Jekyll instead?

+ You have total control over the content and layout, compared to an online CMS tool like [Blogger](https://www.blogger.com).
+ You don't need to worry about the weird hacks that attack Wordpress templates because, first, visitors are just looking at static pages, and, second, Wordpress is a much better target since it's so widely used.
+ Compared to building your own blogging platform with a framework like Rails or Django, it's several magnitudes of order easier, and, as mentioned above, you don't need to worry about attacks on a static site.

In the next post, I'll walk through a few quick customizations that you can make as you work to deploy your blog.