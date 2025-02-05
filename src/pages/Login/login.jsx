import { SignIn, UserButton, SignedOut, SignedIn, useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const { isSignedIn } = useAuth();
    const navigate = useNavigate();

    // Redirect to dashboard if user is already signed in
    useEffect(() => {
        if (isSignedIn) {
            navigate("/dashboard");
        }
    }, [isSignedIn, navigate]);

    return (
        <div className="flex items-center justify-center max-h-screen ">
            <div className="p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-2xl font-bold text-center mb-4">Login to Your Account</h1>
                <SignedOut>
                    <SignIn 
                        fallbackRedirectUrl="/dashboard" 
                        signUpForceRedirectUrl="/signup" 
                        signUpUrl="/signup"
                    />
                </SignedOut>
                <SignedIn>
                    <div className="flex flex-col items-center">
                        <p className="text-gray-700">You're already logged in!</p>
                        <div className="mt-4">
                            <UserButton />
                        </div>
                    </div>
                </SignedIn>
            </div>
        </div>
    );
}

export default Login;
