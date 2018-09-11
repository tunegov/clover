import React, { PureComponent } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
  Dimensions
} from "react-native";
import MapView from "react-native-maps";
import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/FontAwesome5";
import Drawer from "../utils/Drawer";

const { width, height } = Dimensions.get("window");

export default class MapViewPage extends PureComponent {
  static get options() {
    return {
      _statusBar: {
        backgroundColor: "transparent",
        style: "dark",
        drawBehind: true
      },
      topBar: {
        title: {
          text: "Home"
        },
        drawBehind: true,
        visible: false,
        animate: false
      }
    };
  }

  componentDidMount() {
    setTimeout(() => {
      navigator.geolocation.getCurrentPosition(position => {
        let region = {
          latitude: Number(position.coords.latitude),
          longitude: Number(position.coords.longitude),
          latitudeDelta: 0.01,
          longitudeDelta: 0.01 * (width / height)
        };
        setTimeout(() => {
          this.mapRef.animateToRegion(region, 1000);
        }, 2000);
      }, null);
    }, 0);
  }

  _redirectTo() {
    StatusBar.setBarStyle("light-content", true);
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: "clover.rent.QRSwiper",
              options: {
                animations: {
                  showModal: {
                    waitForRender: true
                  }
                }
              }
            }
          }
        ]
      }
    });
  }

  _toggleMenu() {
    Drawer.open("left");
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            position: "absolute",
            top: 15,
            left: 0,
            zIndex: 100,
            width: 75,
            height: 75,
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
          onPress={this._toggleMenu.bind(this)}
        >
          <Icon name="bars" size={25} color="black" />
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 12
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              position: "absolute",
              bottom: 20,
              right: 20,
              borderRadius: 50,
              width: 75,
              height: 75,
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
            <Icon name="qrcode" size={35} color="white" />
          </TouchableOpacity>
        </View>
        <MapView
          ref={mapRef => (this.mapRef = mapRef)}
          style={StyleSheet.absoluteFillObject}
          showsUserLocation
        />
      </View>
    );
  }
}
