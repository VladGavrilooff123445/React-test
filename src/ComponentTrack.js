import React, {useState} from 'react'
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

    return (
        <div>{charts.map((element) => {
            <a>{element.name}</a>
        })}</div>
    );

}


export default ComponentTrack