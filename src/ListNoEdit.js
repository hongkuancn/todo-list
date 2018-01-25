import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editTodo } from './actions';

class ListNoEdit extends React.Component {
  render(){
    const { item } = this.props;

    return (
      <li>
        <span>{item.item}</span>
        <button className="btn btn-danger btn-sm float-right">Delete</button>
        <button className="btn btn-info btn-sm float-right" onClick={() => this.props.editTodo(item._id)}>Edit</button>
      </li>
    )
  }
};


ListNoEdit.propTypes = {
  item: PropTypes.object.isRequired,
  editTodo: PropTypes.func.isRequired
}

export default connect(null, { editTodo })(ListNoEdit);
