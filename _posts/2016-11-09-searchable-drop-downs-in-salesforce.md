---
layout: post
title: Searchable Drop-Downs in Salesforce
draft: false
---
If you find yourself using Salesforce for Visualforce pages, you may run into a couple of limitations for drop-down boxes in forms. Primary among those: drop-downs with many choices are difficult to navigate. Many users get frustrated sorting through many choices, and it can be difficult to find a value if you don't know the exact spelling.

This post will walk through steps I recently took to make searchable drop-downs in basic Salesforce Visualforce pages, in my case to search through a long drop-down of universities.

#### Building out a Salesforce Picklist

Salesforce calls its drop-downs picklists, and we need to set one up to demonstrate searchable picklists. In my developer account, I created a field called University, and populated it from [a list of accredited US institutions](http://ope.ed.gov/accreditation/GetDownloadFile.aspx). (This list is huge, by the way! Only the first 500 or so universities actually fit into my list, but no matter.) Let's set up a basic Visualforce page to get started.

{% highlight html %}
<apex:page standardController="Merchandise__c">
  <apex:form >
    <apex:pageBlock title="Merchandise Details">
      <apex:pageBlockButtons>
        <apex:commandButton value="Save" action="{!save}" />
      </apex:pageBlockButtons>
      <apex:pageBlockSection title="Related University" columns="1">
        <apex:inputField value="{!Merchandise__c.University__c}" />
      </apex:pageBlockSection>
    </apex:pageBlock>
  </apex:form>
</apex:page>
{% endhighlight %}

That gets us a normal Salesforce-style drop-down:

![Visualforce Picklist](/img/blog/2016-11-09-visualforce-picklist.png){: .img-responsive .img-thumbnail}

We could use this for data entry, but it's hard to find the right university in this long list, and if I'm not certain how choices in the drop-down are spelled and organized, I might not find a match at all! (Is it THE Ohio State University or just Ohio State?)

However, we can quickly make this drop-down searchable by including a Javascript library in our Visualforce page. Read on:

#### Searchable Drop-Downs with Select2

There are a few Javascript libraries that implement searchable drop-downs, but I'm most familiar with [Select2](https://select2.github.io/), which comes up quickly on Google searches and plays nicely with the Bootstrap CSS framework.

Select2 has documentation on what it's doing, but we can easily include it in a Visualforce page by including a few new links. Here are the CDN versions of those links: (You could also host them in a Salesforce org as a static resource.)

{% highlight html %}
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css" rel="stylesheet" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/select2.min.js"></script>
{% endhighlight %}

Two quick notes: first, you do need to include jquery before select2, since select2 depends on jquery. Second, these plugins do increase the total size of the page if total bandwith used or excessive Javascript are concerns.

There are just a few steps left. First, let's add some javascript to the bottom of our visualforce page that transforms certain classes to the Select2 style of drop-downs. We'll code-name the transformed class `searchSelect`.

{% highlight html %}
<script type="text/javascript">
  $('.searchSelect').select2();
</script>
{% endhighlight %}

Now let's go back and tag our `inputField` with our new class:

{% highlight html %}
<apex:inputField value="{!Merchandise__c.University__c}" styleClass="searchSelec"/>
{% endhighlight %}

Voila! Click on the image to see our searchable drop-down in action.

![performance dashboard](/img/blog/2016-11-09-searchableSelect.png){: .img-responsive .img-thumbnail .click-gif}

