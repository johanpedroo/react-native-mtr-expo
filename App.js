import React from 'react'
import Login from './app/Login'
import { StackNavigator } from 'react-navigation';


export default StackNavigator({
	Login: {screen: Login, navigationOptions: { header: false } }
});
