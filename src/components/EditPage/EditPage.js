import React, { Component } from 'react';
import {connect} from 'react-redux'

class EditPage extends Component {

    state = {
        movie: {
            id: '',
            title: '',
            description: ''
        }
    }

    componentDidMount = () =>{
        this.movieEdit()
      }

      movieEdit = () =>{
        this.props.reduxState.movies.map((movie) =>{
          this.setState({
            movie:{
              id: movie.id,
              title: movie.title,
              description: movie.description
            }
          })
          console.log('in movies ', movie);
          
        })
      }

      handleChange = (event, propertyNumber) =>{
        console.log(event.target.value);
            
        this.setState({
            ...this.state.movie,
            [propertyNumber]: event.target.value,
        })
      }

      handleSave = () =>{
        console.log('in handleSave');
        this.props.dispatch({type:'UPDATE_MOVIE', payload: this.movie})
        this.props.history.push(`/movies/${this.props.match.params.id}`)    
      }

      handleCancel = () =>{
        this.props.history.push('/DetailsPage')    
      }

    render() {
        return (
            <div>
                <input onChange={(event) => this.handleChange(event, 'title')}value={this.state.movie.title} />
                <br/>
                <input onChange={(event) => this.handleChange(event, 'description')} value={this.state.movie.description}/>
                <br/>
                <button onClick={this.handleSave}>Save</button>
                <button onClick={this.handleCancel}>Cancle</button>
            </div>
        );
    }
}
const mapStateToProps = (reduxState) =>({
    reduxState,
})

export default connect(mapStateToProps) (EditPage);