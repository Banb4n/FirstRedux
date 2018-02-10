import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {
    render() {
        if (!this.props.book) {
            return <div>Select a book to get started</div>
        }

        return (
            <div>
                <h5>Book details :</h5>
                <h4>
                    <b>{this.props.book.title}</b>
                </h4>
                <p>Number of pages : {this.props.book.pages}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) =>  {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);