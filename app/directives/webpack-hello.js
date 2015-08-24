export default ngModule => {
  ngModule.directive('webpackHello', () => {
    require('./webpack-hello.css');
    return {
      restrict: 'E',
      scope: {},
      template: require('./webpack-hello.html'),
      controllerAs: 'vm',
      controller: function() {
        const vm = this;
        vm.greeting = 'Hello Webpack Foo';
      }
    };
  });
};
