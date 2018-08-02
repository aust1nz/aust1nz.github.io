---
layout: projects
title: Central Office Performance Evaluations
project_date: Spring 2015
completion_date: 2015-03-01
description: Intuitive performance assessment dashboard for central office staff to deliver and receive feedback.
---

<div class="panel panel-default" markdown="1">
<div class="panel-body" markdown="1">
<div class="page-header" markdown="1">
### Project Summary
</div>

__Problem:__ DCPS central office performance assessments went through several revisions over a short time period, from a complex multi-part form to a simple strengths/growth format. DCPS needed a professional looking but straightforward performance assessment dashboards to guide itse central office users and demonstrate the importance of the system.

__Solution:__ I redesigned the performance dashboards with a simple interface that quickly showed employees their status for each cycle, and which tasks they still needed to complete.

__Results:__ The redesign helped push on-time completion to new highs - essentially, all staff completed their work on time. The also system allows each new cycle to be set up quickly, dramatically reducing the technical know-how required to run the process.
</div>
</div>

#### Performance Dashboard

Dashboards are built with specific users in mind. New employees have optional performance assessment tasks, while most employees have options to submit a self-assessment, upward feedback of their manager, or to read their manager's assessment of their work. Meanwhile, managers have an additional dashboard with information on each of their employees, as demonstrated below.

![performance dashboard](/img/portfolio/performance-evaluations/dashboard.png){: .img-responsive .img-thumbnail .click-gif}

#### Submitting Assessments

The performance assessments themselves are currently set up as simple text-boxes, but with a modular design that will allow future assessments to use numeric ratings or additional framing text.

![performance dashboard](/img/portfolio/performance-evaluations/assessment.png){: .img-responsive .img-thumbnail }

Additionally, when managers submit assessments for their employees, they can see the employees' self-assessment, along with any upward feedback submitted about the person in question.

![performance dashboard](/img/portfolio/performance-evaluations/complete-assessment.png){: .img-responsive .img-thumbnail .click-gif}

#### System Overview

Office directors are also able to access pages which show them their office's overall completion rate, and can download these pages as spreadsheets or click names to begin emails with reminders.

![performance dashboard](/img/portfolio/performance-evaluations/office-summary.png){: .img-responsive .img-thumbnail }

#### Technology Stack

This site is actually built using XSLT for the view templates. Had I known better at the time, I would have used something like Angular.js to build the views, as XSLT isn't really something you can quickly google around for. The database for performance assessments is Quickbase, a SaaS product similar to Salesforce. Updates to the database itself are done through Javascript, interacting with the QuickBase API.