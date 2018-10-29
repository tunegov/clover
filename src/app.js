const { Navigation } = require( "react-native-navigation" );
const { registerScreens } = require( "./containers" );
const { Platform } = require( "react-native" );
import store from './store'
import * as ROUTES from './constants'

const isAuthenticated = store.store.getState().auth.user

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
		
		if(isAuthenticated) {
			Navigation.setRoot( {
				root: {
					stack: {
						id:  ROUTES.MAP_VIEW,
						children: [
							{
								component: {
									name: ROUTES.MAP_VIEW
								}
							}
						]
					}
				}
			} );
		} else {
			Navigation.setRoot( {
				root: {
					stack: {
						id: ROUTES.SIGN_IN,
						children: [
							{
								component: {
									name: ROUTES.SIGN_IN
								}
							}
						]
					}
				}
			} );
		}
		
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
