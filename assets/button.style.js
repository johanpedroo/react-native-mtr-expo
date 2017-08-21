import theme from './variables';

const button = {
	buttonStyle: {
		marginLeft: 0,
		marginRight: 0,
		height: 40,
		borderRadius: 3
	},
	textStyle: {
		fontWeight: 'bold'
	},
	containerViewStyle: {
		paddingRight: 0,
		paddingLeft: 0,
		marginLeft: 0,
		marginRight: 0
	}
};


export default button

export const transparent = {
	...button,
	buttonStyle: {
		backgroundColor: 'transparent',
	},
	textStyle: {
		color: theme.brandColor
	},
	containerViewStyle: {

	}
};
export const primary = {
	backgroundColor: theme.primary
};
