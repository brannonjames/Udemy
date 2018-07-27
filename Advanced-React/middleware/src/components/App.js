import React from 'react';
import {Route, Link} from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import * as actions from 'actions';
import {connect} from 'react-redux';
import CommentList from 'components/CommentList';


class App extends React.Component {
  renderButton(){
    if(this.props.auth){
      return (
        <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
      );
    } else {
      return (
        <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
      )
    }
  }
  renderHeader(){
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/post">Post A Comment</Link></li>
        <li>{this.renderButton()}</li>
      </ul>
    )
  }
  render(){
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route exact path="/" component={CommentList} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, actions)(App);