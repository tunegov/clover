import Swiper from "react-native-swiper";
import React from "react";
import { View, StatusBar, TouchableOpacity } from "react-native";
import { Navigation } from "react-native-navigation";
import QRCodeScreen from "./QRCodeScreen";
import QRCodeScanner from "./QRCodeScanner";

export default class QRSwiper extends React.PureComponent {
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

  state = {
    isCameraActive: false
  };

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

  _nextScreen() {
    if (this.swiper) {
      this.swiper.scrollBy(1, true);
      this.setState({
        isCameraActive: true
      });
    }
  }

  _goToScooterPage({ model, uuid }) {
    Navigation.push(this.props.componentId, {
      component: {
        name: "clover.rent.ScooterScreen",
        passProps: {
          model,
          uuid
        },
        options: {
          push: {
            waitForRender: true
          }
        }
      }
    });
  }

  render() {
    return (
      <Swiper
        style={{ flex: 1 }}
        horizontal={false}
        loop={false}
        showsButtons={false}
        showsPagination={false}
        ref={swiper => (this.swiper = swiper)}
      >
        <QRCodeScreen next={this._nextScreen.bind(this)} />
        <QRCodeScanner
          onFindBarcode={this._goToScooterPage.bind(this)}
          isCameraActive={this.state.isCameraActive}
        />
      </Swiper>
    );
  }
}
