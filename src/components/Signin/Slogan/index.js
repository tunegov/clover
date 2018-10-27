import React from "react";
import { Text, View } from "react-native";
import I18n from "react-native-i18n";
import styles from './styles'

const Slogan = () => (
    <View style={ styles.textGroup }>
		<Text style={ [ styles.bigText, styles.textRed ] }>
			{I18n.translate("sign_in.start")}
		</Text>
		<Text style={ styles.bigText }>
            {I18n.translate("sign_in.your")}
		</Text>
		<Text style={ styles.bigText }>
            {I18n.translate("sign_in.adventure")}
		</Text>
	</View>
)

export default Slogan;


