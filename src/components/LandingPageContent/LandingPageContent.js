import React from "react";
import "./LandingPageContent.css"

function LandingPageContent() {
    return (
        <div className="landingpagecontent_container">
            <p className="landingpagecontent_title">Unlimited films, TV Programmes and more.</p>
            <p className="landingpagecontent_subtitle">Watch Anytime, Anywhere</p>
            <p className="landingpagecontent_description">Ready to watch? Enter your email to create or restart your membership</p>
            <div className='landingpagecontent_input'>
                <input />
                <button>GET STARTED</button>
            </div>
        </div>

    )
}

export default LandingPageContent;