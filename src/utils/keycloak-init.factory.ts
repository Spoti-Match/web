import{ KeycloakService } from "keycloak-angular"

export function KeycloakInit(
  keycloak: KeycloakService
) {
  return () =>
  keycloak.init({
    config:{
      url: 'http://localhost:8080/auth',
      realm: 'Spotimatch',
      clientId: 'spotimatch-front-client'
    },
    initOptions: {
      onLoad: 'login-required',
      silentCheckSsoRedirectUri:
        window.location.origin + '/assets/silet-check-sso.html'
    }
  });
}
