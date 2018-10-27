import React                      from 'react';
import { View, TouchableOpacity } from 'react-native'
import Icon                       from "react-native-vector-icons/FontAwesome5";
import styles                     from './styles'


const BackButton = ({ onPress }) => (
    <View style={ styles.backButton }>
	    <TouchableOpacity activeOpacity={ 0.7 } onPress={ onPress }>
			<Icon name="arrow-left" size={ 20 } color="white"/>
		</TouchableOpacity>
	</View>
)

export default BackButton;