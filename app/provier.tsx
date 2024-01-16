"use client"

import { Security } from '@okta/okta-react';
import oktaConfig from '../okta.config';
import { usePathname, useRouter } from 'next/navigation';
import { toRelativeUrl } from '@okta/okta-auth-js';

const Provider = ({ children }: any) => {
  const router = useRouter();
  const pathname = usePathname();
  const restoreOriginalUrl = async (_oktaAuth: any, originalUri: any) => {
    router.push(toRelativeUrl(originalUri || '/', pathname));
  };

  return (
    <Security 
      oktaAuth={oktaConfig}
      restoreOriginalUri={restoreOriginalUrl}
    >
      { children }
    </Security>
  );
};

export default Provider;
