import React from "react";
import {
  View,
  StatusBar,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Navigation } from "react-native-navigation";

import scooterWhite from "../images/scooterWhite.png";

export default class ScooterScreen extends React.PureComponent {
  static get options() {
    return {
      topBar: {
        title: {
          text: "Rent a scooter"
        },
        backButton: {
          title: "Back",
          color: "white"
        },
        rightButtons: [
          {
            id: "close",
            text: "Close",
            color: "white"
          }
        ]
      }
    };
  }

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this); // <== Will be automatically unregistered when unmounted
  }

  navigationButtonPressed({ buttonId }) {
    if (buttonId === "close") {
      StatusBar.setBarStyle("dark-content", true);
      Navigation.dismissModal(this.props.componentId);
    }
  }

  _rent() {
    StatusBar.setBarStyle("dark-content", true);
    Navigation.dismissModal(this.props.componentId);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          padding: 30,
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Image
          style={{ height: 250, resizeMode: "contain", flex: 1 }}
          source={scooterWhite}
        />
        <ScrollView
          style={{
            flex: 1,
            width: 350,
            borderColor: "white",
            borderTopWidth: 2,
            padding: 30
          }}
        >
          <Text style={{ color: "white", fontSize: 18, marginBottom: 20 }}>
            Model: {this.props.model}
          </Text>
          <Text style={{ color: "white", fontSize: 18 }}>
            UUID: {this.props.uuid}
          </Text>
        </ScrollView>
        <TouchableOpacity
          activeOpacity={0.9}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: Dimensions.get("window").width,
            height: 80,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            shadowOffset: { width: 0, height: -2 },
            shadowColor: "gray",
            shadowRadius: 4,
            shadowOpacity: 1.0
          }}
          onPress={this._rent.bind(this)}
        >
          <Text style={{ color: "black", fontSize: 28, fontWeight: "800" }}>
            RENT
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
