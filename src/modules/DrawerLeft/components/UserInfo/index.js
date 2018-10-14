import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";
import avatar from "../../../Common/resources/images/avatar.png";
import I18n from 'react-native-i18n'

const UserInfo = ({ name, avatarUrl, rides }) => (
    <View style={styles.container}>
    <View style={styles.flex1}>
        <Image source={avatar} style={styles.avatar}/>
    </View>
    <View style={styles.userInfo}>
      <Text style={styles.text}>
        {name}
      </Text>
      <Text style={styles.text}>
        {I18n.t('drawer.rides')}: <Text style={styles.bold}>{rides}</Text>
      </Text>
    </View>
  </View>
)

export default UserInfo;