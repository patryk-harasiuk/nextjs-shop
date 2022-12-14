import { signIn, signOut, useSession } from 'next-auth/react';
import { useMemo } from 'react';

const useAuth = () => {
  const { data: session, status } = useSession();

  return useMemo(
    () =>
      ({
        session,
        status,
        signIn,
        signOut,
      } as const),
    [session, status],
  );
};

export default useAuth;
