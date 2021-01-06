import React from 'react';
import Card from 'react-bootstrap/Card'; // importing card
import { Link } from 'react-router-dom'; // importing link
import Button from 'react-bootstrap/Button'; // importing button
import axios from 'axios'; // importing axios

export class BookItem extends React.Component {

    // Constructor
    constructor() {
        // Invoke parent constructor
        super();

        // Must "bind" "this"
        this.DeleteBook = this.DeleteBook.bind(this);
    }

    // DeleteBook Method
    DeleteBook(e) {
        // Prevents firing on start
        e.preventDefault();

        console.log("Delete: " + this.props.book._id);

        // URL of where to delete
        axios.delete("http://localhost:4000/api/books/" + this.props.book._id)
            .then(() => {
                this.props.ReloadPage(); // Passing method from repository.js
            })
            .catch();
    }

    render() {
        return (
            <div>
                {/* Displaying each book */}
                <Card>
                    <Card.Header>{this.props.book.bookTitle}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.book.cover} width="200" height="250"></img>
                            <footer className="blockquote-footer">
                                {this.props.book.bookAuthor}
                                <p>{this.props.book.publishYear}</p>
                            </footer>
                        </blockquote>
                        {/* Changing the URL */}
                        <Link to={"/edit/" + this.props.book._id} className="btn btn-success">Edit</Link>
                        <Button variant="danger" onClick={this.DeleteBook}>Delete</Button>
                    </Card.Body>

                </Card>
            </div>
        );
    }
}