import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      <h1>Sign Up</h1>
      
      { showSignUp ?
          <LoginForm setUser={setUser} />  
          :
          <SignUpForm setUser={setUser} />
      }
     
      <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'sign up' : 'Already Signed Up?'}</button>
    </main>
  );
}