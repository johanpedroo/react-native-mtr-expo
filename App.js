import React from 'react'
import Login from './app/Login'
import Home from './app/Home'
import {StackNavigator} from 'react-navigation';
import {StatusBar} from 'react-native';

StatusBar.setHidden(true)

export default StackNavigator({
	Login: {screen: Login},
	Home: {screen: Home}
},{
	navigationOptions:{header: false}
});
