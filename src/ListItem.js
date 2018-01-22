import React from "react";

class ListItem extends React.Component {
  render(){
    return (
      <ul className="col-md-4 offset-md-4" >
        <li>
          <span>Make bed</span>
          <button className="btn btn-primary btn-sm float-right">Delete</button>
          <button className="btn btn-primary btn-sm float-right">Edit</button>
        </li>
        <li>
          <input type="text" placeholder="do the laundry" />
          <button className="btn btn-primary btn-sm float-right">Cancel</button>
          <button className="btn btn-primary btn-sm float-right">Save</button>
        </li>
      </ul>
    )
  }
};

export default ListItem;
