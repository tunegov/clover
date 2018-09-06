/* @flow */

import * as React from "react";
import { Animated, View, StyleSheet, MaskedViewIOS } from "react-native";
import { Navigation } from "react-native-navigation";

import logo from "../images/clover.png";

export default class Loader extends React.PureComponent {
  static defaultProps = {
    isLoaded: false
  };

  state = {
    loadingProgress: new Animated.Value(0),
    animationDone: false,
    imageStyle: {},
    appStyle: {}
  };

  componentDidMount() {
    setTimeout(() => {
      Animated.timing(this.state.loadingProgress, {
        toValue: 100,
        duration: 1500,
        useNativeDriver: true
      }).start(() => {
        this.setState({
          animationDone: true
        });
        Navigation.dismissOverlay(this.props.componentId);
      });
    }, 2000);
  }

  render() {
    const opacityClearToVisible = {
      opacity: this.state.loadingProgress.interpolate({
        inputRange: [0, 15, 30],
        outputRange: [0, 0, 1],
        extrapolate: "clamp"
      })
    };

    const imageScale = {
      transform: [
        {
          scale: this.state.loadingProgress.interpolate({
            inputRange: [0, 10, 100],
            outputRange: [1, 0.8, 120]
          })
        }
      ]
    };

    const appScale = {
      transform: [
        {
          scale: this.state.loadingProgress.interpolate({
            inputRange: [0, 7, 100],
            outputRange: [1.1, 1.03, 1]
          })
        }
      ]
    };

    const opacityAnimation = {
      opacity: this.state.loadingProgress.interpolate({
        inputRange: [0, 30, 40],
        outputRange: [1, 0.6, 0]
      })
    };

    const fullScreenBackgroundLayer = this.state.animationDone ? null : (
      <View style={[StyleSheet.absoluteFill, { backgroundColor: "#0abde3" }]} />
    );
    const fullScreenWhiteLayer = (
      <View style={[StyleSheet.absoluteFill, styles.fullScreenWhiteLayer]} />
    );

    const { imageStyle, appStyle } = this.state;

    return (
      <Animated.View style={[opacityAnimation, styles.fullScreen]}>
        {fullScreenBackgroundLayer}
        <MaskedViewIOS
          style={{ flex: 1 }}
          maskElement={
            <View style={styles.centeredFullScreen}>
              <Animated.Image
                style={[styles.maskImageStyle, imageScale, imageStyle]}
                source={logo}
              />
            </View>
          }
        >
          {fullScreenWhiteLayer}
          <Animated.View
            style={[
              opacityClearToVisible,
              appScale,
              { flex: 1, alignItems: "center", justifyContent: "center" },
              appStyle
            ]}
          >
            {/* <MapViewPage /> */}
          </Animated.View>
        </MaskedViewIOS>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1
  },
  centeredFullScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  maskImageStyle: {
    height: 150,
    resizeMode: "contain",
    tintColor: "white"
  },
  fullScreenWhiteLayer: {
    backgroundColor: "white"
  }
});

const API = "AIzaSyBZGJkLNs7LT2R6i7-ZgN1UMxjSZeC6LNU";
