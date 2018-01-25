import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreateForm from './CreateForm';
import ListItem from './ListItem';
import { fetchList } from './actions';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

  state = {
    loaded: false
  }

  componentDidMount = () => {
    const { loaded } = this.state;
    if (!loaded) {
      this.props.fetchList();
      this.setState({ loaded: !loaded })
    }
    return;
  }

  render() {
    return (
      <div>
        <h1 className="text-center">To-do List</h1>
        <CreateForm items={this.props.items}/>
        <ListItem items={this.props.items}/>
      </div>
    );
  }
}

App.propTypes = {
  items: PropTypes.array.isRequired
}

function mapStateToProps(state){
  return {
    items: state.items
  }
}

export default connect(mapStateToProps, { fetchList })(App);
