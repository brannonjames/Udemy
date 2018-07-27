import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardSection } from './common';
import { View, Text, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import * as actions from '../actions';

class ListItem extends Component {

  componentWillUpdate() {

    // animates any elements that get updated
    LayoutAnimation.spring();
  }

  renderDescription(){
    const { expanded } = this.props;

    if (expanded){
      
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{this.props.library.item.description}</Text>
        </CardSection>
      )
    }
  }

  render(){
    const { title, id } = this.props.library.item;
    const { titleStyle } = styles;
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          { this.renderDescription() }
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id
  return {
    expanded
  }
}

export default connect(mapStateToProps, actions)(ListItem);