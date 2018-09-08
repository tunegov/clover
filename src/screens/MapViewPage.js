import React, { PureComponent } from "react";
import { StyleSheet, View, TouchableOpacity, StatusBar } from "react-native";
import MapView from "react-native-maps";
import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/FontAwesome5";

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
        let tempCoords = {
          latitude: Number(position.coords.latitude),
          longitude: Number(position.coords.longitude)
        };
        setTimeout(() => {
          this.mapRef.fitToCoordinates([tempCoords]);
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
              name: "clover.rent.QRCodeScreen",
              options: {
                topBar: {
                  title: {
                    text: "QR code"
                  }
                }
              }
            }
          }
        ]
      }
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
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
            <Icon name="qrcode" size={30} color="white" />
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
