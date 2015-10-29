Meteor.methods({
  addPost: function(newTitle, newUrl) {
    Posts.insert({
      title: newTitle,
      url: newUrl,
  })
  }
});