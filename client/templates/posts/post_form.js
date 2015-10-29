Template.postForm.events({

  // handle the form submission
  'submit form': function(event, template) {

    // stop the form from submitting
    event.preventDefault();

    Meteor.call("addPost", event.target.title.value, event.target.url.value)
    template.find("form").reset();
  }

});