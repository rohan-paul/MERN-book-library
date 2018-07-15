import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link, BrowserRouter } from 'react-router-dom';

class Create extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isbn: '',
      title: '',
      author: '',
      description: '',
      published_year: '',
      publisher: ''
    }
  }

  onChange =(e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }



  render() {
    return (
      <div>

      </div>
    );
  }
}

export default Create;

/* 1>> on e.target.value -> See my detail note in - /home/paul/PAUL/H/Web/R/General-Absolute-Stupid-React-Note-On-Structuring-React-App-JSX syntax.odt

 A> All DOM node for an <input> element has a 'value' property and also a 'name' property - these are native html properties of the browser. The 'name' attribute specifies the name of an <input> element. And the ‘value’ property holds a <input> element's latest value.

 B> And in the above line the part within square-bracket [e.target.name] is called the computed property value (a new addition to ES6) and I am setting that to be equal to e.target.value


C> So, I am creating the onChange() function, which will update whatever the current states to the the new value of <e.target.value>  And then in the return section I will just invoke this function.

on e.target.value -> See my detail note in - /home/paul/PAUL/H/Web/R/General-Absolute-Stupid-React-Note-On-Structuring-React-App-JSX syntax.odt

*********************************

EXPLANATION ON - < [e.target.name] : e.target.value > --- EXPLANATION -

A> My purpose here in the above is that -
    (i) Whatever I type in the 6 input elements within <div class="form-group"> should update the 6 states (declared in the constructor) by assigning that typed text in the form as the 6 state's assigned-values.

    (ii) So, to achieve that, I have to first find a hook to grab, for example the first state which is "isbn". So, when I am typing in the 'isbn' form-control section of the html > that means < e.target.name > is 'isbn' and so, > My hook for grabbing that state, is < e.target.name > and then I am setting that equal to the value of 'value' attribute with < e.target.value >
    ( Note, all DOM node for an <input> element has a 'value' property and also a 'name' property - these are native html properties of the browser )

C> I am setting e.target.name which is currently "isbn" in this specific form-control, initially to be assigned to whatever I type (which will be captured by the code < e.target.value> )

Another implementation of the same onChange() function - /home/paul/codes-Lap/React/React-snippets/redux-show-list-of-micro-blog-posts/src/components/PostForm-before-Redux.js

2> Explanation < this.props.history.push("/") >

https://reacttraining.com/react-router/core/api/history

3>  https://tylermcginnis.com/react-router-programmatically-navigate/

The real work horse of React Router is the History library. Under the hood it’s what’s keeping track of session history for React Router. When a component is rendered by React Router, that component is passed three different props: location, match, and history. This history prop comes from the History library and has a ton of fancy properties on it related to routing. In this case, the one we’re interested is history.push. What it does is it pushes a new entry onto the history stack - aka redirecting the user to another route.

*/