import React from "react";
import {
  View,
  StatusBar,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Navigation } from "react-native-navigation";
import { BlurView } from "react-native-blur";
import Icon from "react-native-vector-icons/FontAwesome5";
import Appsee from 'react-native-appsee';

import scooterWhite from "../images/scooterWhite.png";
import grayGradient from "../images/gray-gradient.jpg";
import xiaomi from "../images/xiaomi.png";

export default class ScooterScreen extends React.PureComponent {
  static get options() {
    return {
      topBar: {
        title: {
          text: "Rent a scooter"
        },
        backButton: {
          title: "Back",
          color: "white"
        },
        rightButtons: [
          {
            id: "close",
            text: "Close",
            color: "white"
          }
        ]
      }
    };
  }

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this); // <== Will be automatically unregistered when unmounted
  }

  componentDidMount() {
    Appsee.startScreen("Scooter screen")
  }

  navigationButtonPressed({ buttonId }) {
    if (buttonId === "close") {
      StatusBar.setBarStyle("dark-content", true);
      Navigation.dismissModal(this.props.componentId);
    }
  }

  _rent() {
    StatusBar.setBarStyle("dark-content", true);
    Navigation.dismissModal(this.props.componentId);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          padding: 30,
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Image
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            resizeMode: "contain",
            zIndex: 100
          }}
          source={grayGradient}
        />
        <View
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 101,
            flex: 0,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Image
            style={{
              height: 550,
              resizeMode: "contain",
              marginTop: -100
            }}
            source={scooterWhite}
          />
        </View>
        <BlurView
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 150
          }}
          blurType="dark"
          blurAmount={5}
        />
        <View style={{ zIndex: 300 }}>
          <Image
            style={{
              height: 80,
              resizeMode: "contain"
            }}
            source={xiaomi}
          />
          <Text
            style={{
              fontSize: 30,
              color: "white",
              textAlign: "center",
              marginVertical: 20
            }}
          >
            Xiaomi Mi Scooter
          </Text>

          <View
            style={{
              flex: 0,
              flexDirection: "row",
              justifyContent: "space-around",
              marginHorizontal: 50
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: 60,
                  height: 60,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  backgroundColor: "#45aaf2",
                  borderRadius: 30
                }}
              >
                <Icon name="tachometer-alt" color="white" size={30} />
              </View>
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  textAlign: "center",
                  marginVertical: 10
                }}
              >
                25 km/h
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <View
                style={{
                  width: 60,
                  height: 60,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#26de81",
                  borderRadius: 60
                }}
              >
                <Icon name="road" color="white" size={30} />
              </View>
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  textAlign: "center",
                  marginVertical: 10
                }}
              >
                up to 25 km
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <View
                style={{
                  width: 60,
                  height: 60,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#fed330",
                  borderRadius: 30,
                  zIndex: 304
                }}
              >
                <Icon name="battery-full" color="white" size={30} />
              </View>
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  textAlign: "center",
                  marginVertical: 10
                }}
              >
                90%
              </Text>
            </View>
          </View>
          <View
            style={{
              width: Dimensions.get("window").width - 30,
              height: 1,
              backgroundColor: "#d1d8e0",
              zIndex: 320,
              alignSelf: "center"
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly"
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "white",
                marginVertical: 10
              }}
            >
              Start rent price
              {"     "}
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: "white",
                marginVertical: 10
              }}
            >
              15 UAH
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly"
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "white",
                marginVertical: 10
              }}
            >
              Price per minute
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: "white",
                marginVertical: 10
              }}
            >
              0.3 UAH
            </Text>
          </View>
        </View>
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
            backgroundColor: "#e74c3c",
            shadowOffset: { width: 0, height: -1 },
            shadowColor: "#e74c3c",
            shadowRadius: 0,
            shadowOpacity: 1.0,
            zIndex: 200
          }}
          onPress={this._rent.bind(this)}
        >
          <Text style={{ color: "white", fontSize: 30, fontWeight: "800" }}>
            GO
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
