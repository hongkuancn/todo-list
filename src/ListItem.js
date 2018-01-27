import React from "react";
import PropTypes from 'prop-types';
import ListEdit from './ListEdit';
import ListNoEdit from './ListNoEdit';

class ListItem extends React.Component {

  render(){

    const { items } = this.props;

    const list = (
      items.map(item => {
        if(item.isEditing){
          return <ListEdit key={item._id} item={item} />
        } else {
          return <ListNoEdit key={item._id} item={item} />
        }
      })
    );

    const emptyList = (
      <p>Add some todo items now!</p>
    )

    return (
      <ul className="col-md-4 offset-md-4" >
        {items.length > 0 ? list : emptyList}
      </ul>
    )

  }
};

ListItem.propTypes = {
  items: PropTypes.array.isRequired
}

export default ListItem;
