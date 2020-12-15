import React, {Fragment} from 'react'
import {NavLink} from "react-router-dom";



class AboutArtist extends React.Component {
    render() {
        return (
            <Fragment>
                <h1>We are in 'About artist' page</h1>
                <NavLink to="/"><h2>return back</h2></NavLink>
            </Fragment>
        );
    }
}

export default AboutArtist