
Accounts.ui.config({
  forceEmailLowercase: true,
  forceUsernameLowercase: true,
  //forcePasswordLowercase: true
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});

accountsUIBootstrap3.logoutCallback = function(error) {
  if(error) console.log("Error:" + error);
  Router.go('wellcome');
}
