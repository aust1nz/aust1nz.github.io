---
layout: projects
name: Principal Candidate Screening
project_date: Summer 2014
completion_date: 2014-06-01
description: An easy way for principals to match candidates to vacancies.
---


<div class="panel panel-default" markdown="1">
<div class="panel-body" markdown="1">
<div class="page-header" markdown="1">
### Project Summary
</div>

__Problem:__ At DCPS, principals are responsible for hiring staff from a pool of approved candidates. However, principals were selecting candidates from a Salesforce dashboard that was confusing to navigate and which failed to highlight candidates' skills.

__Solution:__ We redesigned the principal screening pages with their needs in mind, adding quick filters relevant to teaching, and building a  custom dashboard with fewer options which is easier for principals to navigate.

__Results:__ Principals are engaged in screening candidates for their positions sooner; along with great recruitment, the updated dashboard helps principals find appropriate candidates more quickly, and ensures that staff are fully hired before the school year begins.
</div>
</div>

#### Home Page

When principals log in, they are able to review recent updates from the central office team.

#### Candidate Search

Principals with vacancies can select vacancies, and then review all approved candidates who applied to the appropriate job. From there, principals can further filter the results, or sort and search users.

#### Candidate Details

When principals select an individual candidate, they can review the candidate's qualifications, save candidates that they are interested in for later, add any appropriate notes, and submit hire requests. Certain candidates will display additional details, like links to teaching videos.

#### Tracking Hires

After principals have created hire requests, their selected teachers must still complete an HR process and accept their offers. From the hires page, principals can see which staff members can and cannot report to work, with the help of brightly highlighted green and yellow rows.

##### Technology Stack

Like the [DCPS Candidate Selection Dashboard](/projects/tsho-custom-screening.html), the principal dashboards are built in `isualforce`, the Salesforce view template, with robustly tested `Apex` controllers. The back-end for this dashboard is a Salesforce database.