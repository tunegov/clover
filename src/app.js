const { Navigation } = require("react-native-navigation");
const { registerScreens } = require("./containers");
const { Platform } = require("react-native");

import { Crashlytics } from 'react-native-fabric';

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
				backgroundColor: "black",
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
				sideMenu: {
					left: {
						width: 250,
						shouldStretchDrawer: false,
						component: {
							id: "DrawerLeft",
							name: "clover.rent.DrawerLeft"
						}
					},
					center: {
						stack: {
							id: "MapViewPage",
							children: [
								{
									component: {
										name: "clover.rent.MapViewPage",
										options: {
											topBar: {
												visible: false
											}
										}
									}
								}
							]
						}
					}
				}
			}
		});

		Crashlytics.setUserName('burya4ok');
		Crashlytics.setUserEmail('s.e.tunegov@clover-company.cc');
		Crashlytics.setUserIdentifier('1337');

		// await Navigation.showOverlay( {
		// 	component: {
		// 		name: "clover.rent.Loader",
		// 		options: {
		// 			overlay: {
		// 				interceptTouchOutside: true
		// 			},
		// 			modalPresentationStyle: "overCurrentContext"
		// 		}
		// 	}
		// } );
	});
}

module.exports = {
	start
};
