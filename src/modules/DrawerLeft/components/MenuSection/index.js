import React from 'react';
import Icon from "react-native-vector-icons/FontAwesome5";
import { Text, TouchableOpacity } from "react-native"
import styles from './styles'

const MenuSection = ({ onPress, title, iconName }) => (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={styles.container}
    >
      <Icon name={iconName} size={25} color="white" />
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
)

export default MenuSection;