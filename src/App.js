import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SearchTrack from "./SearchTrack";
import axios from 'axios';
import HeadComponent from "./HeadComponent";
import ComponentTrack from "./ComponentTrack";
import AboutArtist from "./pages/About artist";


function App() {
    return (
        <BrowserRouter>
            <div>
                <HeadComponent/>
                <div className="mainEl">
                    <SearchTrack/>
                    <Switch>
                        <Route path={'/'} exact component={ComponentTrack}/>
                        <Route path={'/About artist'} component={AboutArtist}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
