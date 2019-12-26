import React, { Component } from 'react';
import {connect} from 'react-redux'

class Detailspage extends Component {

    componentDidMount = () => {
        this.getMovieDetail()
    }

    getMovieDetail = () => {
        this.props.dispatch({ type: 'GET_DETAIL', payload: this.props.match.params })
    }
    
    handleClick = () => {
        this.props.history.push('/')
    }

    Edit = () => {
        this.props.history.push(`/Edit/${this.props.match.params.id}`)
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.reduxState.genres.map((movie) =>
                        <div key={movie.id}>
                            <p>{movie.title}</p>
                            <img src={movie.poster} alt={movie.description} />
                            <p>{movie.description}</p>
                            <p>GENRE: {movie.genre_list}</p>
                        </div>
                    )}
                    <button onClick={this.handleClick} >Back</button>
                    <button onClick={this.Edit} >EDIT</button>
                </div>
            </div>
        );
    }
}
const mapStatetoProps = reduxState => ({
    reduxState
})

export default connect(mapStatetoProps) (Detailspage);