import React from "react";
import { View, Animated } from "react-native";
import LottieView from "lottie-react-native";
import { Navigation } from "react-native-navigation";

export default class BasicExample extends React.PureComponent {
  render() {
    return (
      <View
        style={[
          {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black"
          }
        ]}
      >
        <LottieView
          style={{ height: 270 }}
          loop={false}
          source={require("../resources/loader.json")}
        />
      </View>
    );
  }
}
