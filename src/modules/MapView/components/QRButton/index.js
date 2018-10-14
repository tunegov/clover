import React from 'react';
import Icon from "react-native-vector-icons/FontAwesome5";
import { View, TouchableOpacity } from "react-native"
import styles from './styles'

const Button = ({ onPress }) => (
  <View
          style={styles.container}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={onPress}
          >
            <Icon name="qrcode" size={35} color="white" />
          </TouchableOpacity>
        </View>  
)

export default Button;