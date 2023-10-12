import React, { Component } from 'react';

class ChildComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }




    render() {
        return (
            <>
                <p>{this.props.message}</p>
                <p>{this.props.count}</p>
                <div>
                    <h1>{this.props.car.model}</h1>
                    <h2>{this.props.car.year}</h2>
                    <h2>{this.props.car.color}</h2>
                </div>
                <div>
                    {this.props.movies.join(' ')}
                </div>
            </>
        );
    }

}

export default ChildComponent