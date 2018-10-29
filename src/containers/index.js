import { Navigation }  from "react-native-navigation";
import React 		       from "react";
import BleScreen       from "./Ble";
import DrawerLeft      from "./DrawerLeft";
import SplashScreen    from "./SplashScreen";
import LoginScreen     from "./Login";
import MapViewPage     from "./MapView";
import QRCodeScanner   from "./QRScanner";
import QRCodeScreen    from "./QRCode";
import QRSwiper        from "./QRSwiper";
import ScooterScreen   from "./ScooterScreen";
import SigninScreen    from "./Signin";
import SignupScreen    from "./Signup";
import * as ROUTES     from "../constants";
import I18n 		       from "react-native-i18n"
import store 		       from '../store'
import { Provider }    from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'


I18n.fallbacks = true
I18n.translations = {
  ua: require("../translations/ua"),
	en: require("../translations/en"),
}

I18n.locale = 'ua'

const createApp = (Component, ...props) => {
  return class App extends React.Component {
    render() {
      return (
        <Provider store={store.store}>
          <PersistGate
            persistor={store.persistor}
          >
            <Component {...{
              ...this.props,
              ...props,
            }} />
          </PersistGate>
        </Provider>
      );
    }
  }
}

function registerScreens() {
	Navigation.registerComponent( ROUTES.SPLASH_SCREEN, () => createApp(SplashScreen) );
	Navigation.registerComponent( ROUTES.BLE, () => createApp(BleScreen ));
	Navigation.registerComponent( ROUTES.MAP_VIEW, () => createApp(MapViewPage) );
	Navigation.registerComponent( ROUTES.QR_CODE, () => createApp(QRCodeScreen) );
	Navigation.registerComponent( ROUTES.QR_SWIPER, () => createApp(QRSwiper) );
	Navigation.registerComponent( ROUTES.DRAWER_LEFT, () => createApp(DrawerLeft) );
	Navigation.registerComponent( ROUTES.SIGN_IN, () => createApp(SigninScreen) );
	Navigation.registerComponent( ROUTES.LOG_IN, () => createApp(LoginScreen));
	Navigation.registerComponent( ROUTES.SIGN_UP, () => createApp( SignupScreen) );
	Navigation.registerComponent( ROUTES.SCOOTER_INFO, () => createApp(ScooterScreen) );
	Navigation.registerComponent( ROUTES.QR_CODE_SCANNER, () => createApp(QRCodeScanner));
}

module.exports = {
	registerScreens
};
