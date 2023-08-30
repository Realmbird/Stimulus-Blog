# Project: Stimulus-Blog
# What is this
This was an experiment to get used to using stimulus and turbo with rails to make single page applications (SPA).
What I did with stimulus and Turbo
1. Added button to show another element with stimulus
2. Added element which hides after clicked and shows another element
3. Created Checkbox to highlight the element containing the checkbox
4. Added a text field which gives a warning about maximum length of 280 characters after the person types 10 characters
5. Tested Turbo frames to not only do lazy loading but, also link to a form
6. Made it so that page updates dynamically from form data using turbo stream

## Setup
Clone the Repo
```ruby
$ git clone git@github.com:Realmbird/Stimulus-Blog.git
```
Setup Database
```ruby
$ rails db:migrate
```
Run server
```ruby
$ rails s
```

Go to url
```ruby
$ http://localhost:3000
```
Now go to the first text box fill in sum dummy text and click enter,
This will demonstrate dynamically updating list 

After adding list of text refresh the page so you can test on the checkboxes to see how they are highlighted when checked
