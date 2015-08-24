export default ngModule => {
  ngModule.directive('formHello', () => {
    require('./form-hello.css');
    return {
      restrict: 'E',
      scope: {},
      template: require('./form-hello.html')
    };
  });
};
