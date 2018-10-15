import React from "react";
import {
  View,
  StatusBar,
  Text,
  Image,
  Dimensions
} from "react-native";
import { Navigation } from "react-native-navigation";
import { BlurView } from "react-native-blur";
import Icon from "react-native-vector-icons/FontAwesome5";
import Button from "./components/Button";
import I18n from "react-native-i18n";

import scooterWhite from "../Common/resources/images/scooterWhite.png";
import grayGradient from "../Common/resources/images/gray-gradient.jpg";
import xiaomi       from "../Common/resources/images/xiaomi.png";

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
              fontFamily: 'Montserrat',
              fontSize: 30,
              color: "white",
              textAlign: "center",
              fontWeight: '700',
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
                  fontFamily: 'Montserrat',
                  marginVertical: 10,
                  fontWeight: '700',
                }}
              >
                25 {I18n.translate( "scooter_info.kmH")}
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
                  fontFamily: 'Montserrat',
                  color: "white",
                  textAlign: "center",
                  marginVertical: 10,
                  fontWeight: '700',
                }}
              >
                {I18n.t( "scooter_info.upTo", {d: "30"})}
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
                  fontFamily: 'Montserrat',
                  textAlign: "center",
                  marginVertical: 10,
                  fontWeight: '700',
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
                fontWeight: '700',
                fontFamily: 'Montserrat',
                marginVertical: 10
              }}
            >

              {I18n.translate( "scooter_info.startPrice")}
              {"     "}
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontFamily: 'Montserrat',
                marginVertical: 10
              }}
            >
              <Text style={{fontWeight: '700'}}>15</Text> UAH
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
                marginVertical: 10,
                fontWeight: '700',
                fontFamily: 'Montserrat',
              }}
            >
              {I18n.translate( "scooter_info.minutePrice")}
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontFamily: 'Montserrat',
                marginVertical: 10
              }}
            >
               <Text style={{fontWeight: '700'}}>1.0</Text> UAH
            </Text>
          </View>
        </View>
        <Button onPress={this._rent.bind(this)}/>
      </View>
    );
  }
}
