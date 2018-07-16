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

  // Pass Express req and res data to clients-side React
  componentDidMount() {
    axios.get('/api/book/'+this.props.match.params.id)
      .then(res => {
        this.setState({ book: res.data })
        console.log(this.state.book);
      })

  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default Edit;