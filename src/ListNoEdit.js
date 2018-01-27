import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editTodo, deleteTodo } from './actions';

class ListNoEdit extends React.Component {

  state = {
    active: false
  }

  toggleClass = (e) => {
    this.setState({ active: !this.state.active })
  }

  render(){
    const { item } = this.props;
    const { _id } = this.props.item;

    return (
      <li>
        <span className={this.state.active ? 'done' : null} onClick={this.toggleClass}>{item.item}</span>
        <button className="btn btn-danger btn-sm float-right" onClick={() => this.props.deleteTodo({_id})}>Delete</button>
        <button className="btn btn-info btn-sm float-right" onClick={() => this.props.editTodo(_id)}>Edit</button>
      </li>
    )
  }
};

ListNoEdit.propTypes = {
  item: PropTypes.object.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default connect(null, { editTodo, deleteTodo })(ListNoEdit);
