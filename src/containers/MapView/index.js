import React, { PureComponent } from "react";
import {
  View,
  StatusBar,
  Dimensions,
  StyleSheet
} from "react-native";
import MapView from "react-native-maps";
import { Navigation } from "react-native-navigation";
import Drawer from "../../components/Common/Drawer";
import QRButton from "../../components/MapView/QRButton";
import MenuButton from "../../components/MapView/MenuButton";
import * as ROUTES from "../../constants";
import styles from "./containerStyles";
import { Answers } from 'react-native-fabric';

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

  constructor() {
    super();
    this.redirectTo = this.redirectTo.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this)
  }
  componentDidMount() {

    Answers.logContentView("Map view", "SCREEN", ROUTES.MAP_VIEW)

    setTimeout(() => {
      navigator.geolocation.getCurrentPosition(position => {
        let region = {
          latitude: Number(position.coords.latitude),
          longitude: Number(position.coords.longitude),
          latitudeDelta: 0.01,
          longitudeDelta: 0.01 * (width / height)
        };
        setTimeout(() => {
          this.mapRef.animateToRegion(region, 1700);
        }, 2000);
      }, null);
    }, 0);
  }

  redirectTo() {
    StatusBar.setBarStyle("light-content", true);
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: ROUTES.QR_SWIPER,
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

  toggleMenu() {
    Drawer.open("left");
  }

  render() {
    return (
      <View style={styles.container} >
        <MenuButton onPress={this.toggleMenu} />
        <QRButton onPress={this.redirectTo} />
        <MapView
          ref={mapRef => (this.mapRef = mapRef)}
          style={StyleSheet.absoluteFillObject}
          showsUserLocation
        />
      </View>
    );
  }
}
