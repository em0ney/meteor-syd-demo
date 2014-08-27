if (Meteor.isClient) {
  Meteor.startup(function () {
    // Initialise the google map locator
    GoogleMapLocator.init('AIzaSyCwsYUsB5DxzbZ08i2PZlAjcnRXJYvqGNM');
  });

  Template.demo.events({
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
