import React                      from 'react';
import { View, Text } 			  from 'react-native'
import styles                     from './styles'
import I18n 					  from 'react-native-i18n'


const Title = () => (
    <View style={ styles.title }>
		<Text style={ styles.titleText }>
			{I18n.t("auth.login")}
		</Text>
	</View>
)

export default Title;