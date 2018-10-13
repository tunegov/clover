import React, { PureComponent }                                       from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Navigation }                                                 from "react-native-navigation";
import RoundedButton                                                  from '../components/RoundedButton'

import logo from '../resources/images/CloverLogoBlack.png'

export default class SigninScreen extends PureComponent {
	constructor( props ) {
		super( props );
		Navigation.events().bindComponent( this );
	}
	
	static get options() {
		return {
			statusBar: {
				backgroundColor: "transparent",
				style: "dark",
				drawBehind: true
			},
			layout: {
				backgroundColor: "white"
			},
			topBar: {
				drawBehind: true,
				visible: false,
				animate: false
			}
		};
	}
	
	
	componentDidMount() {
		StatusBar.setBarStyle( 'dark-content' )
	}
	
	componentDidAppear() {
		StatusBar.setBarStyle( "dark-content", true );
	}
	
	_toLogin() {
		Navigation.push( this.props.componentId, {
			component: {
				name: "clover.rent.LoginScreen",
				options: {
					push: {
						waitForRender: true
					}
				}
			}
		} );
	}
	
	_toSignup() {
		Navigation.push( this.props.componentId, {
			component: {
				name: "clover.rent.SignupScreen",
				options: {
					push: {
						waitForRender: true
					}
				}
			}
		} );
	}
	
	render() {
		return (
			<View style={ styles.fullScreen }>
				<View style={ styles.logo }>
					<Image source={ logo } style={ styles.logoImage }/>
				</View>
				<View style={ styles.textGroup }>
					<Text style={ [ styles.bigText, styles.textRed ] }>
						Start
					</Text>
					<Text style={ styles.bigText }>
						your
					</Text>
					<Text style={ styles.bigText }>
						adventure
					</Text>
				</View>
				
				<View style={ styles.bottom }>
					<RoundedButton text={ 'Log in' } color={ '#ee5253' } onPress={ this._toLogin.bind( this ) }/>
					<View style={ styles.signUpGroup }>
						<Text>
							You don't have an account?
						</Text>
						<TouchableOpacity activeOpacity={ 0.7 } onPress={ this._toSignup.bind( this ) }>
							<Text style={ styles.signUpButton }>
								Sign up here.
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}


const styles = StyleSheet.create( {
	fullScreen: {
		flex: 1,
		marginHorizontal: 40,
		paddingTop: 50
	},
	logo: {
		flex: 1
	},
	logoImage: {
		width: 70,
		height: 70,
		resizeMode: 'cover'
	},
	textGroup: {
		flex: 2
	},
	bigText: {
		fontSize: 45,
		fontWeight: '800',
		color: 'black'
	},
	textRed: {
		color: '#ee5253'
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
	signUpButton: {
		color: '#ee5253',
		paddingLeft: 5,
		fontSize: 15,
		fontWeight: '600'
	}
} )
