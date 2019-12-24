import React, { Component } from 'react';
import {connect} from 'react-redux'

class Detailspage extends Component {

    componentDidMount = () => {
        this.getMovieDetail()
    }

    getMovieDetail = () => {
        this.props.dispatch({ type: 'GET_DETAIL', payload: this.props.match.params })
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
                </div>
            </div>
        );
    }
}
const mapStatetoProps = reduxState => ({
    reduxState
})

export default connect(mapStatetoProps) (Detailspage);