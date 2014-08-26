Router.configure({
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading'
});

Router.map(function () {
  this.route('home', {
    path: '/'
  });

  this.route('map-demo', {
    path: 'demo'
  });

});

var IR_BeforeHooks = {
  allRoutes: function() {
  }
};

var IR_AfterHooks = {
  allRoutes: function() {
  }
};

Router.onBeforeAction(IR_BeforeHooks.allRoutes);
Router.onAfterAction(IR_AfterHooks.allRoutes);
