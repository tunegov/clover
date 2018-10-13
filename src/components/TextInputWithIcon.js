//@flow

import React, { PureComponent }        from 'react';
import { StyleSheet, TextInput, View } from 'react-native'
import Icon                            from "react-native-vector-icons/FontAwesome5";

type Props = {
	icon: string,
	iconColor: string,
	placeholder: string,
	placeholderTextColor: string,
	onChangeText: () => any
}

export default class TextInputWithIcon extends PureComponent<Props> {
	
	render() {
		return (
			<View style={ styles.textInput }>
				<Icon style={ styles.icon } name={ this.props.icon } size={ 20 } color={ this.props.iconColor }/>
				<TextInput
					style={ styles.input }
					placeholder={ this.props.placeholder }
					placeholderTextColor={ this.props.placeholderTextColor }
					onChangeText={ this.props.onChangeText }
					underlineColorAndroid="transparent"
					{ ...this.props }
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create( {
	textInput: {
		flex: 0,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'baseline',
		borderBottomWidth: 1,
		borderBottomColor: 'white',
		paddingVertical: 5,
		marginVertical: 10
	},
	icon: {
		padding: 10
	},
	input: {
		flex: 1,
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingLeft: 0,
		color: '#d2dae2'
	}
} )
