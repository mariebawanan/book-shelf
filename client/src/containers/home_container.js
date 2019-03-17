import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../actions';

class HomeContainer extends Component {

    componentWillMount(){
        this.props.dispatch(getBooks(3, 0, 'desc'));
    }

    render() {
        return (
            <div>
                home items
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        books: state.books
    }
}
export default connect(mapStateToProps)(HomeContainer);