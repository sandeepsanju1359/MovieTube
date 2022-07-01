import React, { useState } from "react";
import "./SignInBody.css"
import {SIGN_IN_BODY_TEXT} from "../constants/components"

function SignInBody() {

    const [showSignInBox, setShowSignInBox] = useState(true)

    // function goToSignUpPage() {
    //     setShowSignInBox(false)
    // }

    // function goToSignInPage() {
    //     setShowSignInBox(true)
    // }

    function setShowSigInBoxAs(parameter){
        setShowSignInBox(parameter)
    }


    return (
        <>
            {showSignInBox ?
                (
                    <div className="signinbody_container">
                        <div className="signinbody_form">
                            <p className="signinbody_title">{SIGN_IN_BODY_TEXT.SIGN_IN} </p>
                            <input placeholder={SIGN_IN_BODY_TEXT.EMAIL_PLACEHOLDER} type="text" />
                            <input placeholder={SIGN_IN_BODY_TEXT.PASSWORD_PLACEHOLDER} type="password" />
                            <button>{SIGN_IN_BODY_TEXT.SIGN_IN}</button>
                            <button>{SIGN_IN_BODY_TEXT.LOGIN_AS_GUEST_USER}</button>
                            <p className="signinbody_text">{SIGN_IN_BODY_TEXT.NEW_USER} <span onClick={() => setShowSigInBoxAs(false)}>{SIGN_IN_BODY_TEXT.SIGN_UP_NOW}</span></p>
                        </div>

                    </div>
                ) :
                (
                    <div className="signinbody_container">
                        <div className="signinbody_form">
                            <p className="signinbody_title">Sign Up </p>
                            <input placeholder="Name" type="text" />
                            <input placeholder={SIGN_IN_BODY_TEXT.EMAIL_PLACEHOLDER} type="text" />
                            <input placeholder={SIGN_IN_BODY_TEXT.PASSWORD_PLACEHOLDER} type="password" />
                            <button>SignUp</button>
                            <button>Login as Guest User</button>
                            <p className="signinbody_text">Already A User? <span onClick={() => setShowSigInBoxAs(true)}>SignIn.</span></p>
                        </div>

                    </div>
                )}




        </>

    )
}

export default SignInBody;