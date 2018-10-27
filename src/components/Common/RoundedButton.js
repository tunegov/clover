//@flow

import React, {PureComponent} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'

type Props = {
	color: string,
	text: string,
	onPress: () => any
}

export default class RoundedButton extends PureComponent<Props> {
	
	_getColorStyles() {
		let color = this.props.color || 'black';
		return {
			backgroundColor: color,
			shadowOffset: { width: 0, height: 0 },
			shadowColor: color,
			shadowRadius: 3,
			shadowOpacity: 1.0,}
	}
	
	render() {
		return (
				<TouchableOpacity onPress={this.props.onPress} style={[styles.button, this._getColorStyles()]} activeOpacity={0.7}>
					<Text style={styles.text}>
						{this.props.text}
					</Text>
				</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		width: '100%',
		height: 60,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 30,
		
	},
	text: {
		fontSize: 22,
		fontWeight: '700',
		color: 'white'
	}
})
