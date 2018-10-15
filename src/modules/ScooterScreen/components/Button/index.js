import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";


const Button = ({ onPress }) => (
  <TouchableOpacity
    activeOpacity={0.9}
    style={styles.container}
    onPress={onPress}
  >
    <Text style={styles.text}>
      GO
    </Text>
  </TouchableOpacity>
)

export default Button;