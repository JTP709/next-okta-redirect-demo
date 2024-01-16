"use client"

import { useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { usePathname, useRouter } from "next/navigation";

const AuthRequired = ({ children }: any) => {
  const { oktaAuth, authState } = useOktaAuth();
  const originalUri = usePathname();

  useEffect(() => {
    const previousAuthState = oktaAuth.authStateManager.getPreviousAuthState();
    if (previousAuthState?.isAuthenticated && previousAuthState.isAuthenticated !== authState?.isAuthenticated) {
      oktaAuth.signInWithRedirect({ originalUri });
    }

  }, [authState, oktaAuth, originalUri]);  

  return authState?.isAuthenticated ? children : <div>Is loading...</div>;
}

export default AuthRequired;
