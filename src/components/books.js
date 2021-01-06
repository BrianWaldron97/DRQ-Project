import React from 'react';
import { BookItem } from './bookItem'; // import component

export class Books extends React.Component{

    render(){
        // for every object in the array, a new book is created
        return this.props.books.map( (book) => {
            return <BookItem book={book} ReloadPage={this.props.ReloadPage}></BookItem>     
        })
    }
}