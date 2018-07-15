import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount () {
    axios.get('/api/book')
      .then(res => {
        this.setState({books: res.data})
        console.log(this.state.books);
      })
  }

  render() {
    return (
      <BrowserRouter>
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              BOOK CATALOG
            </h3>
          </div>
          <div class="panel-body">
          <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>Add Book</Link></h4>
          <table class="table table-stripe">
              <thead>
                <tr>
                  <th>ISBN</th>
                  <th>Title</th>
                  <th>Author</th>
                </tr>
              </thead>
            <tbody>
            {this.state.books.map(book =>
              <tr>
                <td><Link to={`/show/${book._id}`}>{book.isbn}</Link></td>
                <td>{book.title}</td>
                <td>{book.author}</td>
              </tr>
            )}

            </tbody>
          </table>
          </div>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
