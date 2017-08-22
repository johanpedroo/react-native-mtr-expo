import React, { Component, PropTypes } from 'react';
import {Button} from 'react-native-elements';
import tabStyle from '../assets/tab.style';

export default class Tab extends Component {
	constructor(props){
		super(props)
	}

	static propTypes = {
		...Button.propTypes,
		active: PropTypes.string,
	};

	render () {
		return (
			<Button {...this.props}  {...tabStyle.tab(this.props.active === this.props.value)} title={this.props.value} onPress={() => this.props.onPress(this.props.value)}/>
		)
	}
}



