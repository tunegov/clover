import React, { PureComponent } from "react";
import { StyleSheet, View, Button } from "react-native";
import MapView from "react-native-maps";
import { Navigation } from "react-native-navigation";

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
          text: "My Screen"
        },
        largeTitle: {
          visible: false
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
        this.mapRef.animateToCoordinate(tempCoords, 1);
      }, null);
    }, 0);
  }

  _redirectTo() {
    Navigation.push(this.props.componentId, {
      component: {
        name: "clover.rent.ScrollingMapView",
        options: {
          topBar: {
            title: {
              text: "Map"
            }
          }
        }
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
          <Button title="Tap me" onPress={this._redirectTo.bind(this)} />
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
