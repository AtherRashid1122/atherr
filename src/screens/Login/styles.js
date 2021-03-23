import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    color: 'black',
    textAlign: 'center',
  },
  main: {
    height: height / 2,

    justifyContent: 'center',
  },
});
export default styles;
