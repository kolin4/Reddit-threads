import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainApp from './components/mainApp';

import Header from './components/header';

export default class App extends React.Component {

  render() {

    return (
      <View style={styles.container}>
         <MainApp/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(240, 241, 243)',

  },
});
