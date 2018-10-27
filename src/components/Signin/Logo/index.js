import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";
import logo from "../../../resources/images/CloverLogoBlack.png";

const Logo = () => (
	<View style={ styles.logo }>
		<Image source={ logo } style={ styles.logoImage }/>
	</View>
)

export default Logo;


