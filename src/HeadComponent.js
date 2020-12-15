import React from 'react'

class HeadComponent extends React.Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid alert-primary">
                <div className="container">
                    <h1 className="display-4">React Test App</h1>
                    <p className="lead">It's application for my skills in React, Redux and Thunk </p>
                </div>
            </div>
        );
    }
}

export default HeadComponent