import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
//import { R } from 'ramda';
import _ from 'lodash';
import { employeesFetch } from '../actions';
import { HeaderButton } from './common';
import ListEmployee from './ListEmployee';


class EmployeeList extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <HeaderButton onPress={() => navigation.navigate('employeeCreate')}>
        Add
      </HeaderButton>
    )
  });

  componentWillMount() {
    this.props.employeesFetch();
  }

  keyExtractor(item) {
    return item.uid;
  }
  renderItem({ item }) {
    return <ListEmployee employee={item} navigation={this.props.navigation} />;
  }
  render() {
    return (
      <FlatList
      data={this.props.employees}
      renderItem={this.renderItem.bind(this)} // Only for test
      keyExtractor={this.keyExtractor}
      navigation={this.props.navigation}
      />
    );
  }
}
const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => ({ ...val, uid }));
  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
