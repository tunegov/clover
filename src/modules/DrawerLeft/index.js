import React from "react";
import { View, ScrollView, StatusBar } from "react-native";
import { Navigation } from "react-native-navigation";
import Drawer from "../Common/components/Drawer";
import MenuSection from './components/MenuSection';
import UserInfo from './components/UserInfo';
import styles from './containerStyles';
import I18n from 'react-native-i18n'

export default class DrawerLeft extends React.PureComponent {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this); // <== Will be automatically unregistered when unmounted
  }

  componentDidDisappear() {
    StatusBar.setBarStyle("dark-content", false);
  }

  componentDidAppear() {
    StatusBar.setBarStyle("light-content", false);
  }

  _redirectTo() {
    Drawer.close("left");
  }

  _getMenuItems() {
    return [
      { title: I18n.translate("drawer.payments"), iconName: 'credit-card', onPress: () => this._redirectTo() },
      { title: I18n.translate("drawer.ridesHistory"), iconName: 'history', onPress: () => this._redirectTo()},
      { title: I18n.translate("drawer.settings"), iconName: 'cog', onPress: () => this._redirectTo()},
      { title: I18n.translate("drawer.about"), iconName: 'info-circle', onPress: () => this._redirectTo()},
    ]
  }

  getNavigationLayout() {
    return this._getMenuItems().map((item, index) => (
      <MenuSection 
        key={index}
        onPress={item.onPress}
        title={item.title} 
        iconName={item.iconName}/>
    ))
  }

  render() {
    return (
      <View style={styles.container}>
        <UserInfo rides={17} name={'John Doe'}/>
        <ScrollView style={styles.menuItemsList}>
          {this.getNavigationLayout()}
        </ScrollView>
      </View>
    );
  }
} ;
