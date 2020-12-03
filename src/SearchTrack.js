import React from 'react'

class SearchTrack extends React.Component {
    render() {
        return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon1">Search</button>
                </div>
                <input type="text" className="form-control" placeholder="enter the name of the song or artist" aria-label="Example text with button addon"
                       aria-describedby="button-addon1"/>
            </div>
        );
    }
}

export default SearchTrack