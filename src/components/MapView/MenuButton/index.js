import React from 'react';
import Icon from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native"
import styles from './styles'

const MenuButton = ({ onPress }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    style={styles.container}
    onPress={onPress}
  >       
    <Icon name="bars" size={25} color="black" />
  </TouchableOpacity> 
)

export default MenuButton;