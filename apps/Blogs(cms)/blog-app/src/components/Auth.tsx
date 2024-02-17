// app/components/Auth.tsx
import { signIn, signOut, useSession } from 'next-auth/react';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

interface SessionData {
  data: {
    session: {
      user: {
        email?: string;
        name?: string;
      };
    };
  };
}

function Auth() {
  const { data: session } = useSession<SessionData>();
  const { setAuthState } = useContext(AuthContext);

  return (
    <div>
      {session?.data?.session ? (
        <button onClick={() => signOut()}>Sign Out</button>
      ) : (
        <button onClick={() => signIn()}>Sign In</button>
      )}
    </div>
  );
}

export default Auth;
