import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import I18n from "react-native-i18n";
import styles from "./styles";
import RoundedButton from "../../../Common/components/RoundedButton";

const ButtonsGroup = ({ signUp, logIn}) => (
	<View style={ styles.bottom }>
		<RoundedButton text={ I18n.translate("sign_in.login") } color={ '#ee5253' } onPress={ logIn }/>
		<View style={ styles.signUpGroup }>
			<Text>
				{I18n.translate("sign_in.no_account")}
			</Text>
			<TouchableOpacity activeOpacity={ 0.7 } onPress={ signUp }>
				<Text style={ styles.signUpButton }>
					{I18n.translate("sign_in.signup_here")}
				</Text>
			</TouchableOpacity>
		</View>
	</View>
)

export default ButtonsGroup;


