---
layout: post
title: "Building a Rails App, part 1"
draft: false
---
I've been learning all about developing with [Rails](http://rubyonrails.org/) for the past couple of years, but I've never built anything close to [complete](http://azfoodapp.herokuapp.com) or [production-ready](http://brewbud.herokuapp.com). In this series of posts, I'm hoping to outline an attempt to build a free and open source Rails application -- in my case, a job board applicant-tracking system.

Why? Well, I manage development of one at my job, so I know a thing or two about what users of these systems want -- both as applicants and as recruiters/hiring managers. Applying to jobs online is also something many people are familiar with, so it shouldn't be too foreign to any potential readers.

#### This Series
First, a bit about my comfort level with Rails: as I mentioned above, I'm not a total newbie to Rails but I don't have professional experience. I do build web apps in my day job, but they live on [SaaS](https://en.wikipedia.org/wiki/Software_as_a_service) systems like Salesforce, and face a different set of challenges. I'd probably consider myself an advanced beginner when it comes to building in Rails.

So, here's what I'm hoping this series of posts will be about:

* A summary of the decisions I make and roadblocks I run into while trying to create a useful Rails application
* A document of some of the technical and logistical challenges developers might face when creating applications from scratch or implementing needed features
* A conversation starter for some of the good or bad decisions I make or more controversial aspects of development in Rails (like the relevance of testing!)

And here's what it won't be:

* A full-fledged tutorial. I'm planning on skipping steps or fast forwarding - I'd recommend Michael Hartl's [Rails Tutorial](https://www.railstutorial.org/book) if that's what your're after
* An expert's guide to best practices: I'm planning on outlining roadblocks I face and possibly the consequences of poor decisions I make. I'm not an expert at production-ready Rails applications, so don't come here for this!

Onward, to market research and planning!
