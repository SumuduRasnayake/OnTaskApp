/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import DrawerNavigator from './Utils/DrawerNavigator'
import {
  createAppContainer
} from 'react-navigation';
import axios from 'axios'
import AsyncStorage from "@react-native-community/async-storage"

axios.defaults.baseURL='http://192.168.1.100:8080/api'

axios.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      config.headers.Authorization = "Bearer "+token
    }
    console.log("Hey")
    return config
  },
  error => {
    return Promise.reject(error)
  }
);

const App = createAppContainer(DrawerNavigator);

export default App;

