import React, { Component } from "react";
import { connect } from "react-redux";

class CreateTodo extends Component {
  state = {
    todo: ""
  };

  handleChange = event => this.setState({ todo: event.target.value });

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.addTodo(this.state);
            this.setState({ todo: "" });
          }}
        >
          <p>
            <label>add todo</label>
            <input
              type="text"
              value={this.state.todo}
              onChange={this.handleChange}
            />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: "ADD_TODO", payload: formData })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateTodo);
