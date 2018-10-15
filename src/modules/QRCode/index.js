import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import LottieView from "lottie-react-native";
import I18n from "react-native-i18n";
export default class QRCodeScreen extends React.PureComponent {
  _redirectTo() {
    this.props.next && this.props.next();
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
        <Text
          style={{ fontSize: 18, marginHorizontal: 30, fontFamily: 'Montserrat',fontWeight: '500', textAlign: "center" }}
        >
          {I18n.t("qr.scanQR")}
        </Text>
        <LottieView
          style={{ height: 400, marginLeft: 10 }}
          autoPlay
          loop={false}
          source={require("../Common/resources/qr_code.json")}
        />
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
            backgroundColor: "black",
            shadowOffset: { width: 0, height: -1 },
            shadowColor: "gray",
            shadowRadius: 2,
            shadowOpacity: 1.0
          }}
          onPress={this._redirectTo.bind(this)}
        >
          <Text style={{ color: "white", fontSize: 24, fontWeight: "600",  fontFamily: 'Montserrat', }}>
            {I18n.t("qr.ok")}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
