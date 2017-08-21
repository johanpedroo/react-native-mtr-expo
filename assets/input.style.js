import theme from './variables'
const input = {
	inputStyle: {
		paddingRight: 10,
		width: '100%'
	},
	containerStyle: {
		width: '100%',
		marginLeft: 0
	}
};
export default input;
export const inputWithIcon = {
	inputStyle: {
		...input.inputStyle,
		paddingLeft: 45,
		fontSize: 18,
		height: 50
	},
	containerStyle: {
		...input.containerStyle,
	}
};
