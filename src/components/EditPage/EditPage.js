import React, { Component } from 'react';
import {connect} from 'react-redux'

class EditPage extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}
const mapStateToProps = (reduxState) =>({
    reduxState,
})

export default connect(mapStateToProps) (EditPage);