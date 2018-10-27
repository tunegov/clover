import React from "react";
import { View, Animated, Easing, StatusBar } from "react-native";
import LottieView from "lottie-react-native";
import { Navigation } from "react-native-navigation";
import SplashScreen from "react-native-splash-screen";
import styles from "./containerStyles";

export default class Splash extends React.PureComponent {
  state = {
    loadingProgress: new Animated.Value(0),
    progress: new Animated.Value(0)
  };

  componentDidMount() {
    SplashScreen.hide();

    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true
    }).start(() => {
      StatusBar.setBarStyle("dark-content", true);

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
      <Animated.View style={[styles.flex1, visibleToClear]} >
        <View
          style={styles.container}
        >
          <LottieView
            progress={this.state.progress}
            style={styles.lottieView}
            loop={false}
            source={require("../../resources/loader.json")}
          />
        </View>
      </Animated.View>
    );
  }
}
