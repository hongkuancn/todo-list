import React from "react";
import PropTypes from 'prop-types';
import ListEdit from './ListEdit';
import ListNoEdit from './ListNoEdit';

class ListItem extends React.Component {

  render(){

    const list = (
      this.props.items.map(item => {
        if (item.isEditing){
          return <ListEdit key={item._id} item={item} />
        }
        return <ListNoEdit key={item._id} item={item} />
      })
    );

    return (
      <ul className="col-md-4 offset-md-4" >
        {list}
      </ul>
    )

  }
};

ListItem.propTypes = {
  items: PropTypes.array.isRequired
}

export default ListItem;
