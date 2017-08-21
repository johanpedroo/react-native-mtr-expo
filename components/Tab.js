import React, { Component, PropTypes } from 'react';
import {Button} from 'react-native-elements';
import styles from '../assets/tab.style';

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
			<Button {...this.props}  {...styles.tab(this.props.active === this.props.value)} title={this.props.value} onPress={() => this.props.onPress(this.props.value)}/>
		)
	}
}



