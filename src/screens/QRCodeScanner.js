import React, { PureComponent } from "react";

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  Platform,
  Dimensions,
  Alert
} from "react-native";

import QRCodeScanner from "react-native-qrcode-scanner";
import Permissions from "react-native-permissions";
import { RNCamera as Camera } from "react-native-camera";
import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/FontAwesome5";

const PERMISSION_AUTHORIZED = "authorized";
const CAMERA_PERMISSION = "camera";

export default class ScanScreen extends PureComponent {
  state = {
    isBarcodeFound: false
  };

  _handleBarCodeRead({ data }) {
    if (!this.props.isCameraActive) {
      return;
    }
    if (!this.state.isBarcodeFound) {
      this.setState(
        {
          isBarcodeFound: true
        },
        () => {
          try {
            data = JSON.parse(data);
            this.props.onFindBarcode && this.props.onFindBarcode(data);
          } catch (e) {
            console.log(e);
          }
        }
      );
    }
  }

  componentDidMount() {
    if (Platform.OS === "ios") {
      Permissions.request(CAMERA_PERMISSION).then(response => {
        this.setState({
          isAuthorized: response === PERMISSION_AUTHORIZED,
          isAuthorizationChecked: true
        });
      });
    } else if (Platform.OS === "android") {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
        title: "Info",
        message: "Need camera permission"
      }).then(granted => {
        const isAuthorized =
          Platform.Version >= 23
            ? granted === PermissionsAndroid.RESULTS.GRANTED
            : granted === true;

        this.setState({ isAuthorized, isAuthorizationChecked: true });
      });
    } else {
      this.setState({ isAuthorized: true, isAuthorizationChecked: true });
    }
  }

  _renderCameraMarker() {
    return (
      <View style={styles.cameraMaskWrapper}>
        <View
          style={[
            styles.border,
            {
              borderBottomWidth: 0,
              borderRightWidth: 0
            }
          ]}
        />
        <View style={styles.noBorder} />
        <View
          style={[
            styles.border,
            {
              borderTopWidth: 0,
              borderRightWidth: 0
            }
          ]}
        />
        <View style={styles.noBorder} />
        <View style={styles.noBorder} />
        <View style={styles.noBorder} />
        <View
          style={[
            styles.border,
            {
              borderBottomWidth: 0,
              borderLeftWidth: 0
            }
          ]}
        />
        <View style={styles.noBorder} />
        <View
          style={[
            styles.border,
            {
              borderTopWidth: 0,
              borderLeftWidth: 0
            }
          ]}
        />
      </View>
    );
  }

  _renderNextButton() {
    if (!this.state.showNextButton) {
      return null;
    }

    return (
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
          backgroundColor: "white",
          shadowOffset: { width: -1, height: 2 },
          shadowColor: "gray",
          shadowOpacity: 1.0
        }}
        onPress={this._redirectTo.bind(this)}
      >
        <Icon name="check" size={30} color="black" />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black"
        }}
      >
        <Camera
          type={"back"}
          style={{
            flex: 0,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
            height: Dimensions.get("window").width,
            width: Dimensions.get("window").width
          }}
          onBarCodeRead={this._handleBarCodeRead.bind(this)}
        >
          {this._renderCameraMarker()}
        </Camera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: "#777"
  },
  textBold: {
    fontWeight: "500",
    color: "#000"
  },
  buttonText: {
    fontSize: 21,
    color: "rgb(0,122,255)"
  },
  buttonTouchable: {
    padding: 16
  },
  cameraMaskWrapper: {
    zIndex: 1000,
    margin: Dimensions.get("window").width / 8,
    backgroundColor: "transparent",
    flex: 1,
    flexWrap: "wrap"
  },
  border: {
    borderWidth: 2,
    borderColor: "white",
    height: Dimensions.get("window").width / 4,
    width: Dimensions.get("window").width / 4
  },
  noBorder: {
    height: Dimensions.get("window").width / 4,
    width: Dimensions.get("window").width / 4
  }
});
