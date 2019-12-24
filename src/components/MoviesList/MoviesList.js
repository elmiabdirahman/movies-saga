import React, { Component } from 'react';
import { connect } from 'react-redux'

class MoviesList extends Component {

    componentDidMount(){
        this.GetMovies();
    }

    GetMovies = () =>{
        this.props.dispatch({ type: 'GET_MOVIES'})
    }

    render() {
        return (
            <div>
                <div >{this.props.reduxState.movies.map((movie) => {
                    return (<div key={movie.id}>
                      {movie.title}<br/>
                      <img src = {movie.poster} alt={movie.description}
                      onClick={() => this.props.seeMovie(movie.id)}/>
                    </div>)
                })}</div>
            </div>
        );
    }
}
const mapStatetoProps = reduxState =>({
    reduxState
})

export default connect(mapStatetoProps) (MoviesList);