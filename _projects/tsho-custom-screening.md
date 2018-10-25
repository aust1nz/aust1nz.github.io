---
layout: projects
title: DCPS Candidate Selection Dashboard
status: Published
project_date: Fall 2015
completion_date: 2015-10-01T00:00:00.000Z
description: >-
  A totally custom Salesforce dashboard that lets DCPS hiring managers screen
  potential candidates using their own selection plans.
---

<div class="panel panel-default" markdown="1">
<div class="panel-body" markdown="1">
<div class="page-header" markdown="1">
### Project Summary
</div>

__Problem:__ DCPS uses the Salesforce platform for our [job board](http://dcps.force.com/central){:target="_blank"} and applicant tracking system. While the system met the needs of power users, hiring managers who used it infrequently were often confused by the many menus and the frustrated by the rigid, specific instructions they needed to follow to begin screening candidates. As a result, hiring processes often occurred entirely outside of the system, and occasionally applications were never reviewed because of the complexity.

__Solution:__ We built a completely custom screening dashboard for our hiring managers, complete with a flexible screening setup for each individual job. Best of all, we were able to continue using the Salesforce framework, by taking advantage of Salesforce's Apex and Visualforce developer tools.

__Results:__ Our hiring managers engage with the system earlier and more frequently. We can accommodate a variety of screening practices, from a straightforward resume review to interview, up to a complex six-stage screening process. With hiring managers in the system, we're better able to engage which applications are moving forward, and which candidates are successful.

</div>
</div>

#### Job Setup

When a hiring manager first selects a position that they will be screening, they are automatically redirected to a job setup page. On this page, they can indicate which stages they will follow in their hiring process -- for example, a resume review, followed by a phone interview, followed by an in-person interview. The dashboard tabs for this job would then reflect this decision.

Our system supports as little as one stage and up to seven, so hiring managers are able to implement a process that is appropriate for their team and for the level of the position.

_(Click on the any of the pictures with play buttons to see a GIF.)_ __Please Note:__ The posting listed here is an example job, and the applications below are for example candidates.!

![job selection](/img/portfolio/candidate-selection/select-job.png){: .img-responsive .img-thumbnail .click-gif}

#### Candidate Details

The dashboard is designed so that hiring managers can quickly review the most important details about a candidate. If the candidate is a current employee, a click-over box appears with details about his/her current position. If the candidate included a cover letter, that's quickly visible as well, and all candidates have links to PDF versions of their resumes.

As screeners make decisions, they can also capture or review notes about the process.

![view candidate details](/img/portfolio/candidate-selection/candidate-details.png){: .img-responsive .img-thumbnail .click-gif}

#### Quick Decision-Making

Once screeners make a decision about each candidate, they can quickly pass the candidate to the next stage, or choose to reject the candidate. These decisions will track candidates in the appropriate tabs, and once candidates make it to the final 'Passed Screening' phase, they begin the hiring process.

![make screening decisions](/img/portfolio/candidate-selection/screening-decisions.png){: .img-responsive .img-thumbnail .click-gif}

### Technology Stack

This dashboard is a subset of DCPS's recruitment and selection data system, which runs in Salesforce. These pages are built in Visualforce, with heavy reliance on [`apex:actionSupport`](https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_compref_actionSupport.htm) to update data without full page refreshes, and a few pieces of custom Javascript. It relies on robustly tested custom Apex controllers. The visual style was created using the [Bootstrap](http://getbootstrap.com/) CSS framework.
