import React, {useState} from 'react';
import SearchTrack from "./SearchTrack";
import ComponentTrack from "./ComponentTrack";
import axios from 'axios';

function App() {

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


    return (
        <div>
            <SearchTrack/>
            <ComponentTrack
                name={charts.map((element) => {return element.name})}
                artist={charts.map((element) => {return element.artist})}
                url={charts.map((element) => {return element.url})}
            />

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
