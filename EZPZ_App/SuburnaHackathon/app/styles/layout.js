import {StyleSheet, Dimensions} from 'react-native';


var {height, width} = Dimensions.get('window');

export default StyleSheet.create({
	inlineView: {
		flexWrap: 'wrap', 
		flexDirection:'row',		
	},
	screenHeightCropView:{
		height:height-120,
		// bottom:10,

	},

	hPadding10: {
		paddingLeft: 10,
		paddingRight: 10,
	},
});
