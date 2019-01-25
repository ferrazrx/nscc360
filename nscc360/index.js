import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';
import App from './components/App'

export default class nscc360 extends React.Component {
  render() {
    return (
      <View>
       <App tour="tour.json" />
      </View>
    );
  }
};

AppRegistry.registerComponent('nscc360', () => nscc360);
