import { SignIn, UserButton, SignedOut, SignedIn } from "@clerk/clerk-react";

function Login() {
    return (
        <> 
            <h1>Login Page</h1>
            <SignedOut>
                <SignIn />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </>
    );
}

export default Login;
