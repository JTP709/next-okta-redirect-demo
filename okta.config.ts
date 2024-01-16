import OktaAuth from "@okta/okta-auth-js";

const oktaAuth = new OktaAuth({
  issuer: "",
  clientId: "",
  redirectUri: "",
});

export default oktaAuth;
