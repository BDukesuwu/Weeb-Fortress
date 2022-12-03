import {useState} from "react";
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({setUser}) {
    const [showSignUp, setShowSignUp] = useState(false);
    return (
        <main>
            <h1 onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Welcome in! Sign up below' : 'Welcome back! Please Log In'}</h1>
            <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Existing user? Log In' : 'New here? Sign Up'}</button>
            {showSignUp ?
                <SignUpForm setUser={setUser}/>
                :
                <LoginForm setUser={setUser}/>
            }
        </main>
    );
}