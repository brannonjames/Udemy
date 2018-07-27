import React from 'react';
import _ from 'lodash';
import { ListView } from 'react-native';
import ListItem from './ListItem';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';


class EmployeeList extends React.Component {
  componentWillMount(){
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps){
    // next Props are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }){
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee){
    return <ListItem employee={employee} />
  }

  render(){
    return (
      <ListView 
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }
  });

  return { employees }
}

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);