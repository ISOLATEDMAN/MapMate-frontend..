import React, { useState } from 'react';
import { SignedOut, SignedIn, UserButton, SignUpButton } from '@clerk/clerk-react';

function SignUp() {

    return (
        <>
            <SignedOut>
                <SignUpButton ></SignUpButton>
            </SignedOut>
        </>
    );
}

export default SignUp;