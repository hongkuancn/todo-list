import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveTodo } from './actions';

class ListEdit extends React.Component {

  state = {
    content: this.props.item ? this.props.item.item : ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  render(){
    const { _id } = this.props.item;

    return (
      <li>
        <input
          type="text"
          name='content'
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button className="btn btn-warning btn-sm float-right">Cancel</button>
        <button className="btn btn-success btn-sm float-right" onClick={() => this.props.saveTodo({_id, value: this.state.content})}>Save</button>
      </li>
    )
  }
};

ListEdit.propTypes = {
  item: PropTypes.object.isRequired
}

export default connect(null, { saveTodo })(ListEdit);
