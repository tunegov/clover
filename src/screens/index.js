const { Navigation } = require("react-native-navigation");
import Loader from "./Loader";
import BleScreen from "./BleScreen";
import MapViewPage from "./MapViewPage";
import QRCodeScreen from "./QRCodeScreen";
import QRCodeScanner from "./QRCodeScanner";
import QRSwiper from "./QRSwiper";
import DrawerLeft from "./DrawerLeft";
import ScooterScreen from "./ScooterScreen";

function registerScreens() {
  Navigation.registerComponent("clover.rent.Loader", () => Loader);
  Navigation.registerComponent("clover.rent.BleScreen", () => BleScreen);
  Navigation.registerComponent("clover.rent.MapViewPage", () => MapViewPage);
  Navigation.registerComponent("clover.rent.QRCodeScreen", () => QRCodeScreen);
  Navigation.registerComponent("clover.rent.QRSwiper", () => QRSwiper);
  Navigation.registerComponent("clover.rent.DrawerLeft", () => DrawerLeft);
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
