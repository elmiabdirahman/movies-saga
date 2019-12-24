import React, { Component } from 'react';

class Movies extends Component {

    // Renders the entire app on the DOM
  seeMovie = (id) =>{
    this.props.history.push('/' + id);

}
    render() {
        return (
            <div>
                <MoviesList seeMovie={this.seeMovie}/>
            </div>
        );
    }
}

export default Movies;