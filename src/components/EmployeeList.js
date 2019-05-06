import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, StyleSheet,  } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';
import { Spinner } from './common';

class EmployeeList extends Component {
  state = {
    loading: true
  }

  componentDidMount() {
    this.props.employeesFetch();
    this.setState({ loading: false });
  }

  renderItem(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    const { loading } = this.state;

    console.log('outside of action');
    console.log(this.props.employees);

    return (
      <View style={styles.container}>
        { !loading &&
        <FlatList
          data={this.props.employees}
          renderItem={this.renderItem}
        />
        }
        { loading &&
          <Spinner />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
});

const mapStateToProps = state => {
  var employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};


// const mapStateToProps = ({ auth }) => {
//   const { email, password, error, loading } = auth;

//   return { email, password, error, loading }
// };


export default connect(mapStateToProps, { employeesFetch })(EmployeeList);