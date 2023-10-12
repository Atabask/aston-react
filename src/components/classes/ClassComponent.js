import React, { Component } from 'react';
import ChildComponent from './ClassChild';

class ReactComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            message: 'Привет!',
            textInput: '',
            car: {
                model: 'BMW',
                year: 2000,
                color: false
            },
            movies: ['Shrek', 'LOTR', 'Harry Potter']
        }
    }

    click = () => {
        // this.setState({ message: this.state.textInput })
        this.setState({ car: delete this.state.car.year })
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }

    handleChange = (event) => {
        this.setState({ textInput: event.target.value })
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        const {movies, car, message, count, textInput} = this.props
        return (
            <>
                <button onClick={this.click}>Кнопка</button>
                <button onClick={this.increment}>+++++</button>
                <p>{count}</p>
                <input value={textInput} onChange={this.handleChange} />
                <p>{this.state.message}</p>
                <hr/>
                <ChildComponent message={message} count={count} car={car} movies={movies}/>
            </>
        );
    }

}

export default ReactComponent