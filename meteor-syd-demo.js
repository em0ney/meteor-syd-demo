if (Meteor.isClient) {
  Meteor.startup(function () {
    // Initialise the google map locator
  });

  Meteor.map-demo.events({
    'submit form': function(e, tpl) {
      e.preventDefault();
      console.log("submitted form");
      console.log(tpl);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
