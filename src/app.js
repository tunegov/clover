const { Navigation } = require("react-native-navigation");
const { registerScreens } = require("./screens");
const { Platform } = require("react-native");

if (Platform.OS === "android") {
  alert = title => {
    Navigation.showOverlay({
      component: {
        name: "clover.rent.alert",
        passProps: {
          title
        },
        options: {
          overlay: {
            interceptTouchOutside: true
          }
        }
      }
    });
  };
}

function start() {
  registerScreens();
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setDefaultOptions({
      layout: {
        backgroundColor: "white",
        orientation: ["portrait"]
      },
      animations: {
        push: {
          waitForRender: true
        },
        showModal: {
          waitForRender: true
        },
        showOverlay: {
          waitForRender: true
        },
        setRoot: {
          waitForRender: true
        }
      },
      topBar: {
        title: {
          color: "white"
        },
        background: {
          color: "black"
        },
        buttonColor: "white",
        backButton: {
          color: "white"
        },
        drawBehind: true,
        largeTitle: {
          visible: false
        }
      }
    });

    Navigation.setRoot({
      root: {
        stack: {
          id: "TEST",
          children: [
            {
              component: {
                name: "clover.rent.MapViewPage"
              }
            }
          ]
        }
      }
    });

    await Navigation.showOverlay({
      component: {
        name: "clover.rent.Loader",
        options: {
          animations: {
            waitForRender: true
          },
          overlay: {
            interceptTouchOutside: true
          },
          modalPresentationStyle: "overCurrentContext"
        }
      }
    });
  });
}

module.exports = {
  start
};
