import React from "react";
import { View, StatusBar, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";
import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class QRCodeScreen extends React.PureComponent {
  static get options() {
    return {
      topBar: {
        title: {
          text: "QR code"
        },
        leftButtons: [
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

  _redirectTo() {
    Navigation.push(this.props.componentId, {
      component: {
        name: "clover.rent.QRCodeScanner",
        options: {
          topBar: {
            title: {
              text: "QR scanner"
            }
          }
        }
      }
    });
  }

  render() {
    return (
      <View
        style={[
          {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white"
          }
        ]}
      >
        <LottieView
          style={{ height: 400 }}
          autoPlay
          loop={true}
          source={require("../resources/qr_code.json")}
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 20,
            right: 20,
            borderRadius: 50,
            width: 65,
            height: 65,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            shadowOffset: { width: -1, height: 2 },
            shadowColor: "gray",
            shadowOpacity: 1.0
          }}
          onPress={this._redirectTo.bind(this)}
        >
          <Icon name="arrow-right" size={30} color="white" />
        </TouchableOpacity>
      </View>
    );
  }
}
