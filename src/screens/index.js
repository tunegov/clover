const { Navigation } = require("react-native-navigation");
import LoaderScreen from "./LoaderScreen";
import Loader from "./Loader";
import LoaderNoAnimation from "./LoaderNoAnimation";
import MapViewPage from "./MapViewPage";
import ScrollingMapView from "./ScrollingMapView";

function registerScreens() {
  Navigation.registerComponent("clover.rent.LoaderScreen", () => LoaderScreen);
  Navigation.registerComponent(
    "clover.rent.LoaderNoAnimation",
    () => LoaderNoAnimation
  );
  Navigation.registerComponent("clover.rent.Loader", () => Loader);
  Navigation.registerComponent("clover.rent.MapViewPage", () => MapViewPage);
  Navigation.registerComponent(
    "clover.rent.ScrollingMapView",
    () => ScrollingMapView
  );
}

module.exports = {
  registerScreens
};
