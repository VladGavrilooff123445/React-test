import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SearchTrack from "./SearchTrack";
import axios from 'axios';
import HeadComponent from "./HeadComponent";
import ComponentTrack from "./ComponentTrack";


function App() {
    return (
        <BrowserRouter>
            <div>
                <HeadComponent/>
                <div className="mainEl">
                    <SearchTrack/>
                    <Switch>
                        <Route path={'/'} exact component={ComponentTrack}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
