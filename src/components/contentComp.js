import React from 'react';

export class ContentComp extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to Book Repo</h1>
                <ul>
                    <br></br>
                    <li>Keep track of books you own by adding them to a repository</li>
                    <br></br>
                    <li>Add your books in the "Add Book" section</li>
                    <br></br>
                    <li>View your added books in the "Repository" section</li>
                    <dl>
                        <dt>Edit</dt>
                        <dd>- Here you can edit an already existing book</dd>
                        <dt>Delete</dt>
                        <dd>- You may also delete an already existing book</dd>
                    </dl>
                </ul>
                <img src='https://img.pngio.com/flat-open-book-icon-transparent-png-svg-vector-open-book-icon-png-512_512.png' width="400" height="360"></img>
            </div>
        );
    }
}

