import React from 'react';
import { Books } from './books'; // import component
import axios from 'axios'; // import axios

export class Repository extends React.Component {

    // Constructor
    constructor(){
        super();

        // Must "bind" "this"
        this.ReloadPage = this.ReloadPage.bind(this);
    }


    // Object state with books array - holds the data of the books JSON array
    state = {
        books: []

    }

    // Front-end talking to Back-end
    componentDidMount() {
        axios.get('http://localhost:4000/api/books')
            .then((response) => {
                this.setState({ books: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    // Reload Page once ID is deleted
    ReloadPage(){
        axios.get('http://localhost:4000/api/books')
            .then((response) => {
                this.setState({ books: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    // Render
    render() {
        return (
            <div>
                <h1>Repository</h1>
                {/* Passes the books array into Books from repository.js */}
                {/* Passes ReloadPage into Books from repository.js */}
                <Books books={this.state.books} ReloadPage={this.ReloadPage}></Books>
            </div>
        );
    }
}


    // ======================== Example Books ========================
    //     {
    //         "BookTitle": "Harry Potter and the Philosopher's Stone",
    //         "BookAuthor": "J. K. Rowling",
    //         "publishYear": "1997",
    //         "Type": "book",
    //         "Cover": "https://static2.raru.co.za/cover/2017/01/10/5183272-l.jpg?v=1492513597"
    //     },
    //     {
    //         "BookTitle": "The Lord of The Rings, The Fellowship of the Ring",
    //         "BookAuthor": "J. R. R. Tolkien",
    //         "publishYear": "1954",
    //         "Type": "book",
    //         "Cover": "https://images-na.ssl-images-amazon.com/images/I/91jBdaRVqML.jpg"
    //     },
    //     {
    //         "BookTitle": "Necronomicon: Commemorative Edition",
    //         "BookAuthor": "H. P. Lovecraft",
    //         "publishYear": "2008",
    //         "Type": "book",
    //         "Cover": "https://images-na.ssl-images-amazon.com/images/I/612foBu9CBL.jpg"
    //     }