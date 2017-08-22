import React, {Component} from 'react';
import {View, Image, ScrollView} from 'react-native';
import {Text, Button, Header} from 'react-native-elements';
import HeaderProfile from '../../components/HeaderProfile'
export default class Home extends Component {
	constructor (props) {
		super(props)
	}


	render () {
		return (
			<View style={{flex: 1}}>
				<Header backgroundColor="#e3e3e3" leftComponent={<HeaderProfile/>} outerContainerStyles={{elevation: 5, height: 80}}/>
				<ScrollView contentContainerStyle={{flexGrow: 1}}>
					<ScrollView contentContainerStyle={{flexGrow: 1}}>
					</ScrollView>
				</ScrollView>
			</View>
		)
	}
}
