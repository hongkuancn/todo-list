import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createTodo } from './actions';

class CreateForm extends React.Component {

  state = {
    item: '',
    errors: {}
  }

  handleChange = (e) => {
    this.setState({ errors: {} })
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};

    if(this.state.item === '') {
      errors.empty = "The input can't be empty!";
      this.setState({ errors })
    }

    const { items } = this.props;
    items.map((item, index) => {
      console.log(item.item === this.state.item);
      if(item.item === this.state.item){
        errors.exist = "Sorry, the item has already existed. Try another?"
        this.setState({ errors });
      }
      return true;
    })

    const isValid = Object.keys(errors).length === 0;

    if (isValid){
      const { item } = this.state;
      this.props.createTodo({ item });
      this.setState({ item: '' });
    }
  }

  render(){

    return (
      <div>
        <form className="col-md-4 offset-md-4" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Make your day extraordinary"
              name="item"
              value={this.state.item}
              onChange={this.handleChange}
             />
          </div>
          {this.state.errors && <div className="form-text text-danger">{this.state.errors.empty || this.state.errors.exist}</div>}
          <button className="btn btn-primary btn-block">Create</button>
        </form>
      </div>
    )
  }
}

CreateForm.propTypes = {
  createTodo: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return {
    items: state.items
  }
}

export default connect(mapStateToProps, { createTodo })(CreateForm);
