//@flow

import React, { PureComponent }              from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native'

type Props = {
	text: string,
	onChangeText: () => any
}

export default class TextInputWithText extends PureComponent<Props> {
	
	render() {
		return (
			<View style={ styles.textInput }>
				<Text style={ styles.text }>
					{ this.props.text }
				</Text>
				<TextInput
					style={ styles.input }
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
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'baseline',
		borderBottomWidth: 1,
		borderBottomColor: 'white',
		paddingVertical: 5,
		marginVertical: 10
	},
	text: {
		color: '#d2dae2',
		textTransform: 'uppercase',
		marginBottom: 10
	},
	input: {
		fontSize: 16,
		color: '#fff',
		width: '100%',
		zIndex: 1000
	}
} )
