import { Navigation } from "react-native-navigation";
import BleScreen      from "./BleScreen";
import DrawerLeft     from "./DrawerLeft";
import Loader         from "./Loader";
import LoginScreen    from "./LoginScreen";
import MapViewPage    from "./MapViewPage";
import QRCodeScanner  from "./QRCodeScanner";
import QRCodeScreen   from "./QRCodeScreen";
import QRSwiper       from "./QRSwiper";
import ScooterScreen  from "./ScooterScreen";
import SigninScreen   from "./SigninScreen";
import SignupScreen   from "./SignupScreen";

function registerScreens() {
	Navigation.registerComponent( "clover.rent.Loader", () => Loader );
	Navigation.registerComponent( "clover.rent.BleScreen", () => BleScreen );
	Navigation.registerComponent( "clover.rent.MapViewPage", () => MapViewPage );
	Navigation.registerComponent( "clover.rent.QRCodeScreen", () => QRCodeScreen );
	Navigation.registerComponent( "clover.rent.QRSwiper", () => QRSwiper );
	Navigation.registerComponent( "clover.rent.DrawerLeft", () => DrawerLeft );
	Navigation.registerComponent( "clover.rent.SigninScreen", () => SigninScreen );
	Navigation.registerComponent( "clover.rent.LoginScreen", () => LoginScreen );
	Navigation.registerComponent( "clover.rent.SignupScreen", () => SignupScreen );
	Navigation.registerComponent(
		"clover.rent.ScooterScreen",
		() => ScooterScreen
	);
	Navigation.registerComponent(
		"clover.rent.QRCodeScanner",
		() => QRCodeScanner
	);
}

module.exports = {
	registerScreens
};
