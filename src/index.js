/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import './config/ReactotronConfig';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
});

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Hello!</Text>
      </View>
    </>
  );
};

export default App;
