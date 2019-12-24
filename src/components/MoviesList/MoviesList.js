import React, { Component } from 'react';
import { connect } from 'react-redux'

class MoviesList extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}
const mapStatetoProps = reduxState =>({
    reduxState
})

export default connect(mapStatetoProps) (MoviesList);