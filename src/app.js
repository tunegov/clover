const { Navigation } = require( "react-native-navigation" );
const { registerScreens } = require( "./modules" );
const { Platform } = require( "react-native" );

if ( Platform.OS === "android" ) {
	alert = title => {
		Navigation.showOverlay( {
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
		} );
	};
}

function start() {
	registerScreens();
	Navigation.events().registerAppLaunchedListener( async () => {
		Navigation.setDefaultOptions( {
			layout: {
				backgroundColor: "black",
				orientation: [ "portrait" ]
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
		} );
		
		Navigation.setRoot( {
			root: {
				stack: {
					id: "SigninScreen",
					children: [
						{
							component: {
								name: "clover.rent.SigninScreen"
							}
						}
					]
				}
			}
		} );
		
		await Navigation.showOverlay( {
			component: {
				name: "clover.rent.Loader",
				options: {
					overlay: {
						interceptTouchOutside: true
					},
					modalPresentationStyle: "overCurrentContext"
				}
			}
		} );
	} );
}

module.exports = {
	start
};
