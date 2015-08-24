export default ngModule => {
  require('./webpack-hello')(ngModule);
  require('./form-hello')(ngModule);
};
