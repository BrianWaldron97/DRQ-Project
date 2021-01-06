import React from 'react';
import axios from 'axios'; // import axios

export class AddBook extends React.Component {

    // Constructor
    constructor() {
        super(); // invokes constructor of parent class
        
        // bind - borrowing, "this" key-word sets to the provided value
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        this.onChangePublishYear = this.onChangePublishYear.bind(this);
        this.onChangeCover = this.onChangeCover.bind(this);

        // state
        this.state = {
            BookTitle: '',
            BookAuthor: '',
            PublishYear: '',
            Cover: ''
        }
    }

    // setting the book Title
    onChangeBookTitle(e) {
        this.setState({
            BookTitle: e.target.value
        });
    }

    // setting the book Author
    onChangeBookAuthor(e){
        this.setState({
            BookAuthor: e.target.value
        });
    }

    // setting the book Cover
    onChangeCover(e){
        this.setState({
            Cover: e.target.value
        })
    }

    // setting the book Publish Year
    onChangePublishYear(e){
        this.setState({
            PublishYear: e.target.value
        });
    }

    // onSubmit
    onSubmit(e) {
        e.preventDefault();
        alert("Book: " + this.state.BookTitle + " " + 
        this.state.BookAuthor + " " + 
        this.state.PublishYear + " " + 
        this.state.Cover);

        // Object being sent up
        const newBook = {
            bookTitle: this.state.BookTitle,
            bookAuthor: this.state.BookAuthor,
            publishYear: this.state.PublishYear,
            cover: this.state.Cover
        }

        // POST request - returns a PROMISE
        axios.post('http://localhost:4000/api/books', newBook)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    // Render
    render() {
        return (
            <div className='App'>
                {/* Form that allows user to input specified info */}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.BookTitle}
                            onChange={this.onChangeBookTitle}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Book Author: </label>
                        <input type='text'
                        className='form-control'
                        value={this.state.BookAuthor}
                        onChange={this.onChangeBookAuthor}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Publish Year</label>
                        <input type='text'
                        className='form-control'
                        value={this.state.PublishYear}
                        onChange={this.onChangePublishYear}></input>
                    </div>
                    <div className='form-group'>
                        <label>Book Cover: </label>
                        <textarea type='text'
                        className='form-control'
                        value={this.state.Cover}
                        onChange={this.onChangeCover}>
                        </textarea>
                    </div>

                    <div className="form-group">
                        <input type='submit'
                            value='Add Book'
                            className='btn btn-success'></input>
                    </div>
                </form>

            </div>
        );
    }
}