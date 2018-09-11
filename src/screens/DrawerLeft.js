import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Navigation } from "react-native-navigation";
import Drawer from "../utils/Drawer";

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

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "space-between"
        }}
      >
        <View
          style={{
            height: 80,
            width: 250,
            margin: 20,
            marginTop: 30,
            flexDirection: "row"
          }}
        >
          <View style={{ flex: 1 }}>
            <Icon name="user-circle" size={75} color="white" />
          </View>
          <View style={{ flex: 2, justifyContent: "center", height: 85 }}>
            <Text
              style={{
                color: "white",
                marginLeft: 0,
                fontSize: 18,
                marginBottom: 10
              }}
            >
              Sergey Tunegov
            </Text>
            <Text style={{ color: "white", marginLeft: 0, fontSize: 18 }}>
              Rides: 1337
            </Text>
          </View>
        </View>
        <ScrollView
          style={{
            paddingTop: 20,
            flex: 3,
            borderColor: "white",
            borderTopWidth: 1,
            paddingLeft: 10
          }}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={this._redirectTo.bind(this)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10
            }}
          >
            <Icon name="credit-card" size={25} color="white" />
            <Text style={{ color: "white", marginLeft: 20, fontSize: 18 }}>
              Payments
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={this._redirectTo.bind(this)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10
            }}
          >
            <Icon name="history" size={25} color="white" />
            <Text style={{ color: "white", marginLeft: 20, fontSize: 18 }}>
              Rides history
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={this._redirectTo.bind(this)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10
            }}
          >
            <Icon name="cog" size={25} color="white" />
            <Text style={{ color: "white", marginLeft: 20, fontSize: 18 }}>
              Settings
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={this._redirectTo.bind(this)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10
            }}
          >
            <Icon name="info-circle" size={25} color="white" />
            <Text style={{ color: "white", marginLeft: 20, fontSize: 18 }}>
              About
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
9;
