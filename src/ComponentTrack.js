import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import axios from "axios";


function ComponentTrack() {

    const [charts, setCharts] = useState([]);
    const getCharts = async () => {
        try {
            const {data} = await axios.get('http://ws.audioscrobbler.com/2.0/?api_key=23d931bce89a8adc364d061a22e426af&format=json&method=chart.gettoptracks');
            setCharts(data.tracks.track);

        } catch (error) {
            console.error(error);
        }
    }

    React.useEffect(() => {
        getCharts();
    }, []);
    console.log(charts);


    return (
        <span className="container">
            {charts.map((element) => {
                return <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={element.image[2]['#text']} className="card-img"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h3 className="card-title">{element.name}</h3>
                                <h5 className="card-title">{element.artist.name}</h5>
                                <p className="card-text"><NavLink to="/About artist" className="text-muted">show more</NavLink>
                                </p>
                                <p className="card-text"><a href={element.url} className="text-muted">click here</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            })}

        </span>


    );
}

// export default ComponentTrack;


export default ComponentTrack
