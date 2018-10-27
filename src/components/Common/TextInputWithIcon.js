//@flow

import React, { PureComponent }        from 'react';
import { StyleSheet, TextInput, View } from 'react-native'
import Icon                            from "react-native-vector-icons/FontAwesome5";
export default class TextInputWithIcon extends PureComponent {
	render() {
		console.log(this.props)
		const {
			input,
			meta,
			...inputProps
		} = this.props
		const error = meta.touched && meta.error

		return (
			<View style={ styles.textInput }>
				<Icon style={ styles.icon } name={inputProps.icon} size={ 20 } color={ this.props.iconColor }/>
				<TextInput
					style={ styles.input }
					style={[styles.input, inputProps.customInputStyle, error && styles.errorText]}
					{...inputProps}
					onChangeText={input.onChange}
					onBlur={input.onBlur}
					onFocus={input.onFocus}
					value={input.value}
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
