import {StyleSheet, Dimensions} from 'react-native';

let {h, w} = Dimensions.get("window");


export default StyleSheet.create({
	mainContainer: {
	    backgroundColor: 'orange',
	    height: "100%",
	    width: 250,
	},
});

// module.exports = {bg};