import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get( "screen" );

const styles = StyleSheet.create( {
	flex1: {
		flex: 1,
    },
    wrap: {
        width,
        height: height - 80
    },

} )

export default styles;
