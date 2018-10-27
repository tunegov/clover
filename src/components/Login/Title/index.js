import React                      from 'react';
import { View, Text } 			  from 'react-native'
import Icon                       from "react-native-vector-icons/FontAwesome5";
import styles                     from './styles'


const Title = () => (
    <View style={ styles.title }>
		<Text style={ styles.titleText }>
			Log in
		</Text>
	</View>
)

export default Title;