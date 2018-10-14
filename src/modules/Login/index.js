import React, { Component }                                    from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Navigation }                                          from "react-native-navigation";
import Icon                                                    from "react-native-vector-icons/FontAwesome5";
import DismissKeyboardView                                     from '../Common/components/DismissKeyboardView'
import RoundedButton                                           from '../Common/components/RoundedButton'
import TextInputWithIcon                                       from '../Common/components/TextInputWithIcon'

export default class LoginScreen extends Component {
	static get options() {
		return {
			statusBar: {
				backgroundColor: "transparent",
				style: "dark",
				drawBehind: true
			},
			layout: {
				backgroundColor: "#1e2527"
			},
			topBar: {
				title: {
					text: "LoginScreen"
				},
				drawBehind: true,
				visible: false,
				animate: false
			}
		};
	}
	
	componentDidMount() {
		StatusBar.setBarStyle( 'light-content', true )
	}
	
	_back() {
		if ( this.props.fromSignUp ) {
			Navigation.popToRoot( this.props.componentId );
		} else {
			Navigation.pop( this.props.componentId );
		}
	}
	
	_toSignup() {
		Navigation.push( this.props.componentId, {
			component: {
				name: "clover.rent.SignupScreen",
				passProps: {
					fromLogIn: true
				},
				options: {
					push: {
						waitForRender: true
					}
				}
			}
		} );
	}
	
	goToMainApp() {
		Navigation.showOverlay( {
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
		Navigation.setRoot( {
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
		} );
	}
	
	render() {
		return (
			<DismissKeyboardView style={ styles.fullScreen }>
				
				<View style={ styles.backButton }>
					<TouchableOpacity activeOpacity={ 0.7 } onPress={ this._back.bind( this ) }>
						<Icon name="arrow-left" size={ 20 } color="white"/>
					</TouchableOpacity>
				</View>
				<View style={ styles.title }>
					<Text style={ styles.titleText }>
						Log in
					</Text>
				</View>
				
				<View style={ styles.form }>
					<TextInputWithIcon
						icon={ 'user' }
						iconColor={ '#fff' }
						placeholderTextColor={ '#808e9b' }
						placeholder={ 'User' }
					/>
					<TextInputWithIcon
						icon={ 'lock' }
						iconColor={ '#fff' }
						placeholderTextColor={ '#808e9b' }
						placeholder={ 'Password' }
						secureTextEntry
					/>
				</View>
				
				
				<View style={ styles.bottom }>
					<RoundedButton text={ 'Log in' } color={ '#000' } onPress={ this.goToMainApp.bind( this ) }/>
					{ !this.props.fromSignUp && (
						<View style={ styles.signUpGroup }>
							<Text style={ styles.signUpAsk }>
								First time here?
							</Text>
							<TouchableOpacity activeOpacity={ 0.7 } onPress={ this._toSignup.bind( this ) }>
								<Text style={ styles.signUpButton }>
									Sign up.
								</Text>
							</TouchableOpacity>
						</View>
					) }
				
				</View>
			</DismissKeyboardView>
		);
	}
}


const styles = StyleSheet.create( {
	fullScreen: {
		flex: 1,
		marginHorizontal: 40,
		paddingTop: 60
	},
	backButton: {
		flex: 1,
		maxHeight: 80
	},
	title: {
		flex: 1,
		maxHeight: 1000
	},
	titleText: {
		fontSize: 40,
		fontWeight: '800',
		color: 'white'
	},
	form: {
		flex: 2
	},
	bottom: {
		flex: 1
	},
	signUpGroup: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'baseline',
		marginTop: 25
	},
	signUpAsk: {
		color: 'white'
	},
	signUpButton: {
		color: '#ee5253',
		paddingLeft: 5,
		fontSize: 15,
		fontWeight: '600'
	}
} )
