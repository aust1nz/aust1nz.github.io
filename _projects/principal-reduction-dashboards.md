---
layout: projects
name: Principal Reduction Dashboards
project_date: Spring 2016
completion_date: 2016-03-01
description: A straightforward but comprehensive web application for principals to use during the annual budgeting and reduction process, in order to make the most informed staffing decisions for their schools.
---

<div class="panel panel-default" markdown="1">
<div class="panel-body" markdown="1">
<div class="page-header" markdown="1">
### Project Summary
</div>

__Problem:__ The annual DCPS school-based budget and staff reduction process has a lot of moving parts, and historically principals have had trouble easily seeing the implications of budget changes, or determining what effects their rubrics would have.

__Solution:__ In spring 2016, we redesigned principals' staff validation and reduction tool using Angular.js and Bootstrap to build a snappy and responsive set of principal pages, with QuickBase as a back-end.

__Results:__ The redesign helped principals more easily see what staffing implications their budgets held, and adjust accordingly. In the event that principals needed to reduce positions, the implications of their reductions were clear.
</div>
</div>

_(Click on the pictures with play buttons to see a GIF of the tools in action. __Please Note:__ All of the data points shown below are for illustrative purposes. Neither the schools or individuals are real!)_

#### Validation Pages

The first step in the process is validating our HR list of staff. Though our HR system is relatively accurate, our position titles don't always match to the competitive levels used in the budgeting and reduction processes. (For example, a teacher's position might be 'Teacher, General Secondary,' but it's relevant here to determine whether those teachers are assigned to particular subjects.)

Principals review their staff, make any necessary changes, and then confirm their choices. With Angular, the page loads only once, and we don't need to worry about principals losing their work halfway through validating a large school, since they are able to save incrementally.

![validation dashboard](/img/portfolio/reduction/validation.png){: .img-responsive .img-thumbnail .click-gif}

#### Staff Changes Dashboard

After a school's budget is set, principals return to this application to review their current staff (as validated above) versus their allocation for next year. They're able to see which positions are increasing, staying the same, and decreasing, and to review once again which staff members are in each category.

![reduction dashboard](/img/portfolio/reduction/reductions.png){: .img-responsive .img-thumbnail .click-gif}

#### Reduction Rubrics

In the unfortunate circumstances where there are more current staff members than positions next year, principals must complete a rubric for each of the staff members. The reduction rubrics guide principals through the process, and ensure that school leaders know how staff members will be ranked.

![reduction rubrics](/img/portfolio/reduction/reduction-rubric.png){: .img-responsive .img-thumbnail .click-gif}

#### Reduction Summary

Finally, we've provided principals with a summary of any staff reductions likely to happen at their schools. This page looks at the net loss of positions at each school, and displays the lowest-scoring staff members. By showing the implications in real time, the application prepares principals for any tough conversations and helps them flag any possible mistakes.

![reduction rubrics](/img/portfolio/reduction/potential-reductions.png){: .img-responsive .img-thumbnail}

#### Technology Stack

The site and controllers for the reduction rubrics are created using Angular.js, with Bootstrap as a CSS framework. The back-end database used is QuickBase, and the application communicates with QuickBase using its Javascript API.