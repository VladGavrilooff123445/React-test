import React from 'react'



class ComponentTrack extends React.Component {

    render() {
        return (
            <div className="flex-column">
                <a href={this.props.url}>song</a>
            </div>
        );
    }
}


export default ComponentTrack