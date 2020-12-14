import React from 'react'

class HeadComponent extends React.Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid alert-primary">
                <div className="container">
                    <h1 className="display-4">React Test App</h1>
                    <p className="lead">It's application for test in Room4 IT company.</p>
                </div>
            </div>
        );
    }
}

export default HeadComponent