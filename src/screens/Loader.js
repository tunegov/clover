import React from "react";
import { View, Animated, Easing } from "react-native";
import LottieView from "lottie-react-native";
import { Navigation } from "react-native-navigation";

export default class BasicExample extends React.PureComponent {
  state = {
    loadingProgress: new Animated.Value(0),
    progress: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear
    }).start(() => {
      Animated.timing(this.state.loadingProgress, {
        toValue: 100,
        duration: 500,
        useNativeDriver: true
      }).start(() => {
        Navigation.dismissOverlay(this.props.componentId);
      });
    });
  }

  render() {
    const visibleToClear = {
      opacity: this.state.loadingProgress.interpolate({
        inputRange: [0, 100],
        outputRange: [1, 0],
        extrapolate: "clamp"
      })
    };

    return (
      <Animated.View style={[{ flex: 1 }, visibleToClear]}>
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
            progress={this.state.progress}
            style={{ height: 270 }}
            loop={false}
            source={require("../resources/loader.json")}
          />
        </View>
      </Animated.View>
    );
  }
}
