import React from 'react';
import SearchTrack from "./SearchTrack";
import ComponentTrack from "./ComponentTrack";


function App() {
    return (
        <div>
            <SearchTrack/>
            {ComponentTrack()}
        </div>
        /*<div className="container">
            <div className="row">
                <ul>
                    {charts.map((element) => {
                        return <li>
                            <div className="alert alert-primary">
                                <div className="col-sm">{element.artist.name}</div>
                                {charts.map((element) => {
                                    return <div className="col-md">{element.name}</div>
                                })}
                                {charts.map((element) => {
                                    return <div className="col-md">{element.url}</div>
                                })}
                                {charts.map((element) => {
                                    return <img className="col-md" src={element.image[1].text}/>
                                })}
                            </div>
                        </li>
                    })};
                </ul>
            </div>
        </div>*/
    );
}

export default App;
