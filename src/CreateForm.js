import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createList } from './actions';

class CreateForm extends React.Component {

  state = {
    item: '',
    errors: {}
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    //validation
    let errors = {};
    if(this.state.item === '') errors.empty = "The input can't be empty!";
    this.setState({ errors })

    const { item } = this.state;
    this.props.createList({ item });
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
          <button className="btn btn-primary btn-block">Create</button>
        </form>
      </div>
    )
  }
}

CreateForm.propTypes = {
  createList: PropTypes.func.isRequired
}

export default connect(null, { createList })(CreateForm);
