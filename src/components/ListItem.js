import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';


class ListItem extends Component {

  renderDescription() {
    const { library, expanded } = this.props;
      if (expanded) {
      return (
        <Text>{library.description}</Text>
      );
    }
  }

  render() {
    const { id, title } = this.props.library;
    const { titleStyle } = styles;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

//ownprops are the props that are passed to components we're wrapping
//Allows us to remove logic from component
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded };
};

//called with mapStateToProps, then bind action creators to component
//no map state to props so we pass null
export default connect(mapStateToProps, actions)(ListItem);
