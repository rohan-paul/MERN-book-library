import React, { Component } from 'react';
import axios from 'axios';
import { Link, BrowserRouter } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props)

    this.state = {
      book: {}
    };
  }

  // Pass Express req and res data to client-side React
  componentDidMount() {
    axios.get('/api/book/'+this.props.match.params.id)
      .then(res => {
        this.setState({ book: res.data })
        console.log(this.state.book);
      })
  }

  onChange = e => {
    const state = this.state.book;
    state[e.target.name] = e.target.value;
    this.setState({book:state})
  }

  onSubmit = e => {
    e.preventDefault()

    // In create component, I am setting all these objects to this.state, because thats how the state was defined there inside the constructor. But here, my state itself is a book object. And so I am editing that book object here.

    const { isbn, title, author, description, published_year, publisher } = this.state.book;

    axios.put('/api/book'+this.props.match.params.id, { isbn, title, author, description, published_year, publisher } )
      .then(result => {
        this.props.history.push('/show/'+this.props.match.params.id)
      })
  }

  /* Explanation of this.props.match.params.id >>
  A> I am sending axios.get to an particular url /api/book/:id and I am capturing that id from the URL with this.props.match.params.id.

  B> Upon visiting a url, React Router will supply any dynamic pieces of the URL to the component via an object called match.params as own props of the related component.

  Note that I have a property called id (to be accessed with match.params) because of the way I defined my route. If I defined my dynamic portion to be api/book/:dog, I'd have a dog property in our match.params instead of id

  https://learn.co/lessons/react-router-params

  C> If the router’s path and the location are successfully matched, an object is created and we call it the match object. The match object carries more information about the URL and the path. This information is accessible through its properties, one of which is match.params. This is an object containing key/value pairs from the URL parsed by the Path-to-RegExp package.
  https://www.sitepoint.com/react-router-v4-complete-guide/

  */

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default Edit;