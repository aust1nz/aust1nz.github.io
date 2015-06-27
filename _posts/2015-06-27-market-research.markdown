---
layout: post
title: "Market Research: Awash in Job Boards"
draft: false
---
This is my second post in a [series]({% post_url 2015-06-25-building-a-rails-app-1 %}) where I attempt to build a job board and applicant tracking system in Rails from scratch. So far, I haven't written a line of code. Today, I'll take a look at the vast landscape of competitors for this purpose and take a smaller look at the actual use of open-source apps. Next post, I'll start thinking about how to plan for and design the first steps of this project.

#### A Glut of Options
If you or your organization is hiring someone, you face a wide array of options to advertise your position and bring candidates in. As I see it, you'll be looking at two types of tools to get your job posted:

* __Public job boards__: [Monster](http://www.monster.com/) or [Indeed](http://www.indeed.com/) or [Glassdoor](http://www.glassdoor.com/index.htm) or [Linkedin](https://www.linkedin.com/job/home) or [Ziprecruiter](https://www.ziprecruiter.com/). You get the point.
    
    Post your opening at one of these sites and gain access to a bunch of jobseekers who check these places. This would be ideal for employers who don't have a whole job posting system or whose internal job boards aren't seeing much traffic.

* __Applicant tracking for your company__: If you've applied to a job through a company's 'Careers' page, there's a good chance it was on [Taleo](https://en.wikipedia.org/wiki/Taleo), [iCIMS](https://en.wikipedia.org/wiki/ICIMS), or possibly an extension of a company's bigger HR system.

    I also found a few [free/open source](http://blog.capterra.com/top-8-freeopen-source-applicant-tracking-software-solutions/) job boards or applicant tracking systems. These interest me since they are essentially what I'm hoping to build. A few are downloadable web apps that you can spin up on your own servers, and others are SaaS products. They don't seem to have much market share, though - I can't recall having recognized these boards when sending applications to companies.

#### Well, That's a Crowded Market!

Sites in the first category are probably some of the best-known names on the web. Products in the second category are also ubiquitous, if not generally loved. I'm not entirely convinced that there's a need for another product here.

Actually, this is a topic I get stuck on occasionally. Imagine you're building a tech startup, or just tinkering as a hobbyist: is there really _any_ site you could build that would be unique? It seems like every possible product on the internet not only exists, but often with several competitors.

I've wrestled with this for some of the hobby apps I've begun putting together in the past. One was a recipe site, another was a resource for homebrewing, and another was a place to save your thoughts on wines. (Apparently I'm quite obsessed with food/drink!) In all cases, of course, popular sites exist to fill those needs already. It's difficult to imagine that something I build could actually prove useful when competing against well-resourced tech companies.

Anyways -- I'm going to ignore all that for now, since my real goal is to practice web development.

#### What Need Can This App Fill?

Two trends:

1. Googling reveals angry posts from people who really hate job application sites. Part of that, I think, is that a lot of people really hate applying to jobs, so there isn't a ton to be done there. On the other hand, it gets me thinking that a job board which goes out of its way to be helpful to candidates could fill a niche. Some sites let you apply using your LinkedIn profile, which is a similar step in making the application process less odious.
2. The company-specific ATSes also tend to have this clunky 'enterprise' feel to them; only a few have a modern/responsive feel. With all the technologies available to make front-end sites look good, this seems like a solveable problem to fix.

Well, I've established that there are a lot of competing products out there. Great, I guess. Still, I think there's room for a smart-looking app which businesses can install or subscribe to but which is also friendly to applicants -- especially if it's open source. Next step: build that! 
