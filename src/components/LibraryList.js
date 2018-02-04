import React, { Component } from 'react';
import { connect } from 'react-redux';

//import { View } from 'react-native';

class LibraryList extends Component {
  render() {
    console.log(this.props);
    return null;
  }
}

const mapStateToProps = state => {
  //return (object) value gets passed as prop to Component, filters the state
  return { libraries: state.libraries };
};

//connect returns a function, that function is called with LibraryList
export default connect(mapStateToProps)(LibraryList);
