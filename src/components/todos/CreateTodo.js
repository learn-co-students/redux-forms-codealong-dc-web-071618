import React, { Component } from "react";
import { connect } from "react-redux";

class CreateTodo extends Component {
  //2. add state and write handleChange function
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  //5. Write out mapDispatchToProps and handleSubmit
  handleSubmit = event => {
    event.preventDefault();
    // this.props.addTodo(this.state);
    //alternative way
    this.props.dispatch({ type: "ADD_TODO", payload: this.state });
  };

  render() {
    //1. Update component state by adding an onChange event handler
    //3. Set value attribute of input element to this.state.props --> re-render each time it's typed and show
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input
              type="text"
              onChange={event => this.handleChange(event)}
              value={this.state.text}
            />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

// mapDispatchToProps = dispatch => {
//   return {
//     addTodo: formData => dispatch({ type: "ADD_TODO", payload: formData })
//   };
// };

// export default CreateTodo;

//4. On submission of the form, dispatch an action to the store

// export default connect(
//   null,
//   mapDispatchToProps
// )(CreateTodo);

//No mapStateToProps bc this component doesn't need any state. Only need to dispatch an action, not getting information from our store --> use null

//5. alternative way
export default connect()(CreateTodo);
