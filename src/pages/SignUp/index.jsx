import { SignUp, useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
    const { isSignedIn } = useAuth();
    const navigate = useNavigate();

    // Redirect signed-in users to the homepage
    useEffect(() => {
        if (isSignedIn) {
            navigate("/");
        }
    }, [isSignedIn, navigate]);

    return (
        <div className="flex items-center justify-center max-h-screen">
            <div className="p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-2xl font-bold text-center mb-4">Create Your Account</h1>
                <SignUp fallbackRedirectUrl="/dashBoard" signInUrl={'/login'}/>
            </div>
        </div>
    );
}

export default SignUpPage;
