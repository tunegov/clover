import { Navigation } from "react-native-navigation";
import BleScreen      from "./Ble";
import DrawerLeft     from "./DrawerLeft";
import SplashScreen   from "./SplashScreen";
import LoginScreen    from "./Login";
import MapViewPage    from "./MapView";
import QRCodeScanner  from "./QRScanner";
import QRCodeScreen   from "./QRCode";
import QRSwiper       from "./QRSwiper";
import ScooterScreen  from "./ScooterScreen";
import SigninScreen   from "./Signin";
import SignupScreen   from "./Signup";
import * as ROUTES    from "./Common/constants";
import I18n 		  from "react-native-i18n"

I18n.fallbacks = true
I18n.translations = {
	en: require("./Common/translations/ua"),
	ua: require("./Common/translations/ua")
}

function registerScreens() {
	Navigation.registerComponent( ROUTES.SPLASH_SCREEN, () => SplashScreen );
	Navigation.registerComponent( ROUTES.BLE, () => BleScreen );
	Navigation.registerComponent( ROUTES.MAP_VIEW, () => MapViewPage );
	Navigation.registerComponent( ROUTES.QR_CODE, () => QRCodeScreen );
	Navigation.registerComponent( ROUTES.QR_SWIPER, () => QRSwiper );
	Navigation.registerComponent( ROUTES.DRAWER_LEFT, () => DrawerLeft );
	Navigation.registerComponent( ROUTES.SIGN_IN, () => SigninScreen );
	Navigation.registerComponent( ROUTES.LOG_IN, () => LoginScreen );
	Navigation.registerComponent( ROUTES.SIGN_UP, () => SignupScreen );
	Navigation.registerComponent( ROUTES.SCOOTER_INFO, () => ScooterScreen );
	Navigation.registerComponent( ROUTES.QR_CODE_SCANNER, () => QRCodeScanner);
}

module.exports = {
	registerScreens
};
